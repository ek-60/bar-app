import React, { useState, useEffect } from "react";
import BasicButtonGroup from "./components/buttonGroup";
import Cart from "./components/cart";
import Header from "./components/header.js";
import ShowData from "./components/showData";

function App() {
  // const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    // console.log(item);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <div className="App">
      <Header size={cart.length} />
      {/* {show ? (
        // <BasicButtonGroup handleClick={handleClick} />
        <ShowData handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )} */}
      <ShowData handleClick={handleClick} handleChange={handleChange} />
    </div>
  );
}

export default App;
