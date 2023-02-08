import React, { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, itemToAdd, itemCount) => {
  let existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  )
  
  if(existingCartItem) {
    return cartItems.map((cartItem) => 
      cartItem.id === itemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + (typeof itemCount === 'number' ? itemCount :  + 1)}
        : cartItem
    )
  }
  return [...cartItems, {...itemToAdd, quantity: (typeof itemCount === 'number' ? itemCount : 1)}];
}

const removeCartItem = (cartItems, itemToRemove) => {
  let existingCartItem = cartItems.find(
    (cartItem) => (cartItem.id === itemToRemove.id)
  )
  if(existingCartItem.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)
  }
  return cartItems.map((cartItem) => 
    cartItem.id === itemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
  )
}

const clearCartItem = (cartItems, itemToClear) => {
  let existingCartItem = cartItems.find(
    (cartItem) => (cartItem.id === itemToClear.id)
  )
  if(existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id)
  }
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);


  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + (cartItem.price * cartItem.quantity)
    }, 0);
    setCartTotal(newCartTotal)
  }, [cartItems]);

  const addItemToCart = (itemToAdd, itemCount) => {
    setCartItems(addCartItem(cartItems, itemToAdd, itemCount));
  }

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  }

  const clearItemFromCart = (itemToClear) => {
    setCartItems(clearCartItem(cartItems, itemToClear));
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}