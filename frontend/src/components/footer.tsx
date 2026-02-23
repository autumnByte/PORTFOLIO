import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      style={{
        position: "relative",
        padding: "120px 0 50px 0",
        background: "linear-gradient(to bottom, transparent, #0d0d12 20%)",
      }}
    >
        
      <div className="container">
        {/* Big CTA */}
        <div style={{ marginBottom: "80px", maxWidth: "700px" }}>
          <h2 style={{ marginBottom: "20px" }}>
            Let’s build something meaningful.
          </h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>
            I’m open to internships, collaborations, and ambitious ideas. Let’s
            connect.
          </p>

          <a
            href="mailto:suhanidwivedi2k5@gmail.com"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "var(--accent)",
              color: "#000",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "20px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "30px",
          }}
        >
          <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} Suhani Dwivedi
          </div>

          <div style={{ display: "flex", gap: "20px", fontSize: "1.2rem" }}>
            <a
              href="https://linkedin.com/in/suhani-dwivedi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/autumnByte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a href="mailto:suhanidwivedi2k5@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
