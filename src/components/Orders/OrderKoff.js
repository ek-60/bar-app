import React, { useState } from 'react'
import { Button } from '@mui/material';

export default function AddToOrder() {

    const [ counter, setCounter ] = useState(0);
    const [ visible, setVisible ] = useState(false);
    const [ hide, setHide ] = useState(true);
    const [ changeOrder, setChangeOrder ] = useState(false);
    const initialText = 'Lisää tilaukseen';
    const [ changeOrderText, setChangeOrderText ] = useState(initialText);
    var koffPrice = 6.2;
    var price;
    
  
    const increase = () => {
      setCounter(count => count + 1)
      price = koffPrice  * counter;
      console.log("Tilaus määrä:" + counter +  " Hinta:" +price)
      setVisible(true);
    }

    const decrease = () => {
      if ( counter > 0 ) {
        setCounter(count => count - 1)
        price = counter  / koffPrice;
        console.log("Tilaus määrä:" + counter +  " Hinta:" +price)
        // console.log(counter)
        setVisible(false);
      }
    }

    const order = () => {
      var price = koffPrice * counter;
      console.log("Tilasit koffia " + counter + " Hinta: " + price);
      // console.log(counter)
      setChangeOrderText('Muuta tilausta');
      setVisible(false);
      setChangeOrder(true);
      // setHide(false);
    }

    const updateOrder = () => {
      setVisible(false);
      // setHide(true);
      setChangeOrder(true);
      setChangeOrderText('Päivitä tilaus')
      order();
      // var price = koffPrice * counter;
      // console.log("Päivitit tilausta koff " + counter + " Hinta: " + price)
    }

    return (
      <div>
          {hide && <Button onClick={decrease}>-</Button>}
          {hide && counter}
          {hide && <Button onClick={increase}>+</Button>}
          {visible && <Button onClick={order}>{changeOrderText}{0}</Button>}
          {changeOrder && <Button onClick={updateOrder}>{changeOrderText}</Button>}
      </div>
    )

}