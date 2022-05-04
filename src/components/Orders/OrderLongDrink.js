import React, { useState } from 'react'
import { Button } from '@mui/material';

export default function AddToOrder() {

    // const [ buttonText, setButtoneText ] = useState("Lisää tilaukseen")
    const [ counter, setCounter ] = useState(0);
    const [ visible, setVisible ] = useState(false);
    var longDrinkPrice = 5.8;
  
    // function handleClick() {
    //     setButtoneText("Päivitä tilaus")
    // }

    const increase = () => {
      setCounter(count => count + 1);
      setVisible(true);
    }
  
    const decrease = () => {
      if ( counter > 0 ) {
        setCounter(count => count - 1)
        setVisible(false);
      }
    }

    const order = () => {
        longDrinkPrice = longDrinkPrice * counter;
        console.log("Tilasit lonkeroa " + counter + " Hinta: " + longDrinkPrice)
        // setVisible(false);
    }



    return (
        <div>
            <Button onClick={decrease}>-</Button>
            {counter}
            <Button onClick={increase}>+</Button>
            {visible && <Button onClick={order}>Lisää tilaukseen</Button>}
        </div>
    )

}