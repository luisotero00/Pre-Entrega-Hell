import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  isInCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      setTotalQuantity((prev) => prev + quantity);
    } else {
      console.error("El producto ya fue agregado");
    }
    console.log(cart);
  };

  const removeItem = (itemId) => {
    const cartRemoved = cart.filter((prod) => prod.id !== itemId);
    const cartUpdated = cart.find((prod) => prod.id === itemId);

    setCart(cartRemoved);
    setTotalQuantity((prev) => prev - cartUpdated.quantity);
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
  };

  const isInCart = (itemId) => {
    return cart.length > 0 && cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, totalQuantity, addItem, removeItem, clearCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
