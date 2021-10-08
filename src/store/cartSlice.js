import { createSlice } from '@reduxjs/toolkit';
const initialData = localStorage.getItem("cart");

const initialState = {
  listProductCart: JSON.parse(initialData) || []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  
    addProduct: (state, action) => {
      let statusHadItem = false;
      for ( let i = 0; i < state.listProductCart.length; i++) {
        // Có tồn tại
        if ( state.listProductCart[i].id === action.payload.id ) {
          state.listProductCart[i].quantity += action.payload.quantity;
          statusHadItem = true;
          break;
        }      
      }
      // Nếu sp chưa có ở cart thì thêm mới vào cart
      if ( statusHadItem === false ) {
        state.listProductCart.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.listProductCart));
    },
    // setState + - Del
    setProducts: (state, action) => {
      state.listProductCart = (action.payload);
      localStorage.setItem("cart", JSON.stringify(state.listProductCart));
    },
    removeProduct: (state, action) => {
      localStorage.setItem("cart", JSON.stringify(state.listProductCart));
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, setProducts, removeProduct } = cartSlice.actions
// console.log('addProduct', addProduct(1)  )
export default cartSlice.reducer;