import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import beer from "../Data/beer";
import longDrinks from "../Data/longDrink";
import cider from "../Data/cider";
import BeerCard from "./card/beerCard";
import CiderCard from "./card/ciderCard";
import LongDrinkCard from "./card/longDrinkCard";

const ShowData = ({ handleClick }) => {
  return (
    // <Cards>
    <Container component="section" maxWidth="lg">
      <Grid container spacing={3} alignItems="stretch">
        {beer.map((item) => (
          <BeerCard key={item.id} item={item} handleClick={handleClick} />
        ))}
      </Grid>
      <Grid container spacing={3} alignItems="stretch">
        {cider.map((item) => (
          <CiderCard
            id="ciders"
            key={item.id}
            item={item}
            handleClick={handleClick}
          />
        ))}
      </Grid>
      <Grid container spacing={3} alignItems="stretch">
        {longDrinks.map((item) => (
          <LongDrinkCard key={item.id} item={item} handleClick={handleClick} />
        ))}
      </Grid>
    </Container>
  );
};

export default ShowData;
