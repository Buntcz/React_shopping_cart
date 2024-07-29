import { useContext } from "react"
import { ShopContext } from "../../Context/shop-context"

function Product({product}) {
    const {cartItems, addItemToCart} = useContext(ShopContext)
    return (
        <div className="productCard">
            <img src={product.productImage} />
            <p>{product.productName}</p>
            <p>{product.productPrice}$</p>
            <button onClick={() => addItemToCart(product.id)}>Add to cart ({cartItems[product.id]})</button>
        </div>
    )
}

export {Product}