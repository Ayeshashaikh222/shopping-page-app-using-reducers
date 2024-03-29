import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        Items: [],
        totalQuantity: 0,
        totalAmount: 0,
        changed: false,
    },
    reducers: {
        replaceCart (state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.Items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newitem = action.payload;
            const existingitem = state.Items.find((item) => item.id === newitem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingitem) {
                state.Items.push({
                    id: newitem.id,
                    name: newitem.title,
                    price: newitem.price,
                    quantity: 1,
                    totalPrice: newitem.price,

                });
            } else {
                existingitem.quantity++;
                existingitem.totalPrice = existingitem.totalPrice + newitem.price;
            }

        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingitem = state.Items.find(item => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingitem.quantity === 1) {
                state.Items = state.Items.filter(item => item.id !== id);
            } else {
                existingitem.quantity--;
                existingitem.totalPrice = existingitem.totalPrice - existingitem.price;
            }
        },

    }
})

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
