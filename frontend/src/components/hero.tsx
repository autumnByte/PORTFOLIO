import Magnetic from "./magnetic";
import TerminalPanel from "./TerminalPanel";

const Hero = ({ onOpenChat }: { onOpenChat: () => void }) => {
  return (
    <section
      id="home"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 0",
        position: "relative",
      }}
    >
      <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "900px",
        height: "900px",
        background:
          "radial-gradient(circle, rgba(196,181,253,0.15) 0%, rgba(196,181,253,0.07) 30%, transparent 70%)",
        filter: "blur(140px)",
        zIndex: 0,
      }}
    />
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            alignItems: "center",
            gap: "80px",
          }}
        >
          {/* LEFT SIDE */}
          <div>
            <h1
              style={{
                fontSize: "4.5rem",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-1px",
                marginBottom: "32px",
              }}
            >
              Engineering systems
              <br />
              with <span style={{ color: "var(--accent)" }}>precision</span>
              <br />& intent.
            </h1>

            <p
              style={{
                fontSize: "1.2rem",
                color: "var(--text-secondary)",
                marginBottom: "40px",
                maxWidth: "500px",
              }}
            >
              Full-stack developer focused on scalable architectures, AI-powered
              solutions, and interface systems that feel intentional.
            </p>

            <div style={{ display: "flex", gap: "20px" }}>
              <Magnetic>
                <a
                  href="/Suhani_dwivedi (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "14px 28px",
                    background: "var(--accent)",
                    color: "#000",
                    fontWeight: 600,
                    borderRadius: "8px",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Take a Look at My Resume
                </a>
              </Magnetic>

              <Magnetic>
                <button
                  style={{
                    padding: "14px 28px",
                    background: "transparent",
                    border: "1px solid #2a2a32",
                    color: "#fff",
                    cursor: "pointer",
                    borderRadius: "8px",
                  }}
                  onClick={onOpenChat}
                >
                  Ask My Resume
                </button>
              </Magnetic>
            </div>
          </div>

          {/* RIGHT SIDE — TERMINAL */}
          <TerminalPanel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
