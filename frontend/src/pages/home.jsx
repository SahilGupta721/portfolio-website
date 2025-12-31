import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import '../css/home.css'; // your separate CSS file
import toronto from "../images/toronto.jpg";

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
                <h1>I’m Sahil Gupta based in Toronto, Canada</h1>
                <h2>Software Developer | AI/ML | Project Analyst</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Featured projects Section */}
        <section className="projects-section">
          <div className="project-container">
            <h2 id='projects' className="section-title">Some of recent work</h2>
            <div className="projects-scroll">
              {featuredprojects.map((projects) => (
                <div className="project-card">
                  <Link to={`${projects.link}`} onClick={(e) => {
                    e.preventDefault();
                    window.open(`${projects.link}`, "_blank", "noopener,noreferrer");
                  }}>

                    <div
                      className="project-image"
                      style={{ backgroundImage: `url("${projects.image}")` }}
                    />
                  </Link>

                  <div className="project-info">
                    <p className="project-name">{projects.name}</p>
                    <p className="project-desc">{projects.description}</p>
                    <div className="badges">
                      {projects.technologies.map((tech, index) => (
                        <span key={index} className={`badge ${tech.toLowerCase().replace('.', '')}`}>
                          {tech}
                        </span>
                      ))}
                      <span className={`badge ${projects.type}`}>
                        {projects.type === "team" ? "Team Project" : "Solo Project"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>

  );
}

export default Home;
