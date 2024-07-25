function Product({product}) {
    return (
        <div className="productCard">
            <img src={product.productImage} />
            <p>{product.productName}</p>
            <p>{product.productPrice}$</p>
            <button>Add to cart</button>
        </div>
    )
}

export {Product}