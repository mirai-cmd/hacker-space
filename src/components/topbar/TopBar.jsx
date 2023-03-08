import React,{useContext} from "react";
import "./topbar.css";
import { NewsContext, NewsDispatchContext } from "../../context/NewsContext";
import {Link} from "react-scroll";
export default function TopBar() {
  const state = useContext(NewsContext);
  const dispatch=useContext(NewsDispatchContext);
  const handleClick = () => {
    dispatch({type:"TOGGLE_THEME"});
    let html = document.querySelector('html');
    let topbar = document.getElementById('topbar');
    let button = document.querySelector('button');
    if(!button.classList.contains('toggleLightButton')){
      button.style.backgroundColor="rgb(32, 40, 63)";
      topbar.style.backgroundColor = "rgb(32, 40, 63)";
      html.style.backgroundColor = "rgb(32, 40, 63)";
      topbar.style.color = "rgb(89, 165, 232)";
    }
    else {
      button.style.backgroundColor="black";
      topbar.style.backgroundColor = "black";
      html.style.backgroundColor = "white";
      topbar.style.color = "white";
    }
  };

  return (
    <div id="topbar" className="topBarContainer">
          <span className="title">HackerSpace</span>
      <div className="topBar">
          <Link to="home" smooth duration={800} className="homeLink">Home</Link>
          {state.darkTheme ? <button className="toggleLightButton" onClick={handleClick}>
            <i className="fa-solid fa-sun "></i>
          </button>:<button id="dark" className="toggleDarkButton" onClick={handleClick}>
            <i className="fa-solid fa-moon"></i>
          </button>}
      </div>
    </div>
  );
}
