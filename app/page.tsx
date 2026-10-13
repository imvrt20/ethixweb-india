import Link from 'next/link';
const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and digital experiences designed to turn visitors into customers.",
    tags: ["Next.js", "React", "Full Stack"],
  },
  {
    number: "02",
    title: "AI & Automation",
    description:
      "Practical AI solutions that simplify operations, improve workflows, and unlock new possibilities.",
    tags: ["Generative AI", "Automation", "AI Products"],
  },
  {
    number: "03",
    title: "Digital Growth",
    description:
      "Scalable digital foundations that help ambitious businesses grow with confidence.",
    tags: ["Strategy", "Performance", "Scale"],
  },
];

const projects = [
  {
    category: "AI PRODUCT",
    title: "Intelligent experiences.",
    description:
      "AI-powered products that transform complex workflows into simple, useful experiences.",
    number: "01",
  },
  {
    category: "DIGITAL EXPERIENCE",
    title: "Built for what’s next.",
    description:
      "Modern, responsive digital platforms engineered for performance and growth.",
    number: "02",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <Link href="/" className="brand">
          <span className="brand-mark">e.</span>
          <span>
            <strong>ethixweb</strong>
            <small>INDIA · DIGITAL STUDIO</small>
          </span>
        </Link>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#about">About us</a>
        </div>

        <Link href="/contact" className="nav-cta">
          Start a project <span>↗</span>
        </Link>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            DIGITAL PARTNER FOR AMBITIOUS BUSINESSES
          </div>

          <h1>
            Make your next
            <br />
            move <span>matter.</span>
          </h1>

          <p className="hero-description">
            We build thoughtful digital experiences, intelligent products,
            and growth systems for businesses ready to move forward.
          </p>

          <div className="hero-actions">
            <a href="/contact" className="button-primary">
              Let&apos;s build together <span>↗</span>
            </a>
            <a href="#work" className="button-secondary">
              Explore our work <span>↓</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            Strategy. Design. Technology. Built around your business.
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-top">
            <span>IDEAS INTO IMPACT</span>
            <span>EST. FOR WHAT&apos;S NEXT</span>
          </div>

          <div className="visual-art">
            <div className="art-circle art-circle-one" />
            <div className="art-circle art-circle-two" />
            <div className="art-core">e.</div>
            <div className="art-cross">+</div>
            <div className="art-coordinate">28° 36&apos; N / 77° 12&apos; E</div>
          </div>

          <div className="visual-bottom">
            <span>DESIGNED WITH INTENT.</span>
            <span>ENGINEERED TO SCALE.</span>
          </div>
        </div>

        <div className="hero-index">
          <span>SCROLL TO EXPLORE</span>
          <span>01 — 04</span>
        </div>
      </section>

      <section className="trust-strip">
        <span>GOOD IDEAS DESERVE GREAT EXECUTION.</span>
        <div>
          <span>DESIGN</span>
          <i />
          <span>TECHNOLOGY</span>
          <i />
          <span>GROWTH</span>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <div>
            <span className="section-label">WHAT WE DO / 01</span>
            <h2>
              Digital thinking.
              <br />
              <span>Real-world impact.</span>
            </h2>
          </div>

          <p>
            The right mix of creativity, engineering, and business thinking
            to take your next idea from possibility to reality.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="card-top">
                <span>{service.number}</span>
                <span className="card-arrow">↗</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="tag-list">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section section" id="work">
        <div className="section-heading">
          <div>
            <span className="section-label">SELECTED CAPABILITIES / 02</span>
            <h2>
              Built to solve.
              <br />
              <span>Designed to stand out.</span>
            </h2>
          </div>

          <p>
            We focus on useful technology, considered design, and digital
            experiences that create meaningful business value.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-art">
                <span className="project-number">{project.number}</span>
                <div className="project-shape">
                  <span>{project.number === "01" ? "AI" : "↗"}</span>
                </div>
                <span className="project-caption">{project.category}</span>
              </div>

              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section" id="about">
        <span className="section-label">OUR PERSPECTIVE / 03</span>

        <div className="about-content">
          <h2>
            Global ambition.
            <br />
            <span>An India-first mindset.</span>
          </h2>

          <div>
            <p>
              Great digital experiences should not be limited by geography.
              We believe in building thoughtful, accessible, and scalable
              technology for businesses and people in India and beyond.
            </p>

            <a href="/about" className="text-link">
              Discover our approach <span>↗</span>
            </a>
          </div>
        </div>

        <div className="about-stats">
          <div>
            <strong>01</strong>
            <span>Think strategically</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Build intentionally</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Improve continuously</span>
          </div>
        </div>
      </section>

      <section className="contact-banner">
        <div>
          <span className="section-label">HAVE A CHALLENGE IN MIND?</span>
          <h2>
            Let&apos;s make
            <br />
            something <span>matter.</span>
          </h2>
        </div>

        <a href="/contact" className="contact-button">
          Tell us about your project <span>↗</span>
        </a>
      </section>

      <footer className="footer">
        <Link href="/" className="brand footer-brand">
          <span className="brand-mark">e.</span>
          <span>
            <strong>ethixweb</strong>
            <small>INDIA · DIGITAL STUDIO</small>
          </span>
        </Link>

        <p>Thoughtfully built. Purposefully digital.</p>

        <span>© 2026 Ethixweb India</span>
      </footer>
    </main>
  );
}