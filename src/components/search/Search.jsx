import { useState } from "react";
import Articles from "../articles/Articles";
import "./search.css";
export default function SearchBar({ items }) {
  const [search, setSearch] = useState("");
  const searchResult = items.filter((item) => {
    item.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <div className="searchBox">
        <input
          type="text"
          className="searchText"
          placeholder="Search by news title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <a className="searchButton">
          <i class="fa-solid fa-magnifying-glass " />
        </a>
      </div>
      <div className="searchResults">
        <Articles items={searchResult}/>
      </div>
    </>
  );
}
