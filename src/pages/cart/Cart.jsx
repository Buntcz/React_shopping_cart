import { CartItemCard } from "./CartItemCard"
import { useContext } from "react"
import { ShopContext } from "../../Context/shop-context"
import { products } from "../shop/products"

function Cart() {
   const {cartItems, getTotalAmount} = useContext(ShopContext)
   let total = getTotalAmount();
   return (
    <div className="cart">
      <div className="header">
         <h1>Your Cart:</h1>
      </div>
      <div className="cartInventory">
         {products.map(product => {
            if (cartItems[product.id] !== 0) {
               return (
                  <CartItemCard key={product.id} item={product} />
               )
            }
         })}
      </div>
      <div className="total">
         <p>subtotal: {total}</p>
      </div>
      <div className="buttonsForCart">
         <button className="continueShopping">Continue Shopping</button>
         <button className="checkout">Checkout</button>
      </div>
    </div>
   )
}

export {Cart}