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

const CiderCard = ({ item, handleChange, handleClick }) => {
  const { title, author, price, img } = item;
  // const classes = useStyles();

  //   const increase = () => {
  //     setCounter(count => count + 1)
  //     console.log(title + counter)
  // }

  // const decrease = () => {
  //     if ( counter > 1 ) {
  //         setCounter(count => count - 1)
  //     }
  // }

  return (
    <Grid item xs={12} sm={4}>
      <div id="ciders">
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
              height="120"
              src={img}
              // alt="green iguana"
            />
            <Typography variant="body2" color="text.secondary">
              {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {price}€
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleChange(item, -1)}>
              <RemoveIcon fontSize="small" />
            </Button>
            <Button>{item.amount}</Button>
            <Button size="small" onClick={() => handleChange(item, +1)}>
              <AddIcon fontSize="small" />
            </Button>
            <Button size="small" onClick={() => handleClick(item)}>
              Lisää tilaukseen {price}
            </Button>
          </CardActions>
        </Card>
      </div>
    </Grid>
  );
};

export default CiderCard;
