import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            PJ<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">BACKEND / API DEVELOPER</p>

          <h1>
            PJ Abante
          </h1>

          <h2>
            Building reliable backend systems,
            APIs, and integrations.
          </h2>

          <p className="hero-description">
            Software engineer with nearly 8 years of experience
            building backend services, APIs, transaction systems,
            enterprise integrations, and automation solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View Projects
            </a>

            <a href="#contact" className="button secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Career Snapshot */}
      <section className="snapshot">
        <div className="container snapshot-grid">
          <div>
            <strong>~8</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>Backend</strong>
            <span>Primary Focus</span>
          </div>

          <div>
            <strong>Banking</strong>
            <span>Current Industry</span>
          </div>

          <div>
            <strong>API</strong>
            <span>Integration Focus</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <p className="eyebrow">ABOUT</p>

          <h2 className="section-title">
            I build the systems behind the interface.
          </h2>

          <div className="two-column">
            <p>
              {/* My work focuses primarily on backend development,
              APIs, database integration, transaction processing,
              automation, and enterprise system integration. */}

              Over the past 8 years, I’ve progressed from developing ASP.NET MVC 
              applications with geospatial data, 
              to building self-sustaining IoT systems using Python,
               Raspberry Pi, and cloud services, and eventually into banking and fintech.
            </p>

            <p>
              {/* My experience spans banking and fintech systems,
              IoT research and development, distributed device communication,
              geospatial applications, and production support. */}
              Today, I focus on backend APIs, partner integrations, 
              automation, transaction processing, 
              and API security—including implementing HMAC-based request 
              validation to protect public APIs against request tampering 
              and unauthorized traffic.
            </p>

            
            {/* <p>
             Recently, I have been focused on API security enhancements, implementing HMAC-based request signing and validation for public-facing APIs. The mechanism verifies that incoming requests have not been modified in transit, helping mitigate payload tampering, unauthorized requests, and malicious traffic targeting backend services.
            </p> */}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section dark-section">
        <div className="container">
          <p className="eyebrow">EXPERIENCE</p>

          <h2 className="section-title">
            Professional experience
          </h2>

          <div className="experience-list">

            <article className="experience-item">
              <div className="experience-date">
                2025 — Present
              </div>

              <div>
                <h3>API Developer / Programmer Analyst</h3>
                <h4>RCBC</h4>

                <p>
                  Backend and API development focused on banking,
                  transaction processing, system integrations,
                  automation, and production support.
                </p>

                <ul>
                  <li>
                    Develop and maintain enterprise banking APIs
                  </li>
                  <li>
                    Build transaction-processing workflows
                  </li>
                  <li>
                    Integrate external financial platforms
                  </li>
                  <li>
                    Work with Oracle databases and SQL
                  </li>
                  <li>
                    Troubleshoot production and integration issues
                  </li>
                </ul>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">
                Previous
              </div>

              <div>
                <h3>Software Engineer</h3>
                <h4>Vertere Global Solutions</h4>

                <p>
                  Worked on enterprise application development,
                  backend services, APIs, integrations, and
                  production systems.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">
                Previous
              </div>

              <div>
                <h3>IoT Software Engineer</h3>
                <h4>R&D Project</h4>

                <p>
                  Worked with Raspberry Pi devices, Python,
                  MySQL, TCP/IP communication, and distributed
                  IoT deployments.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <p className="eyebrow">SELECTED WORK</p>

          <h2 className="section-title">
            Projects & engineering work
          </h2>

          <div className="projects-grid">

            <article className="project-card">
              <span className="project-number">04</span>

              <h3>Autonomous IoT Monitoring System</h3>

              <p className="project-type">
                Raspberry Pi / IoT
              </p>

              <p>
            Designed and developed a self-sustaining IoT system built around Raspberry Pi devices. 
            The system collected location and sensor data, communicated over TCP/IP, 
            connected to the internet through a SIM7600 cellular module, and transmitted
             data to cloud services.

Each device maintained local data storage through MySQL and an 
Apache server running directly on the Raspberry Pi, allowing it to 
continue operating independently while synchronizing data to the cloud. 
I also implemented device monitoring and self-diagnostic logic that could detect
 abnormal conditions and identify potential hardware, connectivity,
  or system issues—essentially giving the device a basic level of autonomous decision-making.
              </p>

              <div className="tags">
                <span>Python</span>
                <span>Raspberry Pi</span>
                <span>MySQL</span>
                <span>TCP/IP</span>
              </div>
            </article>

            <article className="project-card">
              <span className="project-number">01</span>

              <h3>Loan Application & Onboarding Platform</h3>

              <p className="project-type">
                Transaction Processing System
              </p>

              <p>
               Developed backend APIs supporting the loan lifecycle, 
               from application and availment through payment processing and related
                automated workflows. Built and maintained the supporting database processes, 
                integrations, and scheduled jobs required to move transactions 
                through the system reliably.
              </p>

              <div className="tags">
                <span>C#</span>
                <span>.NET</span>
                <span>Oauth</span>
                <span>SQL Server</span>
              </div>
            </article>

            <article className="project-card">
              <span className="project-number">02</span>

              <h3>International Fintech Integration</h3>

              <p className="project-type">
                Fintech API Integration
              </p>

              <p>
               Developed backend APIs and integration services 
               connecting banking systems with an international 
               fintech partner. Worked on transaction processing, 
               request/response handling, security requirements, 
               and integration workflows between internal banking services and external systems.
              </p>

              <div className="tags">
                <span>C#</span>
                <span>HMAC</span>
                <span>SQL Server</span>
              </div>
            </article>

            <article className="project-card">
              <span className="project-number">03</span>

              <h3>Banking Automation</h3>

              <p className="project-type">
                Backend Automation
              </p>

              <p>
                Developed automated backend workflows for
                recurring banking operations and transaction
                processing.
              </p>

              <div className="tags">
                <span>C#</span>
                <span>.NET</span>
                <span>Oracle</span>
              </div>
            </article>

            

          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section dark-section">
        <div className="container">
          <p className="eyebrow">TECHNICAL SKILLS</p>

          <h2 className="section-title">
            Technologies I work with
          </h2>

          <div className="skills">
            <span>C#</span>
            <span>.NET</span>
            <span>.NET Framework</span>
            <span>REST APIs</span>
            <span>Oracle</span>
            <span>SQL</span>
            <span>Stored Procedures</span>
            <span>IIS</span>
            <span>JSON</span>
            <span>API Integration</span>
            <span>Transaction Processing</span>
            <span>Python</span>
            <span>MySQL</span>
            <span>TCP/IP</span>
            <span>Raspberry Pi</span>
            <span>AWS</span>
            <span>Postman</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <p className="eyebrow">CONTACT</p>

          <h2 className="section-title">
            Let's build something reliable.
          </h2>

          <p className="contact-description">
            I'm interested in backend engineering, API
            development, platform engineering, fintech systems,
            and international software engineering opportunities.
          </p>

          <div className="hero-buttons">
            <a
              href="https://github.com/pjayoppa"
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pj-abante-6b90571a2"
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              LinkedIn
            </a>

            <a
              href="mailto:abante.peejay@gmail.com"
              className="button primary"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>
            © {new Date().getFullYear()} PJ Abante
          </p>

          <p>
            Backend / API Developer
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;