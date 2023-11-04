import React from "react";
import { useTheme } from "./ThemeContext";
import "./Theme.css";

function MyComponent() {
  const { theme, setTheme } = useTheme();

  console.log("value of them is " + theme);
  return (
    <div className={theme}>
      <p>This component is using the {theme} theme.</p>
      <br />
      <br />
    </div>
  );
}

export default MyComponent;
