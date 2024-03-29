import React,{useContext} from "react";
import "./sort.css";
import { NewsContext, NewsDispatchContext } from "../../context/NewsContext";
export default function Sort() {
  const {search,darkTheme}= useContext(NewsContext);
  const dispatch=useContext(NewsDispatchContext);
  const handleDateClick = () => {
    let sortByDate = [...search].sort((a, b) => b.published_datetime_utc.slice(0,10).localeCompare(a.published_datetime_utc.slice(0,10)))
    dispatch({type:"SEARCH_ITEMS",payload: sortByDate});
  };
  const handleDropdownClick = () => {
    let dropdown = document.getElementById("dropContent");
    if (dropdown.style.display === "none") dropdown.style.display = "block";
    else dropdown.style.display = "none";
  };
  window.onclick = function (event) {
    if (!event.target.matches(".sortButton")) {
      var dropdown = document.getElementById("dropContent");
      dropdown.style.display = "hidden";
    }
  };
  return (
    <>
      <div className="sortContainer">
        <span className="contentTitle" style={{ color: darkTheme?"white":"black"}}>Recent hacks...</span>
        <div className="wrapper">
          <button className="sortButton" onClick={handleDropdownClick}>
            Sort by
          </button>
          <div id="dropContent" >
            <a onClick={handleDateClick}>Date</a>
          </div>
        </div>
      </div>
    </>
  );
}
