import { createSlice } from '@reduxjs/toolkit';
const initialData = localStorage.getItem("orderInfor");

const initialState = {
  orderInfor: JSON.parse(initialData) || []
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrderInfor: (state, action) => {

      let statusHadItem = false;
      if (state.orderInfor.length > 0) {
        for (let i = 0; i < state.orderInfor.length; i++) {
          // Đã tồn tại trên = 1sp
          state.orderInfor[i].net = action.payload.net;
          state.orderInfor[i].vat = action.payload.vat;
          state.orderInfor[i].discount = action.payload.discount;
          state.orderInfor[i].gross = action.payload.gross;

          statusHadItem = true;
        }
      }
      // Nếu sp chưa có ở cart thì thêm mới vào cart
      if (statusHadItem === false) {
        state.orderInfor.push(action.payload);
      }


      // state.orderInfor.push(action.payload);
      localStorage.setItem("orderInfor", JSON.stringify(state.orderInfor));
    },

  },
})

// Action creators are generated for each case reducer function
export const { addOrderInfor, removeAllOrderInfo } = orderSlice.actions

export default orderSlice.reducer;