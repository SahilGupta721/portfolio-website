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
          <div className="service-card">
            <dt className="service-heading">
              <div className="icon-circle terracotta">
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
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 
                    9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 
                    4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-
                    4.5-9S9.515 3 12 3"
                  />
                </svg>
              </div>
              Technical Skills
            </dt>
            <dd className="service-text">
              <ul>
                <li>Web Development</li>
                <li>AI-Driven Automation & Chatbot Development</li>
                <li>Building AI-powered Web Apps (OpenAI, Gemini, Hugging Face APIs)</li>
                <li>Data Analysis</li>
                <li>Data Structures & Algorithms</li>
              </ul>
              
            </dd>
          </div>

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
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 
                    1.268-.63 2.39-1.593 3.068a3.745 
                    3.745 0 01-1.043 3.296"
                  />
                </svg>
              </div>
              Programming languages
            </dt>
            <dd className="service-text">
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>TypeScript</li>
                <li>SQL</li>
                <li>C#</li>
                <li>JavaScript</li>
              </ul>
              
            </dd>
          </div>

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
                    d="M12 6.042A8.967 8.967 0 006 
                    3.75c-1.052 0-2.062.18-3 
                    .512v14.25"
                  />
                </svg>
              </div>
              Web & Database
            </dt>
            <dd className="service-text">
               <ul>
                <li>React.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>My SQL</li>
                <li>Restful Services</li>
                <li>BootStrap</li>
                <li>Node.js</li>
              </ul>
              
            </dd>
          </div>

          <div className="service-card">
            <dt className="service-heading">
              <div className="icon-circle olive">
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
                    d="M18 18.72a9.094 9.094 0 
                    003.741-.479 3 3 0 
                    00-4.682-2.72"
                  />
                </svg>
              </div>
              Tools
            </dt>
            <dd className="service-text">
               <ul>
                <li>Git</li>
                <li>AWS</li>
                <li>Jira</li>
                <li>Power BI</li>
                <li>Visual Studio code</li>
                <li>MS Office Suit</li>
              </ul>
             
            </dd>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
