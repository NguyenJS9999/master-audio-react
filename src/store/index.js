import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cartSlice";
// import useReducer from "./userSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // user: useReducer,
      },
});
