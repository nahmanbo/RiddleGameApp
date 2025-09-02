import { useLocation } from "react-router";

export default function Auth() {
  const { search } = useLocation(); 

  let tab: "login" | "register" = "login";
  if (search.includes("register")) tab = "register";

  return (
    <main>
      {tab === "login" ? <h1>Login</h1> : <h1>Register</h1>}
    </main>
  );
}
