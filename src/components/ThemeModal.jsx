import React, { useEffect } from "react";
import { StyledThemeModal, StyledLI } from "../styles";

const ThemeModal = ({ open, hideThemeModal, notify }) => {
  // Theme colors
  const themeColors = [
    { hue: 199, hex: "#26a0d9" },
    { hue: 345, hex: "#d92653" },
    { hue: 263, hex: "#40128B" },
    { hue: 234, hex: "#0C134F" },
    { hue: 21, hex: "#EF5B0C" },
  ];

  useEffect(() => {
    // Gets primary theme color from localstorage (only if exists)
    if (localStorage.getItem("theme-hue")) {
      document
        .querySelector(":root")
        .style.setProperty(
          "--primary-hue",
          JSON.parse(localStorage.getItem("theme-hue"))
        );
    }
  }, []);

  function handleThemeChange(hue) {
    // Change primary theme of Application and saves it in local-storage
    document.querySelector(":root").style.setProperty("--primary-hue", hue);
    localStorage.setItem("theme-hue", JSON.stringify(hue));
    hideThemeModal();
    notify("success", "Theme Saved !!");
  }
  return (
    <StyledThemeModal open={open}>
      <div className="heading">
        <h4>Select Theme 🙂</h4>
      </div>
      <ul>
        {themeColors.map((color, index) => {
          return (
            <StyledLI key={index} color={color.hue}>
              <span className="color-cirle"></span>
              <p>{color.hex}</p>
              <button onClick={() => handleThemeChange(color.hue)}>
                <i className="fa-sharp fa-solid fa-brush"></i>
              </button>
            </StyledLI>
          );
        })}
      </ul>
    </StyledThemeModal>
  );
};

export default ThemeModal;
