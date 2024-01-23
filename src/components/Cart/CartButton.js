import classes from "./CartButton.module.css";
import { uiSliceActions } from "../../Store/uiSlice";
import { useSelector, useDispatch } from "react-redux"

const CartButton = () => {

    const dispatch = useDispatch();

    const cardQuantity = useSelector(state => state.cart.totalQuantity);

    const toggleCartHandler = () => {

        dispatch(uiSliceActions.toggle());
    };


    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cardQuantity}</span>
        </button>
    );
};

export default CartButton;