import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numberItems: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.numberItems += action.payload;
    },
    // decrement: (state) => {
    //     state.numberItems -= 1;
    // },
    removeProduct: () => { },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions  

export default cartSlice.reduce;