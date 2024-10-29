import React, { useState } from 'react'
// import img from '../assets/nature.jpg'
import CartContext from './CartContext'

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  
  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }     
      return [...prevCart, { ...shoe, quantity: 1 }];
    });
  }

  const addMore = (shoeId) => {
    setCart((prevCart) => prevCart.map((item) => item.id === shoeId ? {...item, quantity: item.quantity + 1} : item)
    .filter((item) => item.quantity > 0)
  )
  }
  
  const removeFromCart = (shoeId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
    

  return (
    <CartContext.Provider value={{cart, setCart, addToCart, addMore, removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider