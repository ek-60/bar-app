import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const BeerCard = ({ item, handleClick }) => {
  const { title, author, price, img } = item;

  return (
    <Grid item xs={12} sm={4}>
      <div id="beers">
        <Card
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            maxWidth: 445,
            minWidth: 245,
            height: 345,
            margin: 1,
            backgroundColor: "#cfe0e8",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <CardMedia
              component="img"
              height="180"
              src={img}
              // alt="green iguana"
            />
            {/* <img src={img} width="100" /> */}
            <Typography variant="body2" color="text.secondary">
              {author}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small" onClick={() => handleChange(item, -1)}>
              <RemoveIcon fontSize="small" />-
            </Button>
            <Button>{item.amount}</Button>
            <Button size="small" onClick={() => handleChange(item, +1)}>
              <AddIcon fontSize="small" />+
            </Button> */}
            <Button
              size="medium"
              sx={{
                fontWeight: "bold",
                margin: "auto",
                // marginTop: "auto",
                backgroundColor: "#cfe0e8",
                color: "black",
              }}
              onClick={() => handleClick(item)}
            >
              Lisää tilaukseen {price}
            </Button>
          </CardActions>
        </Card>
      </div>
    </Grid>
  );
};

export default BeerCard;
