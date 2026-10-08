import { useState, useEffect } from 'react'
import './App.css'

const skills = [
  'Java',
  'Python',
  'C',
  'Data Structures & Algorithms',
  'HTML5',
  'CSS3',
  'JavaScript',
  'SQL & Databases',
  'Git & GitHub',
  'OOP Principles',
  'Problem Solving',
  'Team Collaboration',
]

const projects = [
  {
    id: 'event-mgmt',
    name: 'Event Management System',
    category: 'Full Stack & Database Application',
    tag: 'Web Application',
    description:
      'A web-based platform for organizing events, managing attendee registrations, and scheduling sessions with structured data persistence.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'SQL & DB', 'REST APIs'],
    githubUrl: 'https://github.com/KavyaUlleru/Event_Management_System',
    details: {
      overview:
        'Developed an end-to-end event management application designed to simplify how academic and professional events are scheduled, published, and attended. It handles user registrations, schedule coordination, and attendee record tracking through an intuitive dashboard.',
      keyFeatures: [
        'User registration and attendee sign-up flow with validation',
        'Interactive calendar and schedule viewer for multi-track sessions',
        'Admin dashboard to manage event listings and view registered participants',
        'Clean responsive layout that works seamlessly across laptops and mobile screens',
      ],
      technologies: ['JavaScript (ES6+)', 'SQL / Relational Data Model', 'HTML5 & CSS3', 'Local Storage & API Integration'],
      whatLearned:
        'Gained hands-on experience in modeling relational data for events and users, implementing client-side validation, designing intuitive user workflows, and handling asynchronous requests.',
    },
  },
  {
    id: 'music-app',
    name: 'Music Playlist Application',
    category: 'Interactive Audio & Media Manager',
    tag: 'Interactive Web App',
    description:
      'An interactive music application that lets users create personalized playlists, search and filter tracks, and control audio playback smoothly.',
    stack: ['JavaScript', 'HTML5 Audio', 'CSS3 Flex/Grid', 'Responsive UI'],
    githubUrl: 'https://github.com/KavyaUlleru/MusicPlayList_App',
    details: {
      overview:
        'Built an engaging web-based audio player and playlist curator that enables users to manage their track library, construct customized playlists, and enjoy smooth playback controls with real-time UI feedback.',
      keyFeatures: [
        'Full playback controls: Play, Pause, Next, Previous, Progress seeking, and Volume slider',
        'Dynamic search and filtering by song title, artist, and genre',
        'Interactive queue management with instant addition and removal of tracks',
        'State-driven audio controls with responsive glassmorphism player bar',
      ],
      technologies: ['Vanilla JavaScript', 'HTML5 Web Audio API', 'CSS Grid & Flexbox', 'Persistent Browser Storage'],
      whatLearned:
        'Mastered DOM manipulation, event-driven programming, working with the HTML5 Audio interface, and building responsive user interfaces without heavy third-party libraries.',
    },
  },
  // Future projects will be added here!
]

const experience = [
  {
    title: 'Front-End Web Development Intern',
    place: 'AICTE • Edunet Foundation',
    period: '08/2025 – 09/2025',
    type: 'Internship',
    text: 'Developed responsive web pages and reusable UI components. Practiced modern frontend standards, responsive design principles, and collaborative version control using HTML, CSS, and JavaScript.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Git'],
  },
  {
    title: 'AI Intern',
    place: 'Edunet Foundation',
    period: '04/2025 – 05/2025',
    type: 'Internship',
    text: 'Gained practical exposure to core Machine Learning algorithms, data preprocessing, model evaluation fundamentals, and ethical considerations in artificial intelligence.',
    skills: ['Python', 'Machine Learning Basics', 'Data Preprocessing', 'AI Ethics'],
  },
]

const stats = [
  { label: 'B.Tech CGPA', value: '9.1 / 10' },
  { label: 'Academic Standing', value: 'Final Year CSE' },
  { label: 'Internships', value: '2 Completed' },
]

