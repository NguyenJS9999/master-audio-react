import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cartSlice";
import useReducer from "./userSlice"
import orderInforReducer from "./orderInforSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: useReducer,
        order: orderInforReducer 
      },
});
