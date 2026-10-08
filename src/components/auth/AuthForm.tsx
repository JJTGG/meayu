"use client";

import { FormEvent, useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

export function AuthForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");

    if (error === "callback") {
      setStatus("error");
      setMessage("That sign-in link could not be completed. Please request a new one.");
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setStatus("error");
      setMessage("Enter your email address.");
      return;
    }

    setStatus("sending");
    setMessage("");

    const supabase = createClient();

    const redirectTo = new URL("/auth/callback", window.location.origin);
    redirectTo.searchParams.set("next", "/workspace");

    const { error } = await supabase.auth.signInWithOtp({
      email: normalizedEmail,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: redirectTo.toString(),
      },
    });

    if (error) {
      setStatus("error");
      setMessage("We could not send the sign-in link. Please try again.");
      return;
    }

    setStatus("sent");
    setMessage("Check your email for your Meayu sign-in link.");
  }

  const isSending = status === "sending";

  return (
    <div className="auth-card">
      <div className="auth-heading">
        <p className="eyebrow">Creator access</p>

        <h1>Make something for someone.</h1>

        <p>
          Sign in to keep the people, memories, and experiences you create
          safely attached to your workspace.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="form-field">
          <span>Email</span>

          <input
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={isSending}
            required
          />
        </label>

        <button className="button button-primary" type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send sign-in link"}
        </button>

        {message ? (
          <p
            className={`auth-message ${status === "error" ? "auth-message-error" : ""}`}
            aria-live="polite"
          >
            {message}
          </p>
        ) : null}
      </form>

      <p className="auth-note">
        Meayu uses passwordless sign-in. No password to create or remember.
      </p>
    </div>
  );
}