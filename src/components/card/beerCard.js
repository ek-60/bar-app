import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
// import LocationCityIcon from '@material-ui/icons/LocationCity';

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(2, 2),
//   },
//   card: {
//     height: '100%',
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     border: '1px solid black',
//     borderRadius: '5px',
//     textAlign: 'center',
//   },
//   icon: {
//     padding: theme.spacing(2, 0),
//   },
//   title: {
//     padding: theme.spacing(2),
//   },
//   featureList: {
//     padding: theme.spacing(2),
//   },
// }));

const BeerCard = ({ item }) => {
  const { title, author, price, img, handleClick } = item;

  return (
    <Grid item xs={12} sm={4}>
      <div id="beers">
        <Card
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            maxWidth: 345,
            margin: 1,
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
            <Typography variant="body2" color="text.secondary">
              {price}€
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">-</Button>
            <Button size="small">Lisää tilaukseen</Button>
          </CardActions>
        </Card>
      </div>
    </Grid>
  );
};

export default BeerCard;
