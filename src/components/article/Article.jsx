import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Article({item}) {
  return (
    <div className="article">
      <Card
        sx={{
          width: 745,
          maxHeight: 390,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize={15}>
            {item.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" fontSize={12}>
            {item.source["name"]} | {item.publishedAt}
          </Typography>
          <Typography
            variant="p"
            color="text.secondary"
            fontSize={13}
          >
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ marginBottom: "4.2rem" }}
            variant="text"
            href={item.url}
            size="medium"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
