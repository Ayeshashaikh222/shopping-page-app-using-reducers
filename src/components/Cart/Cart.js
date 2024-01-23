import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Card from "../UI/Card";
import cartSliceActions from "../../Store/CartSlice";
import { useSelector } from "react-redux";

const Cart = (props) => {
   const cardItems = useSelector(state => state.cart.Items);

   return (
      <Card className={classes.cart}>
         <h2>Your Shopping Cart</h2>
         <ul>
            {cardItems.map(item => (
               <CartItem key={item.id}
                  item={{
                        id: item.id,
                        title: item.name,
                        quantity: item.quantity,
                        total: item.totalPrice,
                        price: item.price
                     }}
               />

            ))}
            {/* <CartItem  item={{title: 'Test Item', quantity: 3, total: 18, price: 15}} /> */}
         </ul>
      </Card>
   );
};

export default Cart;