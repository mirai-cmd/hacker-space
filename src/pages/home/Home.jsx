import React, { useReducer, useEffect } from "react";
import axios from "axios";
import TopBar from "../../components/topbar/TopBar";
import Articles from "../../components/articles/Articles";
import Header from "../../components/header/Header";
import Sort from "../../components/sortby/Sort";
import Search from "../../components/search/Search";
import { reducer } from "../../reducers/reducer";
import { NewsContext, NewsDispatchContext } from "../../context/NewsContext";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    search: [],
    darkTheme: false,
  });
  const fetchAPI = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=hackers AND cybersecurity&apiKey=YOUR_API_KEY`
      );
      dispatch({ type: "FETCH_SUCCESS", payload: response.data.articles });
      dispatch({ type: "SEARCH_ITEMS", payload: response.data.articles });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <NewsContext.Provider value={state}>
      <NewsDispatchContext.Provider value={dispatch}>
        <TopBar />
        <Header />
        <Search />
        <Sort />
        <Articles />
      </NewsDispatchContext.Provider>
    </NewsContext.Provider>
  );
}
