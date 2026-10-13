import Link from 'next/link';
const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "We build fast, responsive, and scalable digital experiences that help businesses turn ideas into reality.",
    features: [
      "Business websites",
      "Full-stack applications",
      "E-commerce platforms",
      "API development",
    ],
    icon: "↗",
  },
  {
    number: "02",
    title: "AI & Intelligent Products",
    description:
      "We bring AI into real-world workflows to help businesses work smarter, make better decisions, and innovate faster.",
    features: [
      "Generative AI solutions",
      "AI-powered applications",
      "Workflow automation",
      "Intelligent assistants",
    ],
    icon: "✳",
  },
  {
    number: "03",
    title: "Digital Strategy & Growth",
    description:
      "We help businesses create a strong digital foundation and build experiences that support sustainable growth.",
    features: [
      "Digital strategy",
      "User experience",
      "Performance optimization",
      "Scalable architecture",
    ],
    icon: "◎",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, challenges, and goals before deciding what to build.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We develop a clear plan covering the solution, priorities, user experience, and technical approach.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn the plan into a responsive, reliable digital product with attention to detail.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We test, refine, and optimize the experience so it is ready to perform in the real world.",
  },
];

export default function ServicesPage() {
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

      <section className="services-hero">
        <span className="section-label">OUR SERVICES / WHAT WE DO</span>

        <h1>
          The right ideas.
          <br />
          <span>Built the right way.</span>
        </h1>

        <div className="services-hero-bottom">
          <p>
            From your first digital idea to a fully developed product, we
            combine thoughtful design, modern technology, and business
            thinking to help you move forward.
          </p>

          <a href="#capabilities" className="button-primary">
            Explore capabilities <span>↓</span>
          </a>
        </div>
      </section>

      <section className="services-list section" id="capabilities">
        <div className="section-heading">
          <div>
            <span className="section-label">OUR CAPABILITIES / 01</span>
            <h2>
              Technology with
              <br />
              <span>a purpose.</span>
            </h2>
          </div>

          <p>
            Every solution starts with a real problem. We focus on building
            technology that is useful, maintainable, and ready to grow.
          </p>
        </div>

        <div className="detailed-services">
          {services.map((service) => (
            <article className="detailed-service" key={service.number}>
              <div className="detailed-service-top">
                <span>{service.number} / SERVICE</span>
                <span className="service-icon">{service.icon}</span>
              </div>

              <div className="detailed-service-content">
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span>↗</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section section">
        <div className="section-heading">
          <div>
            <span className="section-label">HOW WE WORK / 02</span>
            <h2>
              Clear process.
              <br />
              <span>Better outcomes.</span>
            </h2>
          </div>

          <p>
            A collaborative approach that keeps your goals at the centre
            of every decision, from the first conversation to launch.
          </p>
        </div>

        <div className="process-grid">
          {process.map((step) => (
            <article className="process-card" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div className="process-line" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="india-section">
        <div>
          <span className="section-label">MADE FOR AMBITION / INDIA</span>
          <h2>
            Built for India.
            <br />
            Ready for <span>everywhere.</span>
          </h2>
        </div>

        <p>
          We believe digital products should work for the people who use
          them. That means responsive experiences, thoughtful performance,
          accessible design, and technology that can grow with your business.
        </p>
      </section>

      <section className="services-cta">
        <span className="section-label">HAVE AN IDEA?</span>

        <h2>
          Let&apos;s build
          <br />
          something <span>meaningful.</span>
        </h2>

        <p>
          Tell us what you want to achieve. Let&apos;s explore the right
          solution for your business.
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