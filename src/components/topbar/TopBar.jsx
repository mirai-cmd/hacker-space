import React,{useContext} from "react";
import "./topbar.css";
import { NewsContext, NewsDispatchContext } from "../../context/NewsContext";
export default function TopBar() {
  const state = useContext(NewsContext);
  const dispatch=useContext(NewsDispatchContext);
  const toggleLightClick = () => {
    let htmlContent = document.querySelector('html');
    htmlContent.style.backgroundColor = "white";
    dispatch({type:"TOGGLE_THEME"});
  };
  const toggleDarkClick = () => {
    let htmlContent = document.querySelector('html');
    htmlContent.style.backgroundColor = "rgb(32, 40, 63)";
    htmlContent.style.color = "rgb(89, 165, 232)";
    dispatch({type:"TOGGLE_THEME"});
  };

  return (
    <div className="container">
      <span className="title">HackerSpace</span>
      {state.darkTheme ? <button className="toggleLightButton" onClick={toggleLightClick}>
        <i className="fa-solid fa-sun "></i>
      </button>:<button className="toggleDarkButton" onClick={toggleDarkClick}>
        <i className="fa-solid fa-moon"></i>
      </button>}
    </div>
  );
}
