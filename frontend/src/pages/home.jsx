import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import '../css/home.css';
import toronto from "../images/toronto.jpg";
// Add these icon imports
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

function Home() {
  const featuredprojects = projects.filter(d => d.featured);

  return (
    <>
      <div className="home-page">

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div
              className="hero-content"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${toronto})`
              }}
            >
              <div className="hero-text text-4xl">
                <h1>I'm Sahil Gupta based in Toronto, Canada</h1>
                <h2>Software Developer | AI/ML | Project Analyst</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="projects-section">
          <div className="project-container">
            <h2 id="projects" className="section-title">Some of recent work</h2>

            <div className="projects-scroll">
              {featuredprojects.map((project, index) => (
                <div className="project-card" key={index}>
                  <Link
                    to={project.link}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.link, "_blank", "noopener,noreferrer");
                    }}
                  >
                    <div className="project-image-container">
                      <div
                        className="project-image"
                        style={{ backgroundImage: `url("${project.image}")` }}
                      />
                      <div className="image-overlay">
                        <span className="overlay-badge">
                          {project.category || "Project"}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="project-info">
                    <p className="project-name">{project.name}</p>
                    <p className="project-desc">{project.description}</p>

                    <div className="badges">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`badge ${tech
                            .toLowerCase()
                            .replace('.', '')
                            .replace(/\s+/g, '-')}`}
                        >
                          {tech}
                        </span>
                      ))}
                      <span className={`badge ${project.type}`}>
                        {project.type === "team" ? "Team Project" : "Solo Project"}
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="project-card-buttons">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-button github-button"
                        >
                          <FaGithub size={20} />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-button live-button"
                        >
                          <HiExternalLink size={20} />

                        </a>
                      )}
                      {project.youtube && (

                        <a href={project.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-button youtube-button"
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
        </section >
      </div >
    </>
  );
}

export default Home;
