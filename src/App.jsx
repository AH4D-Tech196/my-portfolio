import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Code2,
  Cpu,
  Braces,
  Database,
  ExternalLink,
  Terminal,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  Hexagon,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "NanoMend",
    type: "PYTHON · AI / DEVELOPER TOOLS",
    description:
      "An offline AI-powered coding assistant designed to analyze code locally, combining a local language model with static code analysis.",
    tags: ["Python", "LLMs", "AST Analysis"],
  },
  {
    number: "02",
    title: "Weather App",
    type: "WEB DEVELOPMENT",
    description:
      "A React application that looks up a city and displays current weather details, including temperature and humidity, using a public weather API.",
    tags: ["React", "JavaScript", "REST API"],
  },
  {
    number: "03",
    title: "Real-Time Audio-to-Text Converter",
    type: "PYTHON · AUDIO PROCESSING",
    description:
      "A Python application that converts real-time speech to text and visualizes audio signals using Speech Recognition and Fast Fourier Transform (FFT).",
    tags: ["Python", "Speech Recognition", "FFT"],
  },
  {
    number: "04",
    title: "Payroll Management System",
    type: "OBJECT-ORIENTED PROGRAMMING",
    description:
      "A Java-based system for managing employee information and payroll operations using object-oriented programming concepts.",
    tags: ["Java", "OOP", "Application Logic"],
  },
  {
    number: "05",
    title: "Smart Traffic Controller",
    type: "SYSTEMS · ASSEMBLY LANGUAGE",
    description:
      "A three-way traffic control simulation with congestion detection logic and adaptive timer allocation to improve traffic flow.",
    tags: ["Assembly Language", "Logic Design", "Simulation"],
  },
];

