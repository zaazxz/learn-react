// Importing from redux toolkit
import * as toolkit from "@reduxjs/toolkit"

// Defining from redux toolkit
const { configureStore, createAction, createReducer } = toolkit

// Creating Initial State
// const initialState = {
//     cart: [],
// }

// Creating Action
const addToCart = createAction("ADD_TO_CART")
const login = createAction("CREATE_SESSION")

// Creating Reducer
const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload)
    })
})

const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true
    })
}) 

// Creating Store
const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer
    }
})

// On Creating Store
console.log("on create store : ", store.getState())

// Subscribe
store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState())
})

// Dispatching Action
store.dispatch(addToCart({ id: 1, qty: 10 }))
store.dispatch(addToCart({ id: 3, qty: 20 }))

store.dispatch(login())