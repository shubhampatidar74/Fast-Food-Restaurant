import React, { useState } from "react";
import { CardContext } from "./CardContext";
import { useEffect } from "react";
function CardContextProvider({ children }) {

  
  const [cart, setCart] = useState([]);
  
  let [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const existingData =
      JSON.parse(localStorage.getItem("selectedCards")) || [];
    setCart(existingData);
  }, []);

  

 
  const dataSaveLocal = (item) => {
    const existingData = [...cart];
    existingData.push(item);
    setCart(existingData);
    localStorage.setItem("selectedCards", JSON.stringify(existingData));
  };

  const removeItem = (id) => {
    const index = cart.findIndex((item) => item.item.id === id);
    if (index !== -1) {
      const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
      setCart(updatedCart);
      localStorage.setItem("selectedCards", JSON.stringify(updatedCart));
    }
  };

  useEffect(() => {
    let totalPrice=0
    cart.forEach(element => {
      totalPrice += element.item.price
    });
    setTotalPrice(totalPrice);
  }, [cart,setCart]);

 

  


 

  return (
    <CardContext.Provider value={{ cart, setCart, dataSaveLocal,setTotalPrice,totalPrice, removeItem,totalPrice}}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
