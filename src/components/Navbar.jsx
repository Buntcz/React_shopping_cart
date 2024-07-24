import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="navbar">
   <Link className="linkShop" to={'/'}>Shop</Link>
   <Link className="linkCart" to={'/cart'}>Cart</Link>
   </div>
    )
}

export {NavBar}