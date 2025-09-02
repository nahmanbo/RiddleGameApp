import { NavLink } from "react-router";

export type NavItem = { to: string; label: string };

export default function NavBar({ items }: { items: NavItem[] }) {
  return (
    <nav className="nav-left">
      {items.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}
