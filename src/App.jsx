import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
      <Router>

     <Routes>
      <Route path="/" />
      <Route path="/cart" />
     </Routes>

      </Router>
    </div>
  )
}