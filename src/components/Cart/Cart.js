import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Card from "../UI/Card";

const Cart = (props) => {
   return (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
            <CartItem  item={{title: 'Test Item', quantity: 3, total: 18, price: 15}} />
        </ul>
      </Card>
   );
};

export default Cart;