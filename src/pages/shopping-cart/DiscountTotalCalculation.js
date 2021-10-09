import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { addOrderInfor } from "../../store/orderInforSlice"
// import { removeAllOrderInfo } from "../../store/orderInforSlice"

export function DiscountTotalCalculation({ stateProducts }) {
  const [stateNetMoney, setNetMoney] = useState(0);
  // Giá trị ô nhập Discount
  const [stateDiscountValue, setDiscountValue] = useState(null)
  const [stateNumDiscountValue, setNumDiscountValue] = useState(0)
  // .toLocaleString()
  let VAT = Math.round((stateNetMoney / 100) * 10);
  let numDiscountValue = stateNumDiscountValue;
  let grossMoney = (stateNetMoney + VAT - numDiscountValue);
  // Redux gửi đi
  const dispatch = useDispatch();
  // Mảng thông tin đơn hàng - gửi đi
  let moneyInfor = {
    net: stateNetMoney,
    vat: VAT,
    discount: numDiscountValue,
    gross: grossMoney
  };

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < stateProducts.length; i++) {
      sum += (stateProducts[i].price * stateProducts[i].quantity)
    }
    setNetMoney(sum)

  }, [setNetMoney, stateProducts]);

  function getValueDiscountInput(event) {
    setDiscountValue(event.target.value)
  }

  //  Thay đổi thảng state trong if else?
  function applyDiscountCode() {
    if (stateDiscountValue === "M10") {
      setNumDiscountValue(Math.round((stateNetMoney / 100) * 10))
    }
    else if (stateDiscountValue === "M20") {
      setNumDiscountValue(Math.round((stateNetMoney / 100) * 20))
    }
    else if (stateDiscountValue === "M30") {
      setNumDiscountValue(Math.round((stateNetMoney / 100) * 30))
    }
    else {
      setNumDiscountValue(0)
    }
  }

  return (
    <>
      <section className=" order-container    container ">

        {/* Khối giảm giá */}
        <div className="order-discount">
          <h4 className="order__title">MÃ GIẢM GIÁ</h4>

          <div className="discount-wrapper">
            <input onChange={(event) => getValueDiscountInput(event)}
              className=" discount-input" type="text" placeholder="Nhập mã giảm giá (M10, M20, M30)" />
            {/* Thêm biến thông báo css và chữ */}
            <div className="feedback-noti">Mã giảm giá không hợp lệ</div>
          </div>

          <button onClick={applyDiscountCode}
            className="section__btn btn-apply-discount">  ÁP DỤNG MÃ GIẢM GIÁ   </button>

        </div>

        {/* Khối Thành tiền */}
        <div className=" payment-container  container ">
          <div className=" payment-title "> TỔNG TIỀN </div>
          <div className=" count-money ">
            <span className=" total-money ">
              <b>Tạm tính</b>
              <div className=" total-money-number ">{stateNetMoney.toLocaleString()} ₫</div>
            </span>
            <div className="border-bottom" />

            {/*  */}
            <span className=" tax-avt ">
              <b>VAT (10%)</b>
              <div>{VAT.toLocaleString()} ₫</div>
            </span>
            <div className="border-bottom" />

            {/*  */}
            <span className=" tax-avt ">
              <b>Giảm giá</b>
              <div>- {numDiscountValue.toLocaleString()} ₫</div>
            </span>
            <div className="border-bottom" />

            {/*  */}
            <span className="into-money">
              <b>Thành tiền</b>
              <div className="into-money-number">{grossMoney.toLocaleString()} ₫</div>
            </span>

          </div>

          {/* count-money */}
          <span className=" make-payment ">
            {stateNetMoney > 0 ?
              <Link to="/check-out" onClick={() => dispatch(addOrderInfor(moneyInfor))}
                className=" make-payment-button    section__btn " >

                <i className="fas fa-hand-holding-usd" /> &nbsp;TIẾN HÀNH ĐẶT HÀNG
              </Link> 
              :
              <div className=" cursor__not-allowed  make-payment-button    section__btn " >
                <i className="fas fa-hand-holding-usd" /> &nbsp;TIẾN HÀNH ĐẶT HÀNG
              </div>
            }




          </span>
        </div>

      </section>
    </>
  )
}

