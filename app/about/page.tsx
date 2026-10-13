import Link from 'next/link';
const values = [
  {
    number: "01",
    title: "Purpose before technology",
    description:
      "We start by understanding the problem, the people experiencing it, and the outcome the business wants to achieve.",
  },
  {
    number: "02",
    title: "Quality in every detail",
    description:
      "From the first interaction to the underlying code, we value clarity, usability, performance, and maintainability.",
  },
  {
    number: "03",
    title: "Built to grow",
    description:
      "We make thoughtful technical decisions that help digital products evolve as business needs change.",
  },
];

const principles = [
  "Understand the people behind the problem.",
  "Make complex ideas easier to use.",
  "Choose technology for the right reasons.",
  "Keep improving through feedback.",
];

export default function AboutPage() {
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
          <a href="/services">Services</a>
          <a href="/about">Our story</a>
          <a href="/contact">Contact</a>
        </div>

        <a href="/contact" className="nav-cta">
          Start a project <span>↗</span>
        </a>
      </nav>

      <section className="about-hero">
        <span className="section-label">ABOUT ETHIXWEB / OUR PERSPECTIVE</span>

        <h1>
          Good technology
          <br />
          starts with <span>people.</span>
        </h1>

        <div className="about-hero-bottom">
          <p>
            We believe digital solutions should do more than look good.
            They should solve meaningful problems, make everyday experiences
            better, and help ambitious businesses move forward.
          </p>

          <div className="about-location">
            <span className="location-dot" />
            INDIA · WORKING TOWARDS WHAT&apos;S NEXT
          </div>
        </div>
      </section>

      <section className="about-manifesto">
        <div className="manifesto-mark">e.</div>

        <div>
          <span className="section-label">OUR POINT OF VIEW / 01</span>

          <h2>
            The future belongs to businesses that use technology
            <span> thoughtfully.</span>
          </h2>

          <p>
            Digital transformation is not about adding technology for its
            own sake. It is about finding better ways to serve customers,
            improve processes, and create value. Our approach brings together
            business understanding, considered design, and modern
            engineering to help turn ideas into useful digital experiences.
          </p>
        </div>
      </section>

      <section className="about-values section">
        <div className="section-heading">
          <div>
            <span className="section-label">WHAT GUIDES US / 02</span>

            <h2>
              Principles that
              <br />
              <span>shape our work.</span>
            </h2>
          </div>

          <p>
            Good outcomes come from clear thinking, honest collaboration,
            and care for the details that matter to the people using what
            we build.
          </p>
        </div>

        <div className="about-value-list">
          {values.map((value) => (
            <article className="about-value-card" key={value.number}>
              <span className="value-number">{value.number}</span>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

              <span className="value-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-india">
        <div className="india-art" aria-hidden="true">
          <div className="india-ring india-ring-one" />
          <div className="india-ring india-ring-two" />
          <div className="india-center">e.</div>
          <span className="india-art-label">LOCAL UNDERSTANDING</span>
        </div>

        <div className="india-story">
          <span className="section-label">OUR INDIA PERSPECTIVE / 03</span>

          <h2>
            Rooted in India.
            <br />
            <span>Open to the world.</span>
          </h2>

          <p>
            India&apos;s digital landscape brings together diverse audiences,
            fast-changing expectations, and exciting opportunities. We
            believe digital products should be designed with this context
            in mind.
          </p>

          <p>
            That means considering mobile-first experiences, accessibility,
            performance on varied connections, and interfaces that are easy
            to understand. It also means building with the flexibility to
            serve customers beyond India.
          </p>
        </div>
      </section>

      <section className="principles-section section">
        <span className="section-label">HOW WE THINK / 04</span>

        <div className="principles-layout">
          <h2>
            Simple ideas.
            <br />
            <span>Thoughtful execution.</span>
          </h2>

          <div className="principles-list">
            {principles.map((principle, index) => (
              <div className="principle-item" key={principle}>
                <span>0{index + 1}</span>
                <p>{principle}</p>
                <span className="principle-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <span className="section-label">LET&apos;S BUILD SOMETHING USEFUL</span>

        <h2>
          Have a challenge
          <br />
          worth <span>solving?</span>
        </h2>

        <p>
          Tell us what you have in mind. We can explore the problem,
          discuss possible solutions, and find a practical way forward.
        </p>

        <a href="/contact" className="button-primary">
          Start a conversation <span>↗</span>
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