import "../css/about.css";
import sahil_ph from '../images/sahil_ph.jpg';
import Services from "./services.jsx";

function About() {
  return (
    <>

      <div className="stories-page">
        <main className="isolate">

          {/* Hero Section */}
          <div id='about' className="hero-section-ab">
            <div className="hero-container-ab">
              <div className="hero-text-ab">
                <p className="label">About Me</p>
                <h1>
                  Hi,<br />I'm Sahil Gupta
                </h1>
                <p className="description">
                  I am particularly drawn to opportunities that enable me to apply my software engineering expertise to impactful, forward-thinking projects. I thrive in collaborative, cross-functional environments where I can contribute to building robust, scalable, and innovative software solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="section">
            <div className="section-container">
              <div className="section-grid">
                <div className="section-text">
                  <p className="label">My Vision</p>
                  <h2>Empowering Through Technology</h2>
                  <p>
                    My vision is to combine technical excellence with leadership and collaboration. I aspire to build software that connects people, grow through meaningful networking, and take the spotlight in opportunities that challenge me to innovate, inspire, and lead.
                  </p>
                </div>
                <div className="section-image">
                  <div className="image-wrapper">
                    <img
                    id='my-photo'
                   
                      src={`${sahil_ph}`}
                      alt="Cultural travel destinations and local experiences"
                    />
                    <div className="image-gradient"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}

          <Services />


          {/* CTA Section */}
          <div className="cta-section" id="contact">
            <div className="cta-content">
              <h2>Let’s Build the Future Together</h2>
              <p>
                I’m driven to craft engaging and meaningful web experiences that inspire and connect people. Join me as I continue to explore, create, and innovate in the tech world.
              </p>
              <div className="cta-buttons">
                <a href="mailto:sahilgupta70500@gmail.com" className="cta-primary">

                  Get Started
                  <svg className="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a href="https://linkedin.com/in/sahilgupta123" className="cta-secondary" target="_blank"
                  rel="noopener noreferrer">
                  Learn more
                  <span aria-hidden="true">→</span>
                </a>
                
                <a href="https://github.com/sahilgupta721" className="cta-secondary" target="_blank"
                  rel="noopener noreferrer">
                  View my Work
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="gradient-circle circle-top-right"></div>
            <div className="gradient-circle circle-bottom-left"></div>
          </div>

        </main>
      </div>
    </>
  );
}

export default About;
