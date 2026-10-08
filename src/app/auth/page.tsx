import { AuthForm } from "@/components/auth/AuthForm";

export default function AuthPage() {
  return (
    <main className="auth-page">
      <a className="auth-brand" href="/">
        meayu
      </a>

      <AuthForm />

      <p className="auth-footer">
        <a href="/">Back to Meayu</a>
      </p>
    </main>
  );
}