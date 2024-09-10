import * as toolkit from "@reduxjs/toolkit"

// Defining from redux toolkit
const { configureStore, createSlice } = toolkit

// Createing Slice
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        }
    }
})

// Creating Store
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

// On Creating Store
console.log("on create store : ", store.getState());

// Subscribe
store.subscribe(() => {
    console.log("on subscribe : ", store.getState());
});

// Dispatch
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 20 }));