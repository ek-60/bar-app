import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import CiderCard from "../card/ciderCard";
import LongDrinkCard from "../card/longDrinkCard";
import BeerCard from "../card/beerCard";
import cider from "../../Data/cider";
import beer from "../../Data/beer";
import longDrinks from "../../Data/longDrink";

const MainPage = ({ handleClick }) => {
  return (
    <Container component="section" maxWidth="lg" sx={{ marginTop: 10 }}>
      <Grid container spacing={3} alignItems="stretch">
        {beer.map((item) => (
          <BeerCard key={item.id} item={item} handleClick={handleClick} />
        ))}
      </Grid>
      <Grid container spacing={3} alignItems="stretch">
        {cider.map((item) => (
          <CiderCard key={item.id} item={item} handleClick={handleClick} />
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

export default MainPage;
