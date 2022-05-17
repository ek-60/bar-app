import React, { useEffect, useState } from "react";
import "./cartStyle.css";
import CloseButton from "../closeButton";
import UserData from "../userData";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

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
    // console.log("Pöydän numero: " + tableNumber);
  };

  const handleName = (event) => {
    const userName = event.target.value;
    setName(userName);
    // console.log("Tilaajan nimi: " + userName);
  };

  const handlePhoneNumber = (event) => {
    const phoneNumber = event.target.value.replace(/\D/g, "");
    setNumber(phoneNumber);
    // console.log("Puhelinnumero: " + phoneNumber);
  };

  const handleOrder = () => {
    const productName = cart.map((item) => item.title);
    const orderAmount = cart.map((item) => item.amount);
    console.log(
      "Pyödän numero: " +
        table +
        " Tilaajan nimi: " +
        name +
        " Puhelinnumero: " +
        number +
        " Tilasi: " +
        productName +
        orderAmount +
        " Hinta: " +
        price
    );
  };

  return (
    <div>
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
                  <span>{item.price}</span>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </article>
        </div>
      </div>
      {/* <UserData /> */}
      <FormControl sx={{ width: 300 }}>
        <InputLabel>Pöydän numero</InputLabel>
        <Select value={table} onChange={handelTable}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ width: 300 }}
        id="name"
        label="Anna nimesi"
        placeholder="Nimi"
        multiline
        value={name}
        onChange={handleName}
        //   variant="standard"
      />
      <TextField
        sx={{ width: 300 }}
        id="phoneNumber"
        label="Anna puhelinnumerosi"
        placeholder="Puhelinnumero"
        multiline
        //   variant="standard"
        value={number}
        onChange={handlePhoneNumber}
      />
      <div className="total">
        <span>Ostoksesi maksavat </span>
        <span>{price} € </span>
      </div>
      <Button onClick={handleOrder}>Tilaa tuotteet</Button>
    </div>
  );
};

export default Cart;
