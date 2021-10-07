import { createSlice } from '@reduxjs/toolkit';
const initialData = localStorage.getItem("orderInfor");

const initialState = {
    orderInfor: JSON.parse(initialData) || []
}

export const orderSlice = createSlice({
  name: 'orderInfor',
  initialState,
  reducers: {
    
    removeAllOrderInfo : (state, action) => {
        state.orderInfor.slice( ('orderInfor'.length - 1), ('orderInfor'.length)  )
        localStorage.setItem("orderInfor", JSON.stringify(state.orderInfor));

    },
    // Xóa các [] lưu hóa đơn trước đó
    addOrderInfor: (state, action) => {
      state.orderInfor.push(action.payload); 
      localStorage.setItem("orderInfor", JSON.stringify(state.orderInfor));
    },

  },
})

// Action creators are generated for each case reducer function
export const { addOrderInfor, removeAllOrderInfo } = orderSlice.actions

export default orderSlice.reducer;