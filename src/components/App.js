//import { plantList } from '../datas/plantList';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../asserts/logo.png'
import Footer from './Footer';
import { useState } from 'react'
import "../styles/App.css"
function App() {
  const [cart, updateCart] = useState([])
  
  return (
      <div>
          <Banner>
              <img src={logo} alt='La maison jungle' className='lmj-logo' />
              <h1 className='lmj-title'>La maison jungle</h1>
          </Banner>
          <div className='lmj-layout-inner'>
              <Cart cart={cart} updateCart={updateCart} />
              <ShoppingList cart={cart} updateCart={updateCart} />
          </div>
          <Footer />
      </div>
  )
}

export default App;