const certifications = [
  { name: 'Python Programming', issuer: 'Udemy' },
  { name: 'Operating System Basics', issuer: 'Cisco' },
  { name: 'Java Fundamentals', issuer: 'Infosys Springboard' },
  { name: 'Frontend Web Development', issuer: 'Coursera' },
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="portfolio">
      <div className="orb orb--one" aria-hidden="true" />
      <div className="orb orb--two" aria-hidden="true" />

      {/* Floating / Sticky Navigation Bar */}
      <header className={`topbar ${isScrolled ? 'topbar--scrolled' : ''}`}>
        <div className="topbar__inner">
          <a href="#home" className="brand" aria-label="Kavya Ulleru Home">
            <span className="brand__badge">KU</span>
            <span className="brand__name">Kavya Ulleru</span>
          </a>

          <button
            className={`nav-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav ${mobileMenuOpen ? 'nav--open' : ''}`} aria-label="Main navigation">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#certifications" onClick={closeMenu}>Certifications</a>
            <a href="#contact" className="nav__cta" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        {/* Compact, Well-Fitted Hero Section */}
        <section className="hero">
          <div className="hero__content">
            <div className="status-chip">
              <span className="status-dot" />
              <span>Final Year Student • Open to Software Roles</span>
            </div>

            <h1 className="hero__title">
              Final Year CSE Student &amp; <span className="text-gradient">Aspiring Developer</span>
            </h1>

            <p className="hero__lead">
              Hi, I’m <strong>Kavya Ulleru</strong>, an enthusiastic final year Computer Science Engineering student
              (9.1 CGPA) with a strong grounding in Java, Python, and Web Development. As a passionate learner and
              quick problem solver, I am excited to write clean code, work on impactful projects, and contribute to an engineering team.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                View Projects
              </a>
              <a className="button button--secondary" href="#contact">
                Get In Touch
              </a>
              <a
                className="button button--ghost"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Resume
              </a>
            </div>

            <ul className="hero__stats" aria-label="Key highlights">
              {stats.map((item) => (
                <li key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Circular Profile Avatar (No image, ready to add photo later, no skills pills) */}
          <div className="hero__profile" aria-label="Profile card">
            <div className="profile-card profile-card--circular">
              <div className="profile-circle-wrapper">
                <div className="profile-circle">
                  {/* Later, when you want to add your profile photo, simply uncomment this img tag: */}
                  {/* <img src="/profile.png" alt="Kavya Ulleru" className="profile-circle__image" /> */}

                  <div className="profile-circle__avatar">
                    <span className="profile-circle__initials">KU</span>
                  </div>
                </div>

                <div className="profile-badge-overlay">
                  <span className="pulse-dot" />
                  <span>Available for Hire</span>
                </div>
              </div>

              <div className="profile-details">
                <h2 className="profile-name">Kavya Ulleru</h2>
                <p className="profile-role">Final Year • B.Tech Computer Science</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">Introduction</p>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Academic Background &amp; Mindset</h3>
              <p>
                I am a final year Computer Science Engineering student at Vasireddy Venkatadri Institute
                of Technology with a 9.1 CGPA. My academic journey has given me solid fundamentals in
                object-oriented programming, data structures, algorithm design, and modern database concepts.
              </p>
            </div>
            <div className="about-card">
              <h3>Learning Journey &amp; Goals</h3>
              <p>
                As a final year student preparing for industry roles, I approach software engineering with high
                curiosity and a commitment to continuous growth. Having completed internships in Frontend Web Development
                and Artificial Intelligence, I am ready to adapt quickly, learn modern frameworks, and contribute proactively to development teams.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Core Competencies</p>
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                <span className="skill-dot" />
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Practical Learning</p>
            <h2>Work Experience</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={item.title} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-head">
                    <div>
                      <h3>{item.title}</h3>
                      <p className="timeline-place">{item.place}</p>
                    </div>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <p className="timeline-body">{item.text}</p>
                  <div className="timeline-tags">
                    {item.skills.map((s) => (
                      <span key={s} className="tag-pill">{s}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-heading">
            <div className="section-heading__wrapper">
              <div>
                <p className="eyebrow">Practical Work</p>
                <h2>Featured Projects</h2>
              </div>
              <span className="project-count-badge">{projects.length} Projects</span>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.id} className="project-card">
                <div className="project-card__top">
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-index">0{index + 1}</span>
                </div>

                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <button
                    type="button"
                    className="button-sm button--outline"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Learn more about ${project.name}`}
                  >
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-sm button--github"
                    aria-label={`View source code for ${project.name} on GitHub`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section">
          <div className="section-heading">
            <p className="eyebrow">Verification</p>
            <h2>Certifications</h2>
          </div>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert.name} className="cert-card">
                <div className="cert-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>
                <div>
                  <h3 className="cert-title">{cert.name}</h3>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact">
          <p className="eyebrow">Let’s Connect</p>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I am currently open to internships, entry-level software engineer roles, and technical opportunities.
          </p>

          <div className="contact-block">
            <a href="mailto:kavyaulleru@gmail.com" className="contact-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>kavyaulleru@gmail.com</span>
            </a>

            <a href="tel:+919618969316" className="contact-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 9618969316</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ulleru-kavya-047065325/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/KavyaUlleru"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Kavya Ulleru. Built with React &amp; clean design.</p>
      </footer>

      {/* Project Details Modal (Triggered by 'Learn More') */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)} role="dialog" aria-modal="true">
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-tag">{selectedProject.tag}</span>
                <h3 className="modal-title">{selectedProject.name}</h3>
                <p className="modal-category">{selectedProject.category}</p>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <section className="modal-section">
                <h4>Project Overview</h4>
                <p>{selectedProject.details.overview}</p>
              </section>

              <section className="modal-section">
                <h4>Key Features &amp; Implementation</h4>
                <ul className="modal-features">
                  {selectedProject.details.keyFeatures.map((feat, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="modal-section">
                <h4>Technologies &amp; Tools Used</h4>
                <div className="modal-stack">
                  {selectedProject.details.technologies.map((tech) => (
                    <span key={tech} className="modal-pill">{tech}</span>
                  ))}
                </div>
              </section>

              <section className="modal-section">
                <h4>What I Learned as a Fresher</h4>
                <p className="modal-learned">{selectedProject.details.whatLearned}</p>
              </section>
            </div>

            <div className="modal-footer">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary button-modal-git"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View Source Code on GitHub
              </a>
              <button
                type="button"
                className="button button--secondary"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
