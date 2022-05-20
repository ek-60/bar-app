import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/pages/main";
import Cart from "./components/pages/cart";
import Header from "./components/header";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(item.title);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <Header setShow={setShow} size={cart.length} />
      {show ? (
        <MainPage handleClick={handleClick} handleChange={handleChange} />
      ) : (
        <Cart
          setShow={setShow}
          cart={cart}
          setCart={setCart}
          handleChange={handleChange}
        />
      )}
    </React.Fragment>
  );
}

export default App;
