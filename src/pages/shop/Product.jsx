function Product({product}) {
    return (
        <div className="productCard">
            <p>{product.productName}</p>
            <p>{product.productPrice}</p>
            <img src={product.productImage} />
            <button>Add to cart</button>
        </div>
    )
}

export {Product}