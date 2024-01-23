import './App.css';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Cart from './components/Cart/Cart';
import { uiSliceActions } from "./Store/uiSlice";
import Notification from "./components/UI/Notification";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

let isInitial = true;
function App() {

  const dispatch = useDispatch();

  const showCart = useSelector(state => state.ui.cartIsVisible);

  const cart = useSelector((state) => state.cart);

  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiSliceActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "Sending cart data",

      }));

      try {
        const response = await fetch("https://cart-data-fb13c-default-rtdb.firebaseio.com/cart.json", {
          method: "PUT",
          body: JSON.stringify(cart),
        });

        if (!response.ok) {
          throw new Error("Sending cart data failed");
        }
        
        dispatch(uiSliceActions.showNotification({
          status: "success",
          title: "success...",
          message: "sending cart data successfully",
        }));


        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        dispatch(
          uiSliceActions.showNotification({
            status: "error",
            title: "Error...",
            message: "Sending cart data failed",
          })
        );
      }
    };

    if (isInitial) {
      isInitial = false;
      return;
    }


    sendCartData();

  }, [cart, dispatch]);


  return (
    <Layout>
      {notification && (
        <Notification status={notification.status} 
        title={notification.title} 
        message={notification.message} />
      )}
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
