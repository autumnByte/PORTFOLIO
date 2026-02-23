import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatPanel: React.FC<Props> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<
    { role: string; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "No response received.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "#000",
              backdropFilter: "blur(6px)",
              zIndex: 99,
            }}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 180, damping: 25 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: "420px",
              background: "#121217",
              borderLeft: "1px solid rgba(196,181,253,0.2)",
              padding: "30px",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h3 style={{ color: "var(--accent)" }}>
                Resume Assistant
              </h3>
              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  color: "#aaa",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                marginBottom: "20px",
              }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "15px",
                    textAlign: msg.role === "user" ? "right" : "left",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      padding: "10px 14px",
                      borderRadius: "12px",
                      background:
                        msg.role === "user"
                          ? "var(--accent)"
                          : "rgba(255,255,255,0.05)",
                      color:
                        msg.role === "user" ? "#000" : "#ddd",
                      maxWidth: "80%",
                      fontSize: "0.9rem",
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div style={{ marginBottom: "15px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "10px 14px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.05)",
                      color: "#aaa",
                      fontSize: "0.9rem",
                    }}
                  >
                    Typing...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={{ display: "flex", gap: "10px" }}>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Ask about my experience..."
                rows={1}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "transparent",
                  color: "#fff",
                  resize: "none",
                  outline: "none",
                }}
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "none",
                  background: "var(--accent)",
                  color: "#000",
                  cursor: "pointer",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                Send
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AIChatPanel;