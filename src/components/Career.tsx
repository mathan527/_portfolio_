import "./styles/Career.css";
import { config } from "../config";
import { Rocket, Cpu, Globe, BrainCircuit, GraduationCap, Code2, Microscope } from "lucide-react";

const renderIcon = (iconName: string | undefined) => {
  const iconProps = { size: 28, color: "var(--accentColor)" };
  switch (iconName) {
    case "Rocket": return <Rocket {...iconProps} />;
    case "Cpu": return <Cpu {...iconProps} />;
    case "Globe": return <Globe {...iconProps} />;
    case "BrainCircuit": return <BrainCircuit {...iconProps} />;
    case "GraduationCap": return <GraduationCap {...iconProps} />;
    case "Code2": return <Code2 {...iconProps} />;
    case "Microscope": return <Microscope {...iconProps} />;
    default: return null;
  }
};

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {renderIcon(exp.icon)}
                    {exp.position}
                  </h4>
                  <h5 style={{ color: "var(--accentColor)", marginBottom: "4px" }}>{exp.company}</h5>
                  {/* @ts-ignore */}
                  {exp.duration && (
                    <span style={{ color: "var(--accentColor)", fontSize: "14px", opacity: 0.85, display: "block", marginTop: "2px" }}>
                      {/* @ts-ignore */}
                      {exp.duration}
                    </span>
                  )}
                </div>
              </div>
              <div className="career-info-desc">
                <p style={{ whiteSpace: "pre-wrap", width: "100%" }}>{exp.description}</p>
                {/* @ts-ignore */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="career-tech-badges">
                    {/* @ts-ignore */}
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="career-tech-badge">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
