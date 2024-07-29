import { useContext } from "react"
import { ShopContext } from "../../Context/shop-context"

function CartItemCard({item}) {
    const {cartItems, addItemToCart, removeItemFromCart} = useContext(ShopContext)
    return (
    <div className="cartItemCard">
        <div className="addAndRemoveSection">
            <button onClick={() => addItemToCart(item.id)}>+</button>
            <input type='text' value={cartItems[item.id]} />
            <button onClick={() => removeItemFromCart(item.id)}>-</button>
        </div>
        <img src={item.productImage} />
        <h3>{cartItems[item.id] > 1 ? item.productName + ' x' + cartItems[item.id] : item.productName}</h3>
        <p>total: ${item.productPrice * cartItems[item.id]}</p>
    </div>
    )
}

export {CartItemCard}