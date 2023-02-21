import React from "react";
import "./sort.css";
export default function Sort({ search, setSearch }) {
  const handleDateClick = () => {
    let sortByDate = [...search].sort((a, b) => b.publishedAt.slice(0,10).localeCompare(a.publishedAt.slice(0,10)))
    setSearch(sortByDate);
  };
  const handleSourceClick = () => {
    let sortBySource = [...search].sort((a, b) => b.source["name"] < a.source["name"])
    setSearch(sortBySource);
  };
  const handleClick = () => {
    var dropdown = document.getElementById("dropContent");
    if (dropdown.style.display === "none") dropdown.style.display = "block";
    else dropdown.style.display = "none";
  };
  window.onclick = function (event) {
    if (!event.target.matches(".sortButton")) {
      var dropdown = document.getElementById("dropContent");
      dropdown.style.display = "none";
    }
  };
  return (
    <>
      <div className="container">
        <span className="contentTitle">Recent hacks...</span>
        <div className="wrapper">
          <button className="sortButton" onClick={handleClick}>
            Sort by
          </button>
          <div id="dropContent">
            <a onClick={handleDateClick}>Date</a>
            <a onClick={handleSourceClick}>Source</a>
          </div>
        </div>
      </div>
    </>
  );
}
