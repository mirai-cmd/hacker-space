import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import TopBar from "../../components/topbar/TopBar";
import Articles from "../../components/articles/Articles";
import Header from "../../components/header/Header";

export default function Home() {
  const [items, setItems] = useState([]);
  const fetchAPI = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=hackers&pageSize=18&apiKey=YOUR_API_KEY"
      );
      setItems(response.data.articles);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAPI()
  }, []);
  return (
    <div className="home">
      <TopBar />
      <Header items={items}/>
      <span className="gridTitle">Recent hacks...</span>
      <Articles items={items}/>
    </div>
  );
}
