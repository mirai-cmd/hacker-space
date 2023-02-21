import React,{useState} from "react";
import "./topbar.css";

export default function TopBar() {
  const [darkTheme,setDarkTheme] = useState(false);
  const toggleLightClick = () => {
    let htmlContent = document.querySelector('html');
    htmlContent.style.backgroundColor = "white";
    setDarkTheme(!darkTheme);
  };
  const toggleDarkClick = () => {
    let htmlContent = document.querySelector('html');
    htmlContent.style.backgroundColor = "rgb(32, 40, 63)";
    htmlContent.style.color = "rgb(89, 165, 232)";

    setDarkTheme(!darkTheme);
  };

  return (
    <div className="container">
      <span className="title">HackerSpace</span>
      {darkTheme ? <button className="toggleLightButton" onClick={toggleLightClick}>
        <i class="fa-solid fa-sun "></i>
      </button>:<button className="toggleDarkButton" onClick={toggleDarkClick}>
        <i class="fa-solid fa-moon"></i>
      </button>}
    </div>
  );
}
