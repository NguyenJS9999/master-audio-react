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
      // Điều kiện nếu có sp là {} là chính nó bị add thêm thì gộp vào
      let statusHadItem = false;

      // if (  state.listProductCart.length === 0 ) { 
      //   state.listProductCart.push(action.payload);

      // } 

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



      // else {
      //   statusHadItem = false;
      // }

      
      // else if ( state.listProductCart.length > 0  ) {
   
      // }

  

      

      console.log('action.payload', action.payload)
      // state.listProductCart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.listProductCart));
    },

    // setState
    setProducts: (state, action) => {
      state.listProductCart = (action.payload);
      localStorage.setItem("cart", JSON.stringify(state.listProductCart));
    },
  
    removeProduct: (state, action) => {
      localStorage.setItem("cart", JSON.stringify(state.listProductCart));
    },

    removeAllProduct: (state, action) => {
      localStorage.setItem("cart", JSON.stringify(state.listProductCart));
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, setProducts, removeProduct } = cartSlice.actions
// console.log('addProduct', addProduct(1)  )
export default cartSlice.reducer;