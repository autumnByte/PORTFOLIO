import React from "react";
import Magnetic from "./magnetic";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        padding: "28px 0",
        borderBottom: "1px solid #1c1c22",
        position: "sticky",
        top: 0,
        background: "rgba(15,15,18,0.8)",
        backdropFilter: "blur(10px)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Magnetic strength={20}>
          <a
            href="#home"
            style={{
              fontWeight: 700,
              letterSpacing: "1px",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            SD
          </a>
        </Magnetic>

        <div
          style={{
            display: "flex",
            gap: "40px",
            fontSize: "0.95rem",
          }}
        >
             <Magnetic strength={15}>
            <a href="#about" style={linkStyle}>
              About
            </a>
          </Magnetic>
          <Magnetic strength={15}>
            <a href="#work" style={linkStyle}>
              Work
            </a>
          </Magnetic>
          <Magnetic strength={15}>
            <a href="#tech" style={linkStyle}>
              Tech Stack
            </a>
          </Magnetic>
          <Magnetic strength={15}>
            <a href="#contact" style={linkStyle}>
              Contact
            </a>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
};

const linkStyle: React.CSSProperties = {
  color: "#aaa",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

export default Navbar;