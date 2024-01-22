import {configureStore} from "@reduxjs/toolkit";
import cartSliceReducer from "./CartSlice";
import uiSliceReducer from "./uiSlice";


const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        ui: uiSliceReducer
    }
})


export default store;