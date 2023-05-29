import { createContext, useState } from "react";

export const CartContext = createContext({
    cart:[], 
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    isInCart: () => {}

})

export const CartProvider =({ children }) => {
    const [cart, setCart] = useState(['Hola'])

    
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
        console.log(cart)
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.length > 0 && cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart}}>
            { children }
        </CartContext.Provider>
    )
}