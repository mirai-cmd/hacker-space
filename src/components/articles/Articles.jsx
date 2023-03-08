import React, { useContext, useState } from "react";
import Article from "../article/Article";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { NewsContext } from "../../context/NewsContext";
import ReactPaginate from "react-paginate";
import './articles.css';
export default function Articles() {
  const [pageNum, setPageNum] = useState(0);
  const { search } = useContext(NewsContext);
  const articlesPerPage = 10;
  const visited = pageNum * articlesPerPage;
  const pageCount = Math.ceil(search.length / articlesPerPage);
  const articles = search.slice(visited, visited + articlesPerPage);
  //Selected is a built in variable for react-paginate. Do not rename it !!
  const handlePageChange = ({ selected }) => {
    setPageNum(selected);
  };
  return (
    <Container
      sx={{
        padding: "1.5rem",
        margin: "5rem 0 0 12rem",
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 7 }}
        rowSpacing={{ xs: 1, sm: 2, md: 5 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"paginateContainer"}
          activeClassName={"pageNumActive"}
          disabledClassName={"pageNumDisabled"}
          nextLinkClassName={"next"}
          previousLinkClassName={"prev"}
        />
        {articles.map((item) => {
          return (
            <Grid item key={item.title}>
              <Article item={item} />
            </Grid>
          );
        })}
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"paginateContainer"}
          activeClassName={"pageNumActive"}
          disabledClassName={"pageNumDisabled"}
          nextLinkClassName={"next"}
          previousLinkClassName={"prev"}
        />
      </Grid>
    </Container>
  );
}
