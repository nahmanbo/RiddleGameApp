import { useLocation } from "react-router";
import type { FormEvent } from "react";
import "../styles/auth.css";

export default function Auth() {
  const { search } = useLocation();
  const isRegister = search.toLowerCase().includes("register");

  return (
    <main className="auth">
      <section className="auth-card">
        <h1 className="auth-title">
          {isRegister ? "Create account" : "Welcome back"}
        </h1>
        {isRegister ? <RegisterForm /> : <LoginForm />}
      </section>
    </main>
  );
}

function LoginForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

function RegisterForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
}
