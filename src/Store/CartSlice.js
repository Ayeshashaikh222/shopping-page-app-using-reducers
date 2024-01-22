import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        Items: [],
        totalAmount: 0,
    },
    reducers: {
       addItemToCart (state, action) {
         const newitem = action.payload;
         const existingitem = state.Items.find((item) => item.id === item.id);
         if(!existingitem){
            state.Items.push({
                itemId: newitem.id,
                name: newitem.title,
                price: newitem.price,
                quantity: newitem.quantity,
                totalPrice: newitem.price,

            });
         } else {
            existingitem.quantity++;
            existingitem.totalPrice = existingitem.totalPrice + newitem.price;
         }

       },

       removeItemFromCart () {},

    }
})

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
