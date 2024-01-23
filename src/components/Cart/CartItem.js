import classes from "./CartItem.module.css";
import {cartSliceActions}  from "../../Store/CartSlice";
import {useDispatch} from "react-redux";

const CartItem = (props) => {

  const dispatch = useDispatch();
  
  const {title, quantity, price, total, id} = props.item;

  const removeItemHandler = () => {
   dispatch(cartSliceActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
     dispatch(cartSliceActions.addItemToCart({
      id,
      title,
      price
     })
     );
  };

    return (
       <li className={classes.item}>
        <header>
            <h3>{title}</h3>
            <div className={classes.price}>
                 ${total.toFixed(2)}{' '}
                 <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
            </div>
        </header>
        <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
       </li>
    );
};

export default CartItem;