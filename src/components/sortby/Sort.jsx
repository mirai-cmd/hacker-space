import React,{useContext} from "react";
import "./sort.css";
import { NewsContext, NewsDispatchContext } from "../../context/NewsContext";
export default function Sort() {
  const state = useContext(NewsContext);
  const dispatch=useContext(NewsDispatchContext);
  const handleDateClick = () => {
    let sortByDate = [...state.search].sort((a, b) => b.publishedAt.slice(0,10).localeCompare(a.publishedAt.slice(0,10)))
    dispatch({type:"SEARCH_ITEMS",search: sortByDate});
  };
  const handleSourceClick = () => {
    let sortBySource = [...state.search].sort((a, b) => b.source["name"] < a.source["name"])
    dispatch({type:"SEARCH_ITEMS",search: sortBySource});
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
      <div className="container">
        <span className="contentTitle">Recent hacks...</span>
        <div className="wrapper">
          <button className="sortButton" onClick={handleDropdownClick}>
            Sort by
          </button>
          <div id="dropContent" >
            <a onClick={handleDateClick}>Date</a>
            <a onClick={handleSourceClick}>Source</a>
          </div>
        </div>
      </div>
    </>
  );
}
