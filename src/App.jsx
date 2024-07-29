import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { Cart } from './pages/cart/Cart'
import { Shop } from './pages/shop/Shop'
import { ShopContextProvider } from './Context/shop-context'

export default function App() {
  return (
    <ShopContextProvider>
    <div className='App'>
      <Router>
     <NavBar />
     <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<Cart />}/>
     </Routes>

      </Router>
    </div>
    </ShopContextProvider>
  )
}