import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string;
};

const projects: Project[] = [
  {
    title: "Crim Risk Analyzer",
    description:
      "Machine learning-based criminal risk analyzer built with Streamlit. It evaluates behavioral and historical attributes to assess risk levels through an interactive analytical interface.",
    tech: "Python · Streamlit · Data Science · ML Models",
  },
  {
    title: "CompliGuard",
    description:
      "Java-based Cyber Hygiene Compliance Checker featuring system diagnostics, firewall validation, antivirus checks, and automated reporting.",
    tech: "Java · Swing · OOP · System Security",
  },
  {
    title: "Resume Builder",
    description:
      "Interactive resume creation tool allowing structured input and dynamic resume generation with clean formatting logic.",
    tech: "JavaScript · Frontend Logic · UI Systems",
  },
  {
    title: "EditKaro Portfolio Platform",
    description:
      "Modern responsive website for a video editing agency with strong layout hierarchy and animation-driven UI.",
    tech: "HTML · CSS · JavaScript",
  },
];

const Projects: React.FC = () => (
  <section
    id="work"
    className="section"
    style={{
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Soft Background Glow */}
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

    <div className="container" style={{ position: "relative", zIndex: 2 }}>
      {/* Section Header */}
      <div style={{ marginBottom: "80px" }}>
        <h2 style={{ marginBottom: "16px" }}>My Work</h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "550px" }}>
          AI systems, backend architectures, and structured interface platforms
          engineered with clarity and intent.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "30px",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -12,
              scale: 1.02,
              boxShadow: "0px 20px 40px rgba(196,181,253,0.25)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              padding: "22px",
              borderRadius: "18px",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              border: "1px solid rgba(196,181,253,0.15)",
              backdropFilter: "blur(12px)",
              cursor: "pointer",
            }}
          >
            <h3
              style={{
                marginBottom: "14px",
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.85rem",
                marginBottom: "20px",
                lineHeight: 1.6,
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
              }}
            >
              {project.tech.split(" · ").map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "0.65rem",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    background: "rgba(196,181,253,0.12)",
                    border: "1px solid rgba(196,181,253,0.25)",
                    color: "var(--accent)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
