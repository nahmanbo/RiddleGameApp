import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import type { FormEvent } from "react";
import { TokenManager } from "../services/tokenManager"
import { login, signup } from "../services/authAPI";
import "../styles/auth.css";

// Handles user authentication, including login and registration.
export default function Auth() {
  const { search } = useLocation();
  const isRegister = search.toLowerCase().includes("register");

  return (
    <main className="auth">
      <section className="auth-card">
        <h1 className="auth-title">
          {isRegister ? "Create account" : "Login account"}
        </h1>
        <AuthForm isRegister={isRegister} />
      </section>
    </main>
  );
}

// Renders the authentication form based on the isRegister prop.
function AuthForm({ isRegister }: { isRegister: boolean }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      if (isRegister) {
        await signup(username, password);
        const { token, player } = await login(username, password);
        TokenManager.save(token);
        console.log(`Welcome, ${player.name}!`);
        console.log(`Your project, ${token}!`);
      } else {
        const { token, player } = await login(username, password);
        TokenManager.save(token);
        console.log(`Welcome back, ${player.name}!`);
        console.log(`Your project, ${token}!`);
      }
      navigate("/play");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
      <label> Username </label>
      <input name="username" type="text" placeholder="Enter your username" required />
      <label> password </label>
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">{isRegister ? "Register" : "Login"}</button>
    </form>
  );
}