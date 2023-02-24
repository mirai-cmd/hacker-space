import Article from "../article/Article";
import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";
import { NewsContext} from "../../context/NewsContext";

export default function Articles() {
  const state = useContext(NewsContext);
  return (
    <Container
      sx={{
        padding: "1.5rem",
        margin: "8.5rem 0 0 12rem",
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 7 }}
        rowSpacing={{ xs: 1, sm: 2, md: 5 }}
        sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}
      >
        {state.search.map((item) => {
          return(
          <Grid item key={item.title}>
            <Article item={item} />
          </Grid>)
        })}
      </Grid>
    </Container>
  );
}