const skills = [
  {
    icon: Code2,
    title: "Web Stack",
    items: ["React", "Node.js", "Bootstrap", "jQuery", "HTML / CSS"],
  },
  {
    icon: Braces,
    title: "Programming",
    items: ["Python", "Java", "C / C++", "PHP"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MS SQL Server"],
  },
  {
    icon: Cpu,
    title: "AI & Systems",
    items: ["LLMs", "AI Integration"],
  },
];

const journey = [
  {
    icon: GraduationCap,
    date: "2022 — 2026",
    title: "B.S. Computer Engineering",
    place: "University of Lahore",
    detail:
      "Completed a Computer Engineering degree with coursework spanning software development, databases, machine learning, and computer systems.",
  },
  {
    icon: Terminal,
    date: "RECENT PROJECT",
    title: "NanoMend - Final Year Project",
    place: "AI-powered coding assistant",
    detail:
      "Helped develop a local-first coding assistant exploring LLM-based code support and static analysis without relying on cloud inference.",
  },
  {
    icon: Sparkles,
    date: "CURRENT FOCUS",
    title: "Building practical softwares",
    place: "Independent learning",
    detail:
      "Strengthening software development skills and building projects that connect software fundamentals with practical user needs.",
  },
];

function SectionHeading({ eyebrow, title, right }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {right}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = ["about", "journey", "skills", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navItems = [
    ["about", "About"],
    ["journey", "Journey"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["contact", "Contact"],
  ];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" onClick={closeMenu}>
            <span>
              <Hexagon size={28} strokeWidth={2} />
            </span>
            <span>
              AHAD<span className="brand-muted">-TECH</span>
            </span>
          </a>
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {navItems.map(([id, label]) => (
              <a
                key={id}
                className={active === id ? "active" : ""}
                href={`#${id}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            className="top-cta"
            href="https://github.com/AH4D-Tech196?tab=repositories "
            target="_blank"
            rel="noopener noreferrer"
          >
            REPOSITORY <FaGithub size={14} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="about">
          <div className="hero-copy">
            <h1>
              Building ideas
              <br />
              into <span className="gradient-text">real software.</span>
            </h1>
            <p className="hero-description">
              I'm <strong>Abdul Ahad Minhas</strong>, a Computer Engineering
              graduate interested in web development, AI-powered tools, and
              building useful digital experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDownRight size={16} />
              </a>
              <a className="button button-ghost" href="#contact">
                <Mail size={16} /> Get in touch
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={14} /> Lahore, Pakistan
              </span>
              <span className="meta-divider" />
              <span>
                <span className="tiny-square" /> Available for Roles
              </span>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Decorative developer code illustration"
          >
            <div className="visual-grid" />
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="code-card">
              <div className="code-card-top">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>about_me.jsx</span>
                <span className="code-status">● LIVE</span>
              </div>
              <div className="code-body">
                <div>
                  <span className="ln">01</span>
                  <span className="syntax-purple">const</span>{" "}
                  <span className="syntax-blue">developer</span> = {"{"}
                </div>
                <div>
                  <span className="ln">02</span>&nbsp;&nbsp;name:{" "}
                  <span className="syntax-green">"Abdul Ahad"</span>,
                </div>
                <div>
                  <span className="ln">03</span>&nbsp;&nbsp;degree:{" "}
                  <span className="syntax-green">"Computer Engineering"</span>,
                </div>
                <div>
                  <span className="ln">04</span>&nbsp;&nbsp;interests: [
                </div>
                <div>
                  <span className="ln">05</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="syntax-green">"Web Development"</span>,
                </div>
                <div>
                  <span className="ln">06</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="syntax-green">
                    "Artificial Intelligence"
                  </span>
                </div>
                <div>
                  <span className="ln">07</span>&nbsp;&nbsp;],
                </div>
                <div>
                  <span className="ln">08</span>&nbsp;&nbsp;learning:{" "}
                  <span className="syntax-orange">true</span>
                </div>
                <div>
                  <span className="ln">09</span>
                  {"}"};
                </div>
                <div className="code-cursor">
                  <span className="ln">10</span>
                  <span className="cursor-block" />
                </div>
              </div>
              <div className="code-card-bottom">
                <span>
                  <CheckCircle2 size={13} /> Ready to build
                </span>
                <span>UTF-8&nbsp; · &nbsp;JavaScript</span>
              </div>
            </div>
            <div className="float-chip chip-top">
              <span className="chip-icon">
                <Code2 size={15} />
              </span>
              <span>
                <b>Clean code</b>
                <small>One step at a time</small>
              </span>
            </div>
            <div className="float-chip chip-bottom">
              <span className="chip-icon purple">
                <Sparkles size={15} />
              </span>
              <span>
                <b>AI + Software</b>
                <small>Curiosity in practice</small>
              </span>
            </div>
            <div className="visual-index">01 / INTRODUCTION</div>
          </div>
          <a className="scroll-cue" href="#journey">
            <span className="scroll-line" />
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={14} />
          </a>
        </section>

        <section className="section-wrap section-block" id="journey">
          <SectionHeading
            title="My journey"
            right={<span className="section-count">01 — 03</span>}
          />
          <div className="journey-list">
            {journey.map(({ icon: Icon, ...item }) => (
              <article className="journey-item" key={item.title}>
                <div className="journey-marker">
                  <span>
                    <Icon size={15} aria-hidden="true" />
                  </span>
                  <i />
                </div>
                <div className="journey-date">{item.date}</div>
                <div className="journey-content">
                  <h3>{item.title}</h3>
                  <p className="journey-place">{item.place}</p>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading
            title="Technical toolkit"
            right={<span className="section-count">04 CATEGORIES</span>}
          />
          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, items }, i) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-head">
                  <span className="skill-icon">
                    <Icon size={19} />
                  </span>
                  <span className="skill-number">0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionHeading
            title="Projects in practice"
            right={<span className="section-count">05 PROJECTS</span>}
          />
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-main">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="projects-note">
            <Terminal size={16} />
            <span>
              More projects and code samples can be added as my portfolio grows.
            </span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-orb">
              <div className="orb-ring ring-one" />
              <div className="orb-ring ring-two" />
              <div className="orb-core">
                <Mail size={24} />
              </div>
            </div>
            <span className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</span>
            <h2>
              Let's build something
              <br />
              <span className="gradient-text">worth sharing.</span>
            </h2>
            <p>
              I'm looking for opportunities to learn, contribute, and grow as a
              software developer. I'd be glad to hear from you.
            </p>
            <a
              className="button button-primary contact-button"
              href="mailto:abdul.ahad1962002@gmail.com"
            >
              <Mail size={15} />
              abdul.ahad1962002@gmail.com
            </a>
            <div className="contact-details">
              <span>
                <Phone size={15} /> +92 322 2138413
              </span>
              <span>
                <MapPin size={15} /> Lahore, Pakistan
              </span>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/AH4D-Tech196"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/abdulahadminhas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap">
        <span>DESIGNED & BUILT WITH FOCUS · 2026</span>
        <a href="#about" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}
