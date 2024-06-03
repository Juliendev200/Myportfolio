import React from "react";
import Moon from "/src/assets/moon.svg?react";
import Sun from "/src/assets/sun.svg?react";

export default function DarkMode() {
  const setDarkMode = () => {
    const body = document.querySelector("body");
    body.setAttribute("data-theme", "dark");
    body.style.backgroundImage =
      "url('https://juliendev200.github.io/Myportfolio/img/blue2.jpg')";
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    const body = document.querySelector("body");
    body.setAttribute("data-theme", "light");
    body.style.backgroundImage =
      "url('https://juliendev200.github.io/Myportfolio/img/blue1.jpg')";
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  } else setLightMode();

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
}
