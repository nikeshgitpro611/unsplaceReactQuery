import React from "react";
import { useGlobalContext } from "./Context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ThemeToggle = () => {
  const { isDarkThem, toggleDarkTheme } = useGlobalContext();
  console.log(isDarkThem);
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkThem ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
