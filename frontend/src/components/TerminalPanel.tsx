import React, { useEffect, useState } from "react";

const lines = [
  "Initializing system architecture...",
  "Loading machine learning models...",
  "Optimizing backend pipelines...",
  "Deploying scalable interfaces...",
  "System ready.",
];

const TerminalPanel: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    let charIndex = 0;

    const typingInterval = setInterval(() => {
      setCurrentText((prev) => prev + lines[currentLineIndex][charIndex]);
      charIndex++;

      if (charIndex >= lines[currentLineIndex].length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setDisplayedLines((prev) => [...prev, lines[currentLineIndex]]);
          setCurrentText("");
          setCurrentLineIndex((prev) => prev + 1);
        }, 500);
      }
    }, 25);

    return () => clearInterval(typingInterval);
  }, [currentLineIndex]);

  return (
    <div
      style={{
        background: "#121217",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "30px",
        fontFamily: "monospace",
        fontSize: "0.9rem",
        color: "#ddd",
        minHeight: "220px",
      }}
    >
      <div style={{ marginBottom: "20px", color: "var(--accent)" }}>
        ● system.console
      </div>

      {displayedLines.map((line, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <span style={{ color: "var(--accent)" }}>{">"}</span> {line}
        </div>
      ))}

      {currentLineIndex < lines.length && (
        <div>
          <span style={{ color: "var(--accent)" }}>{">"}</span> {currentText}
          <span className="cursor">|</span>
        </div>
      )}
    </div>
  );
};

export default TerminalPanel;