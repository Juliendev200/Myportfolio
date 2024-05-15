import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div id="header">
      <h2 id="logo">Julien Lefebvre</h2>
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
    </div>
  );
}
