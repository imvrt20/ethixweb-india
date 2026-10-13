"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

 async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();
  setStatus("Submitting your enquiry...");

  try {
    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      setStatus(
        result.message || "Something went wrong. Please try again."
      );
      return;
    }

    setStatus(result.message || "Your enquiry was submitted successfully!");

    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  } catch {
    setStatus("Unable to submit your enquiry. Please try again.");
  }
}

  return (
    <main className="contact-page">
      <nav className="navbar">
        <Link href="/" className="brand">
          <span className="brand-symbol">e.</span>
          <span>
            <strong>ethixweb</strong>
            <small>INDIA · DIGITAL STUDIO</small>
          </span>
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="nav-cta">
            Let&apos;s talk <ArrowRight size={15} />
          </Link>
        </div>
      </nav>

      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-eyebrow">
            <span className="contact-dot" />
            HAVE A PROJECT IN MIND?
          </div>

          <h1>
            Let&apos;s make
            <br />
            something <span>matter.</span>
          </h1>

          <p>
            Tell us what you&apos;re building, where you want to go, and
            what&apos;s standing in your way. We&apos;ll help you find the
            right next step.
          </p>

          <a href="#contact-form" className="contact-scroll">
            START A CONVERSATION <ArrowDownRight size={17} />
          </a>
        </div>

        <div className="contact-hero-art" aria-hidden="true">
          <div className="contact-art-circle contact-art-circle-one" />
          <div className="contact-art-circle contact-art-circle-two" />
          <div className="contact-art-card">
            <span className="contact-art-label">GOOD WORK STARTS</span>
            <strong>With a<br />conversation.</strong>
            <span className="contact-art-line" />
            <span className="contact-art-caption">INDIA · EVERYWHERE</span>
          </div>
          <span className="contact-art-plus">+</span>
          <span className="contact-art-star">✳</span>
        </div>
      </section>

      <section className="contact-content" id="contact-form">
        <div className="contact-info">
          <span className="contact-section-label">GET IN TOUCH</span>

          <h2>
            Big idea?
            <br />
            <span>Small first step.</span>
          </h2>

          <p className="contact-info-description">
            Share a little about your goals. Whether you have a detailed brief
            or just an early idea, we&apos;d love to hear from you.
          </p>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <Mail size={19} />
            </div>
            <div>
              <span>EMAIL</span>
              <p>Let&apos;s connect about your project</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <MapPin size={19} />
            </div>
            <div>
              <span>OUR APPROACH</span>
              <p>Working with ambitious teams across India</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <Phone size={19} />
            </div>
            <div>
              <span>FIRST STEP</span>
              <p>A clear brief. An honest conversation. A practical plan.</p>
            </div>
          </div>

          <div className="contact-note">
            <span className="contact-note-symbol">✳</span>
            <p>
              No unnecessary jargon. No one-size-fits-all solutions.
              Just a thoughtful conversation about what you need.
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <span className="contact-section-label">PROJECT ENQUIRY</span>
            <h3>Tell us about it.</h3>
            <p>Fields marked with * are required.</p>
          </div>

          <div className="contact-field-grid">
            <div className="contact-field">
              <label htmlFor="name">Your name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Work email *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                autoComplete="email"
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="company">Company or organisation</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Where do you work?"
              value={formData.company}
              onChange={handleChange}
              maxLength={150}
              autoComplete="organization"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="service">What can we help you with? *</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="web-development">Website development</option>
              <option value="web-application">Web application</option>
              <option value="ui-ux-design">UI/UX design</option>
              <option value="digital-strategy">Digital strategy</option>
              <option value="ecommerce">E-commerce</option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div className="contact-field">
            <label htmlFor="message">Tell us about your project *</label>
            <textarea
              id="message"
              name="message"
              placeholder="What are you trying to build or improve?"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={3000}
              rows={5}
            />
            <span className="contact-character-count">
              {formData.message.length}/3000
            </span>
          </div>

          <button type="submit" className="contact-submit">
            Send your enquiry <ArrowRight size={17} />
          </button>

          {status && (
            <div className="contact-status" role="status">
              <CheckCircle2 size={20} />
              <p>{status}</p>
            </div>
          )}

          <p className="contact-privacy">
            Your information should be handled responsibly. We&apos;ll add
            secure server-side processing and database storage in the next
            step.
          </p>
        </form>
      </section>

      <section className="contact-bottom">
        <div>
          <span className="contact-section-label">GOOD THINGS START SOMEWHERE</span>
          <h2>
            Your next chapter
            <br />
            starts with <span>hello.</span>
          </h2>
        </div>

        <Link href="/services" className="contact-bottom-link">
          EXPLORE OUR SERVICES <ArrowRight size={17} />
        </Link>
      </section>

      <footer className="footer contact-footer">
        <Link href="/" className="brand">
          <span className="brand-symbol">e.</span>
          <span>
            <strong>ethixweb</strong>
            <small>INDIA · DIGITAL STUDIO</small>
          </span>
        </Link>

        <p>Digital experiences, thoughtfully made.</p>

        <span>© 2026 Ethixweb India</span>
      </footer>
    </main>
  );
}