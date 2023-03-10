import React, { useReducer, useEffect } from "react";
import axios from "axios";
import TopBar from "../../components/topbar/TopBar";
import Articles from "../../components/articles/Articles";
import Header from "../../components/header/Header";
import Sort from "../../components/sortby/Sort";
import { reducer } from "../../reducers/reducer";
import { NewsContext, NewsDispatchContext } from "../../context/NewsContext";
import './home.css';
export default function Home() {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    search: [],
    loading: true,
    darkTheme: false,
  });
  const fetchAPI = async () => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: "hackers AND hack AND cybersecurity AND cybercrime AND passwords AND hacking AND vulnerability AND darkweb",
        safeSearch: "Off",
        textFormat: "Raw",
        count: "100",
      },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "3d7082cc5emsh696a274e23386d9p1f27c6jsnc1cf1570245a",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.value });
        dispatch({ type: "SEARCH_ITEMS", payload: response.data.value });
        dispatch({type:"LOADING"});
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <NewsContext.Provider value={state}>
      <NewsDispatchContext.Provider value={dispatch}>
        <TopBar />
        <Header />
        <Sort />
        <Articles />
      </NewsDispatchContext.Provider>
    </NewsContext.Provider>
  );
}
