import "../css/services.css";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="text-center">
          <p className="services-badge">My Services</p>
          <h2 className="services-title">Innovating Through Code</h2>
          <p className="services-description">
            I create impactful web and software projects that combine creativity, functionality, and modern design to solve real-world problems.
          </p>
        </div>

        <div className="services-grid">
          {/* Programming Languages */}
          <div className="service-card">
            <dt className="service-heading">
              <div className="icon-circle ocean">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                  />
                </svg>
              </div>
              Programming Languages
            </dt>
            <dd className="service-text">
              <ul>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
                <li>C#</li>
                <li>TypeScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </dd>
          </div>

          {/* Web Development & Frameworks */}
          <div className="service-card">
            <dt className="service-heading">
              <div className="icon-circle gold">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
              Web Development & Frameworks
            </dt>
            <dd className="service-text">
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>FastAPI</li>
                <li>Tailwind CSS</li>
              </ul>
            </dd>
          </div>
          {/* AI & Machine Learning */}
          <div className="service-card">
            <dt className="service-heading">
              <div className="icon-circle ocean">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2M9 19v2m6-2v2M7 7h10v10H7z"
                  />
                </svg>


              </div>
              AI & Machine Learning
            </dt>
            <dd className="service-text">
              <ul>
                <li>Scikit-Learn</li>
                <li>TensorFlow / PyTorch</li>
                <li>OpenAI API</li>
                <li>Large Language Models (Cohere, Gemini, ChatGPT)</li>
                <li>Hugging Face Transformers</li>
              </ul>
            </dd>
          </div>



          {/* Cloud & Databases */}
          <div className="service-card">
            <dt className="service-heading">
              <div className="icon-circle olive">
                <svg className="icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 014-4 5 5 0 019.5 1.5A3.5 3.5 0 0119 19H7a4 4 0 01-4-4z" />
                </svg>
              </div>
              Cloud & Databases
            </dt>
            <dd className="service-text">
              <ul>
                <li>Google Cloud</li>
                <li>Azure</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Oracle</li>
              </ul>
            </dd>
          </div>

          {/* Data & Analytics */}
          <div className="service-card">
            <dt className="service-heading">
              <div className="icon-circle terracotta">
                <svg className="icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 15v3M12 12v6M17 9v9" />
                </svg>
              </div>
              Data & Analytics
            </dt>
            <dd className="service-text">
              <ul>
                <li>Pandas</li>
                <li>NumPy</li>
                <li>Matplotlib</li>
                <li>SQL (Analytics & Queries)</li>
                <li>Power BI</li>
                <li>Microsoft Excel</li>

              </ul>
            </dd>
          </div>
          {/* Tools & IDEs (keep original) */}
          <div className="service-card">
            <dt className="service-heading">
              <div className="icon-circle gold">
                <svg className="icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4.5 4.5 0 11-6.4 6.4L3 18l3 3 5.3-5.3a4.5 4.5 0 006.4-6.4z" />
                </svg>


              </div>
              Tools & IDEs
            </dt>
            <dd className="service-text">
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>Postman</li>
                <li>Jira/Trello</li>
                <li>MS Office 365</li>
                <li>Visual Studio Code</li>

              </ul>
            </dd>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
