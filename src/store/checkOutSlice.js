import { createSlice } from '@reduxjs/toolkit';
const initialData = localStorage.getItem("customerData");

const initialState = {
  inforCustomer: JSON.parse(initialData) || []
}

export const checkOutSlice = createSlice({
  name: 'checkOut',
  initialState,
  reducers: {
  
    addCustomerInfor: (state, action) => {
      // Điều kiện nếu có sp là {} là chính nó bị add thêm thì gộp vào
      // if (action.payload) { } 
      console.log('action', action)
      state.inforCustomer.push(action.payload);
      localStorage.setItem("customerData", JSON.stringify(state.inforCustomer));
    },

  }
})

// Action creators are generated for each case reducer function
export const { addCustomerInfor } = checkOutSlice.actions
export default checkOutSlice.reducer;