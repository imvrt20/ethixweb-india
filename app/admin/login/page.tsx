"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { createClient } from "../../lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const supabase = createClient();

      const { data, error } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (error) {
        setErrorMessage(
          "Unable to sign in. Please check your email and password."
        );
        return;
      }

      if (!data.user) {
        setErrorMessage("Sign-in failed. Please try again.");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch (error) {
      console.error("Admin sign-in error:", error);

      setErrorMessage(
        "Unable to connect to the authentication service. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-login-page">
      {/* LEFT PANEL */}

      <section className="admin-login-visual">
        <Link href="/" className="admin-brand">
          <span className="admin-brand-symbol">e.</span>

          <span>
            <strong>ethixweb</strong>
            <small>INDIA · DIGITAL STUDIO</small>
          </span>
        </Link>

        <div className="admin-visual-content">
          <div className="admin-pill">
            <Sparkles size={14} />
            YOUR WORKSPACE
          </div>

          <h1>
            Good work
            <br />
            starts with
            <br />
            <span>good thinking.</span>
          </h1>

          <p>
            Your projects, enquiries, and opportunities.
            Everything important, in one thoughtful workspace.
          </p>

          <div className="admin-visual-card">
            <div className="admin-card-icon">
              <ShieldCheck size={22} />
            </div>

            <div>
              <strong>A workspace built around trust.</strong>

              <p>
                A dedicated space for managing your business enquiries.
              </p>
            </div>

            <span className="admin-card-status" />
          </div>
        </div>

        <div className="admin-visual-footer">
          <span>DESIGNED WITH INTENTION.</span>
          <span>BUILT FOR WHAT&apos;S NEXT. ↗</span>
        </div>
      </section>

      {/* RIGHT PANEL */}

      <section className="admin-login-content">
        <div className="admin-login-top">
          <span className="admin-login-label">
            ETHIXWEB ADMINISTRATION
          </span>

          <Link href="/" className="admin-back-link">
            Back to website ↗
          </Link>
        </div>

        <div className="admin-login-form-wrapper">
          <div className="admin-login-icon">
            <LockKeyhole size={24} />
          </div>

          <span className="admin-login-eyebrow">
            YOUR SPACE AWAITS
          </span>

          <h2>
            Welcome
            <br />
            <span>back.</span>
          </h2>

          <p className="admin-login-description">
            Sign in to manage your enquiries and keep good work moving.
          </p>

          <form
            className="admin-login-form"
            onSubmit={handleSubmit}
          >
            {/* EMAIL */}

            <div className="admin-input-group">
              <label htmlFor="admin-email">
                Email address
              </label>

              <input
                id="admin-email"
                type="email"
                placeholder="admin@ethixweb.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                autoComplete="username"
                required
                disabled={loading}
              />
            </div>

            {/* PASSWORD */}

            <div className="admin-input-group">
              <div className="admin-password-label">
                <label htmlFor="admin-password">
                  Password
                </label>

                <span>AUTHENTICATED ACCESS</span>
              </div>

              <div className="admin-password-wrapper">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  autoComplete="current-password"
                  required
                  disabled={loading}
                />

                <button
                  type="button"
                  className="admin-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* ERROR MESSAGE */}

            {errorMessage && (
              <p
                role="alert"
                style={{
                  color: "#b42318",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                {errorMessage}
              </p>
            )}

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              className="admin-login-button"
              disabled={loading}
            >
              {loading
                ? "Signing in..."
                : "Sign in to workspace"}

              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          {/* SECURITY NOTICE */}

          <div className="admin-login-security">
            <ShieldCheck size={18} />

            <p>
              Administrator access only.
              <br />
              Your workspace should stay private.
            </p>
          </div>
        </div>

        {/* FOOTER */}

        <div className="admin-login-bottom">
          <span>© 2026 ETHIXWEB INDIA</span>
          <span>THOUGHTFULLY MADE. ✳</span>
        </div>
      </section>
    </main>
  );
}