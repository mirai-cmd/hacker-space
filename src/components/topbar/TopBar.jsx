import React,{useContext} from "react";
import "./topbar.css";
import { NewsContext, NewsDispatchContext } from "../../context/NewsContext";
import {Link} from "react-scroll";
export default function TopBar() {
  const state = useContext(NewsContext);
  const dispatch=useContext(NewsDispatchContext);
  const toggleLightClick = () => {
    let htmlContent = document.querySelector('html');
    htmlContent.style.backgroundColor = "white";
    dispatch({type:"TOGGLE_THEME"});
  };
  const toggleDarkClick = () => {
    let html = document.querySelector('html');
    let span = document.querySelector('span');
    let topbar = document.getElementById('topbar');
    let button = document.getElementById('dark');
    button.style.backgroundColor="rgb(32, 40, 63)";
    topbar.style.backgroundColor = "rgb(32, 40, 63)";
    html.style.backgroundColor = "rgb(32, 40, 63)";
    span.style.color = "white";
    topbar.style.color = "rgb(89, 165, 232)";
    dispatch({type:"TOGGLE_THEME"});
  };

  return (
    <div id="topbar" className="topBarContainer">
          <span className="title">HackerSpace</span>
      <div className="topBar">
          <Link to="home" smooth duration={800} className="homeLink">Home</Link>
          {state.darkTheme ? <button className="toggleLightButton" onClick={toggleLightClick}>
            <i className="fa-solid fa-sun "></i>
          </button>:<button id="dark" className="toggleDarkButton" onClick={toggleDarkClick}>
            <i className="fa-solid fa-moon"></i>
          </button>}
      </div>
    </div>
  );
}
