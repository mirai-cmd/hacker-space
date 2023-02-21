import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import TopBar from "../../components/topbar/TopBar";
import Articles from "../../components/articles/Articles";
import Header from "../../components/header/Header";
import Sort from "../../components/sortby/Sort";

function Search({ search, setSearch, items }) {
  function handleSearchChange(e) {
    if (e.target.value === "") return setSearch(search);
    const results = items.filter((item) => item.title.includes(e.target.value));
    setSearch(results);
  }
  return (
    <div className="searchWrapper">
      <span className="searchHead">Look for specific articles</span>
      <input
        type="text"
        className="searchText"
        placeholder="Search by news title..."
        onChange={handleSearchChange}
      />
      <button className="searchButton">
        <i className="fa-solid fa-magnifying-glass " />
      </button>
    </div>
  );
}

export default function Home() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState([]);
  const fetchAPI = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=hackers AND cybersecurity&apiKey=37ad1cab6d2f4e2a9c243f8bdb9f499b`
      );
      setItems(response.data.articles);
      setSearch(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="home">
      <TopBar />
      <Header items={items} />
      <Search search={search} setSearch={setSearch} items={items} />
      <Sort search={search} setSearch={setSearch}/>
      <Articles items={search} />
    </div>
  );
}
