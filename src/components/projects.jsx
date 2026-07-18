import "../styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <h3>Developer Portfolio Website</h3>

          <p>
            Designed and developed a responsive developer portfolio using
            React.js and CSS to showcase my skills, education, projects,
            and contact information. The website features a modern,
            responsive interface with smooth navigation and an attractive
            user experience.
          </p>

          <div className="project-links">
            <a
              href="https://github.com/lakshmisrikatteboina-dev/FUTURE_FS_01"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://future-fs-01-indol-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>LeadFlow CRM – Client Lead Management System</h3>

          <p>
            Developed a full-stack Client Lead Management System using
            React.js, Node.js, Express.js, and MongoDB. The application
            enables users to add, search, update, and delete client leads,
            manage lead statuses, and perform CRUD operations through REST
            APIs with a responsive and user-friendly interface.
          </p>

          <div className="project-links">
            <a
              href="https://github.com/lakshmisrikatteboina-dev/FUTURE_FS_02"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>Bean &amp; Bloom Café &amp; Bistro Website</h3>

          <p>
            Developed a modern and responsive café website using React.js,
            JavaScript, and CSS. The website features a stylish landing page,
            menu, gallery, customer reviews, contact section, and table
            reservation interface, providing an engaging and user-friendly
            experience across desktop and mobile devices.
          </p>

          <div className="project-links">
            <a
              href="https://github.com/lakshmisrikatteboina-dev/FUTURE_FS_03"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://future-fs-03-wk7l.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;