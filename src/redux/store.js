import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlices";

// Config the Store
const store = configureStore({
    reducer: { cart: cartReducer },
})

// checking on create store
console.log("ON CREATE STORE : ", store.getState());

// Subscribe
store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});

// Export
export default store