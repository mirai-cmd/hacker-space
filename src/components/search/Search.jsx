import React from "react";
import "./search.css";
import { useContext } from "react";
import { NewsContext, NewsDispatchContext } from "../../context/NewsContext";

export default function Search() {
  const {items,darkTheme}= useContext(NewsContext);
  const dispatch=useContext(NewsDispatchContext);
 
  function handleSearchChange(e) {
    if (e.target.value === "")
      return dispatch({ type: "SEARCH_ITEMS", payload: items });
    const results = items.filter((item) => item.title.toLowerCase().includes(e.target.value));
    dispatch({ type: "SEARCH_ITEMS", payload: results });
  }
  
  return (
    <div className="searchWrapper">
      <span className="searchHead" style={{ color: darkTheme?"white":"black"}}>Look for specific articles</span>
      <input
        type="text"
        className="searchText"
        placeholder="Search by news title..."
        onChange={handleSearchChange}
      />
    </div>
  );
}
