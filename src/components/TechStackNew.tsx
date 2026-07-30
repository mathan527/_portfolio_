import "./styles/TechStackNew.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TechItem {
  name: string;
  icon: string;
  url: string;
  color?: string;
  alwaysWhite?: boolean;
}

const hexToRgba = (hex: string, alpha: number) => {
  if (hex.toLowerCase() === 'white' || hex === '#ffffff' || hex === '#fff') return `rgba(255, 255, 255, ${alpha})`;
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(c => c + c).join('');
  }
  const r = parseInt(cleanHex.slice(0, 2), 16) || 255;
  const g = parseInt(cleanHex.slice(2, 4), 16) || 255;
  const b = parseInt(cleanHex.slice(4, 6), 16) || 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const techStack: TechItem[][] = [
  // Row 1 - 12 cards
  [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org", color: "#3776AB" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org", color: "#3178C6" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.cppreference.com/w/c", color: "#A8B9CC" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", url: "https://isocpp.org", color: "#00599C" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg", url: "https://en.wikipedia.org/wiki/SQL", color: "#336791" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev", color: "#61DAFB" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org", color: "#FFFFFF", alwaysWhite: true },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "#E34F26" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "#1572B6" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com", color: "#06B6D4" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com", color: "#7952B3" },
  ],
  // Row 2 - 10 cards
  [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org", color: "#339933" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", url: "https://fastapi.tiangolo.com", color: "#009688" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://restfulapi.net", color: "#8B5CF6" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org", color: "#4169E1" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com", color: "#4479A1" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", url: "https://supabase.com", color: "#3ECF8E" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com", color: "#47A248" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", url: "https://firebase.google.com", color: "#FFCA28" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", url: "https://redis.io", color: "#DC382D" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com", color: "#F05032" },
  ],
  // Row 3 - 8 cards
  [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com", color: "#FFFFFF", alwaysWhite: true },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org", color: "#FCC624" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://docker.com", color: "#2496ED" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", url: "https://aws.amazon.com", color: "#FF9900" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", url: "https://azure.microsoft.com", color: "#0078D4" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com", color: "#FFFFFF", alwaysWhite: true },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com", color: "#007ACC" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com", color: "#FF6C37" },
  ],
  // Row 4 - 6 cards
  [
    { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", url: "https://en.wikipedia.org/wiki/Machine_learning", color: "#8B5CF6" },
    { name: "Deep Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", url: "https://en.wikipedia.org/wiki/Deep_learning", color: "#EC4899" },
    { name: "NLP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://en.wikipedia.org/wiki/Natural_language_processing", color: "#14B8A6" },
    { name: "LLMs", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", url: "https://en.wikipedia.org/wiki/Large_language_model", color: "#F97316" },
    { name: "Agentic AI", icon: "https://img.icons8.com/fluency/48/brain.png", url: "https://en.wikipedia.org/wiki/Intelligent_agent", color: "#A855F7" },
    { name: "RAG", icon: "https://img.icons8.com/fluency/48/data-configuration.png", url: "https://en.wikipedia.org/wiki/Prompt_engineering#Retrieval-augmented_generation", color: "#6366F1" },
  ],
  // Row 5 - 4 cards
  [
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", url: "https://tensorflow.org", color: "#FF6F00" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", url: "https://pytorch.org", color: "#EE4C2C" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", url: "https://scikit-learn.org", color: "#F7931E" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", url: "https://opencv.org", color: "#5C3EE8" },
  ],
  // Row 6 - 2 cards
  [
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", url: "https://numpy.org", color: "#4DABCF" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", url: "https://pandas.pydata.org", color: "#150458" },
  ],
];

const TechStackNew = () => {

  useEffect(() => {
    // Initial state: hidden for staggered animation
    gsap.set(".techstack-item", { opacity: 0, y: 30 });
    
    gsap.to(".techstack-item", {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.04, // 40ms delay between cards
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".techstack-pyramid",
        start: "top 85%", // starts animation when pyramid is 85% down the viewport
        once: true
      },
    });
  }, []);

  return (
    <div className="techstack-new" id="techstack">
      {/* Background Radial Gradient */}
      <div className="techstack-bg-glow"></div>
      
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`techstack-item ${tech.alwaysWhite ? "always-white" : ""}`}
                  title={tech.name}
                  data-cursor="disable"
                  style={{
                    "--brand-color": tech.color || "#ffffff",
                    "--brand-color-glow": tech.color ? hexToRgba(tech.color, 0.45) : "rgba(255, 255, 255, 0.45)"
                  } as React.CSSProperties}
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
