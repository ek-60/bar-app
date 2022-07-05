import React, { useEffect, useState } from "react";
import "./cartStyle.css";
import CloseButton from "../closeButton";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { auth, database } from "../../firebase";
import { push, ref, set } from "firebase/database";

const Cart = ({ cart, setCart, handleChange, setShow }) => {
  const [price, setPrice] = useState(0);
  const [number, setNumber] = useState();
  const [table, setTable] = useState("");
  const [name, setName] = useState();

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const handelTable = (event) => {
    const tableNumber = event.target.value;
    setTable(tableNumber);
  };

  const handleName = (event) => {
    const userName = event.target.value;
    setName(userName);
  };

  const handlePhoneNumber = (event) => {
    const phoneNumber = event.target.value.replace(/\D/g, "");
    setNumber(phoneNumber);
  };

  const Push = () => {
    const data = ref(database, "Tilaus");
    const newItems = push(data);
    const order = cart.map((item) => item.title + item.amount);
    set(newItems, {
      name: name,
      table: table,
      phoneNumber: number,
      order: order,
      orderPrice: price,
    });
    console.log(
      "Pyödän numero: " +
        table +
        " Tilaajan nimi: " +
        name +
        " Puhelinnumero: " +
        number +
        " Tilasi: " +
        order +
        " Hinta: " +
        price
    );
    window.location.reload(1000);
  };

  return (
    <div className="cartPage">
      <CloseButton setShow={setShow} />
      <div className="scrollable-div">
        <div>
          <article>
            {cart.map((item) => (
              <div className="cart_box" key={item.id}>
                <div className="cart_img">
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                </div>
                <div>
                  <button onClick={() => handleChange(item, 1)}>+</button>
                  <button>{item.amount}</button>
                  <button onClick={() => handleChange(item, -1)}>-</button>
                </div>
                <div>
                  <span>{item.price * item.amount} €</span>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </article>
        </div>
      </div>
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          // backgroundColor: "#bccad6",
        }}
      >
        <Box>
          <FormControl sx={{ width: 300, margin: 2 }}>
            <InputLabel>Pöydän numero</InputLabel>
            <Select
              value={table}
              onChange={handelTable}
              sx={{ backgroundColor: "#cfe0e8" }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ width: 300, margin: 2, backgroundColor: "#cfe0e8" }}
            id="name"
            label="Anna nimesi"
            placeholder="Nimi"
            multiline
            value={name}
            onChange={handleName}
            //   variant="standard"
          />
          <TextField
            sx={{ width: 300, margin: 2, backgroundColor: "#cfe0e8" }}
            id="phoneNumber"
            label="Anna puhelinnumerosi"
            placeholder="Puhelinnumero"
            multiline
            //   variant="standard"
            value={number}
            onChange={handlePhoneNumber}
          />
        </Box>
      </Grid>
      <div className="total">
        <span>Ostoksesi maksavat {price}€</span>
        {/* <span>{price} €</span> */}
      </div>
      <div className="order">
        <Button
          sx={{
            fontSize: 25,
            marginBottom: 2,
            marginTop: 2,
            color: "black",
            fontWeight: "bold",
            backgroundColor: "#667292",
          }}
          // variant="contained"
          onClick={Push}
        >
          Tilaa tuotteet
        </Button>
      </div>
    </div>
  );
};

export default Cart;
