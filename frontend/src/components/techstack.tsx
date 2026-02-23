import React from "react";
import Reveal from "./reveal";
import {
  FaReact,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFastapi,
  SiMysql,
  SiSqlite,
  SiScikitlearn,
} from "react-icons/si";

const techItems = [
  { icon: <FaJava />, label: "Java" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiFastapi />, label: "FastAPI" },
  { icon: <SiScikitlearn />, label: "Scikit-learn" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiSqlite />, label: "SQLite" },
  { icon: <FaGithub />, label: "GitHub" },
];

const TechStack: React.FC = () => {
  return (
    <section id="tech" className="section">
      <div
        className="container"
        style={{
          position: "relative",
        }}
      >
        {/* Gradient Glow Background */}
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
            zIndex: -1,
            pointerEvents: "none",
          }}
        />

        <Reveal>
          {/* Heading Section */}
          <div style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              Tech Stack
            </h2>

            <p
              style={{
                color: "var(--text-secondary)",
                maxWidth: "500px",
              }}
            >
              Technologies I use to design, build, and deploy intelligent
              systems.
            </p>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "40px",
            }}
          >
            {techItems.map((tech, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "30px 20px",
                  background: "#15151b",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.background = "#1c1c24";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.background = "#15151b";
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "14px",
                    color: "var(--accent)",
                  }}
                >
                  {tech.icon}
                </div>

                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#ddd",
                  }}
                >
                  {tech.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TechStack;
