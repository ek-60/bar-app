import { Badge, Button } from "@mui/material";
import React, { Component, useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./pages/About";
import MainPage from "./pages/main";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./pages/cart";

const Navigation = ({ setShow, size }) => {
  return (
    <Router>
      <div>
        <Navbar bg="secondary" variant="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand style={{ fontWeight: "bold" }} as={Link} to={"/"}>
              Logo
            </Navbar.Brand>
            <Navbar.Brand style={{ fontWeight: "bold" }} as={Link} to={"/Cart"}>
              Cart
            </Navbar.Brand>
            <Navbar.Brand
              style={{ fontWeight: "bold" }}
              as={Link}
              to={"/About"}
            >
              <Button color="inherit">
                <Badge color="secondary" badgeContent={1}>
                  <ShoppingCartIcon />
                </Badge>
              </Button>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
