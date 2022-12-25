import Article from "../article/Article";
import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

export default function Articles({ items }) {
  return (
    <Container
      sx={{
        padding: "1.5rem",
        margin: "3.5rem 0 0 12rem",
      }}
    >
      <Grid
        container
        spacing={7}
        columnSpacing={{ xs: 1, sm: 2, md: 7 }}
        rowSpacing={{ xs: 1, sm: 2, md: 5 }}
      >
        {items.map((item) => {
          return(
          <Grid item>
            <Article item={item} />
          </Grid>)
        })}
      </Grid>
    </Container>
  );
}
