import React from "react";
import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

export default function Navigation() {
  return (
    <div id="header">
      <h1 id="logo">Julien Lefebvre</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to={`/`}
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              {" "}
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/Apropos`}
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              {" "}
              A propos{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
      <DarkMode />
    </div>
  );
}
