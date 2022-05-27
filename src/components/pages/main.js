import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import CiderCard from "../card/ciderCard";
import LongDrinkCard from "../card/longDrinkCard";
import BeerCard from "../card/beerCard";
import { beer, cider, longDrinks } from "../../data/data";
import BasicButtonGroup from "../ButtonGroup";

const MainPage = ({ handleClick }) => {
  return (
    <div className="mainPage">
      {/* <BasicButtonGroup /> */}
      <Container component="section" maxWidth="lg" sx={{ paddingTop: 10 }}>
        <div className="beers">
          <h2>Oluet</h2>
          <Grid container spacing={3} alignItems="stretch">
            {beer.map((item) => (
              <BeerCard key={item.id} item={item} handleClick={handleClick} />
            ))}
          </Grid>
        </div>
        <div className="ciders">
          <h2>Siiderit</h2>
          <Grid container spacing={3} alignItems="stretch">
            {cider.map((item) => (
              <CiderCard key={item.id} item={item} handleClick={handleClick} />
            ))}
          </Grid>
        </div>
        <div className="longdrinks">
          <h2>Lonkerot</h2>
          <Grid container spacing={3} alignItems="stretch">
            {longDrinks.map((item) => (
              <LongDrinkCard
                key={item.id}
                item={item}
                handleClick={handleClick}
              />
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
