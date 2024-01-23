import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { UseSelector, useSelector } from 'react-redux';
import Products from './components/Shop/Products';
import Cart from './components/Cart/Cart';
function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
