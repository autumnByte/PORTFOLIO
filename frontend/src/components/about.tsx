import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Deep Background Glow */}
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
    />``

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1.3fr",
            gap: "50px",
            alignItems: "center",
          }}
        >
          {/* LEFT — DRAMATIC IDENTITY */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2.0,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h2
              style={{
                fontSize: "1rem",
                letterSpacing: "3px",
                marginBottom: "20px",
                color: "var(--text-secondary)",
              }}
            >
              SUHANI DWIVEDI
            </h2>

            <h1
              style={{
                fontSize: "6rem",
                lineHeight: 0.9,
                fontWeight: 900,
                letterSpacing: "-3px",
              }}
            >
              FULL
              <br />
              <span style={{ color: "var(--accent)" }}>STACK</span>
              <br />
              ENGINEER
            </h1>
          </motion.div>

          {/* RIGHT — MANIFESTO */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.8,
                marginBottom: "50px",
                color: "var(--text-secondary)",
              }}
            >
              I architect and build complete systems — from interaction layer to
              backend logic. My work blends frontend precision, backend
              scalability, and AI-powered intelligence into cohesive,
              production-ready applications.
            </motion.p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "30px",
              }}
            >
              {[
                {
                  title: "Frontend Systems",
                  desc: "React, TypeScript, UI architecture, interaction design.",
                },
                {
                  title: "Backend Engineering",
                  desc: "Python, FastAPI, REST APIs, database modeling.",
                },
                {
                  title: "AI Integration",
                  desc: "ML models embedded into production systems.",
                },
                {
                  title: "System Design",
                  desc: "Scalable architecture with clean separation of concerns.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 20px 40px rgba(196,181,253,0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{
                    padding: "24px",
                    borderRadius: "18px",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                    border: "1px solid rgba(196,181,253,0.15)",
                  }}
                >
                  <h4
                    style={{
                      color: "var(--accent)",
                      marginBottom: "10px",
                      fontSize: "1rem",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
