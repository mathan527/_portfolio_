import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { config } from "../config";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    // Disable pinning on mobile to allow scrolling
    if (window.innerWidth <= 768) return;

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Refresh ScrollTrigger after layout settles
    ScrollTrigger.refresh();

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {config.projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h4>{project.title}</h4>
                  <p>{project.category}</p>
                </div>
                <h4>Overview</h4>
                <p className="work-description">{project.description}</p>
                
                <h4 style={{ marginTop: "20px" }}>Tech Stack</h4>
                <div className="tech-badges">
                  {project.technologies.map((tech: string, i: number) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn" data-cursor="disable">
                    <FaGithub size={18} />
                    View Source →
                  </a>
                )}
              </div>
            </div>
          ))}
          {/* See All Works Button */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>Want to see more?</h3>
              <p>Explore all of my projects and creations on GitHub</p>
              <a href="https://github.com/mathan527" target="_blank" rel="noopener noreferrer" className="see-all-btn" data-cursor="disable">
                <FaGithub size={20} style={{ marginRight: '8px' }} />
                View All Projects →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
