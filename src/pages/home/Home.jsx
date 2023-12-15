import React, { useReducer, useEffect } from "react";
import axios from "axios";
import TopBar from "../../components/topbar/TopBar";
import Articles from "../../components/articles/Articles";
import Header from "../../components/header/Header";
import Sort from "../../components/sortby/Sort";
import { reducer } from "../../reducers/reducer";
import { NewsContext } from "../../context/NewsContext";
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
      method: 'GET',
      url: 'https://real-time-news-data.p.rapidapi.com/search',
      params: {
        query: 'hackers',
        lang: 'en'
      },
      headers: {
        'X-RapidAPI-Key': '3d7082cc5emsh696a274e23386d9p1f27c6jsnc1cf1570245a',
        'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
      }
    };
    //
    try{
      const response = await axios.request(options);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data.data });
      dispatch({ type: "SEARCH_ITEMS", payload: response.data.data });
      dispatch({type:"LOADING"});
    }
    catch(error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <NewsContext.Provider value={state} dispatch={dispatch}>
        <TopBar />
        <Header />
        <Sort />
        <Articles />
    </NewsContext.Provider>
  );
}
