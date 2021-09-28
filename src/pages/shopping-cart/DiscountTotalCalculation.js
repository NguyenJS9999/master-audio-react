import React, {  useEffect } from "react";

export function DiscountTotalCalculation() {

    useEffect(() => {
        console.log("TotalCalculation");
      }, []);
    return (
    <>
      <section className=" order-container    container ">

        {/* Khối giảm giá */}
        <div className="order-discount">
          <h4 className="order__title">MÃ GIẢM GIÁ</h4>
          <div className="discount-wrapper">
            <input className=" discount-input" type="text" placeholder="Nhập mã giảm giá (M10, M20, M30)" />
            {/* <div class="feedback-noti">Mã giảm giá đã hết hạn</div> */}
          </div>
          <button className="section__btn btn-apply-discount">
            ÁP DỤNG MÃ GIẢM GIÁ
          </button>
        </div>

        {/* Khối Thành tiền */}
        <div className=" payment-container  container ">
          <div className=" payment-title "> TỔNG TIỀN </div>
          <div className=" count-money ">
            <span className=" total-money ">
              <b>Tạm tính</b>
              <div className=" total-money-number ">195,600,000 ₫</div>
            </span>
            <div className="border-bottom" />

            {/*  */}
            <span className=" tax-avt ">
              <b>VAT (10%)</b>
              <div>{ ( (195600000/100)*10 ).toLocaleString() } ₫</div>
            </span>
            <div className="border-bottom" />

            {/*  */}
            <span className=" tax-avt ">
              <b>Giảm giá</b>
              <div>- 0₫</div>
            </span>
            <div className="border-bottom" />

            {/*  */}
            <span className="into-money">
              <b>Thành tiền</b>
              <div className="into-money-number">((197,556,000).toLocaleString()) ₫</div>
            </span>
          </div> 

          {/* count-money */}
          <span className=" make-payment ">
            <a className=" make-payment-button    section__btn " href="./check-out.html">
              <i className="fas fa-hand-holding-usd" /> &nbsp;TIẾN HÀNH ĐẶT HÀNG
            </a>
          </span>
        </div> 

        </section>
      </>
    )
}