//import { plantList } from '../datas/plantList';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../asserts/logo.png'
import QuestionForm from './QuestionForm';
function App() {
  return (
    <div>
    <Banner>
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className='lmj-title'>La maison jungle</h1>
    </Banner>
    <Cart/>
    <ShoppingList/>
    <QuestionForm/>
    </div>
  );
}

export default App;
