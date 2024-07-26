import { createContext, useState } from "react";
import { products } from "../pages/shop/products.js";
 
const ShopContext =  createContext(null)

function getCartItems() {
    let cart = {}
    for(let i = 0; i < products.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState(getCartItems())
     
    function addItemToCart(itemId) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
   
    function removeItemFromCart(itemId) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addItemToCart, removeItemFromCart}
    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}

export {ShopContext,ShopContextProvider} 