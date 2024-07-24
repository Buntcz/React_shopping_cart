import { products } from "./products"
import { Product } from "./Product"

function Shop() {
    return (
        <div className="container">
            <h1 className="shopTitle">Random tech shop</h1>
            <div className="products">
                {products.map(item => {
                    return (
                        <Product key={item.id} product={item} />
                    )
                })}
            </div>
        </div>
    )
}

export {Shop}