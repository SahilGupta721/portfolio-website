import Link from "next/link";
import { projects } from "../data/projects";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import styles from "../styles/Home.module.css";

export default function Home() {
  const featuredProjects = projects.filter((d) => d.featured);

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div
            className={styles.heroContent}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(/toronto.jpg)`,
            }}
          >
            <div className={`${styles.heroText} ${styles.text4xl}`}>
              <h1>I&apos;m Sahil Gupta based in Toronto, Canada</h1>
              <h2>Software Developer | AI/ML | Project Analyst</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={styles.projectsSection}>
        <div className={styles.projectContainer}>
          <h2 id="projects" className={styles.sectionTitle}>
            Some of recent work
          </h2>

          <div className={styles.projectsScroll}>
            {featuredProjects.map((project, index) => (
              <div className={styles.projectCard} key={index}>
                <a
                  href={project.link}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.link, "_blank", "noopener,noreferrer");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.projectImageContainer}>
                    <div
                      className={styles.projectImage}
                      style={{ backgroundImage: `url("${project.image}")` }}
                    />
                    <div className={styles.imageOverlay}>
                      <span className={styles.overlayBadge}>
                        {project.category || "Project"}
                      </span>
                    </div>
                  </div>
                </a>

                <div className={styles.projectInfo}>
                  <p className={styles.projectName}>{project.name}</p>
                  <p className={styles.projectDesc}>{project.description}</p>

                  <div className={styles.badges}>
                    {project.technologies.map((tech, idx) => {
                      const badgeClass = tech
                        .toLowerCase()
                        .replace(".", "")
                        .replace(/\s+/g, "-");
                      return (
                        <span
                          key={idx}
                          className={`${styles.badge} ${styles[badgeClass] || ""}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                    <span
                      className={`${styles.badge} ${styles[project.type] || ""}`}
                    >
                      {project.type === "team" ? "Team Project" : "Solo Project"}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className={styles.projectCardButtons}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.projectButton} ${styles.githubButton}`}
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.projectButton} ${styles.liveButton}`}
                      >
                        <HiExternalLink size={20} />
                      </a>
                    )}
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.projectButton} ${styles.youtubeButton}`}
                      >
                        <FaYoutube size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
