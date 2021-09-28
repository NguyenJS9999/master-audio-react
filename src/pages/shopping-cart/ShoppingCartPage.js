import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";


import "./ShoppingCart.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

import { DiscountTotalCalculation } from "./DiscountTotalCalculation"

function ShoppingCartPage() {
  // Store prop tạm thời sau thay = redux;
  const [stateProducts, setProducts] = useState([]);


  // Tải dữ liệu về 1 lần đầu
  useEffect(() => {
    // Async await
    async function fetchData() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/products`
      );
      const result = await response.json();
      setProducts(result);
    }

    fetchData();
  }, []);


  const cartItemElement = stateProducts.map( (cart_item ) => 

  <div className="cart-item">
    {/* Ảnh sản phẩm */}
    <span className=" cart-item-product-image ">
      <Link to={`/product-detail/${cart_item.slug}/${cart_item.id}`}>
        <img src= {cart_item.image} alt="cartImage" />
      </Link>
    </span>
    {/* Tên sản phẩm */}
    <span>{cart_item.brand} {cart_item.name}</span>
    {/* Đơn giá */}
    <span>{cart_item.price.toLocaleString() } ₫</span>
    {/* Chỉnh số lượng sp */}
    <span className="custom-number">
      <i className="fas fa-minus" />
      <input className="custom-number-input" type="number" defaultValue={cart_item.quantity} />
      <i className="fas fa-plus" />
    </span>
    {/* Thành tiền */}
    <span>{ (cart_item.price * cart_item.quantity).toLocaleString() } ₫</span>
    {/* icon thùng rác xóa đơn */}
    <span className=" delete-one " type="button" onclick="deleteOneItem()"> <i className="fas fa-trash-alt " /> </span>
  </div> 
  )

  const cartItemElementMobile = stateProducts.map( (cart_item) => (
    <div className=" cart-item-mobile ">
    {/* Khối ảnh Trái */}
    <div className=" cart-item-pro-img-mobile ">
      <Link to={`/product-detail/${cart_item.slug}/${cart_item.id}`}>
        <img src={cart_item.image} alt="cartImage" />
      </Link>
    </div>
    
    {/* Khối thông tin bên phải */}
    <div className=" cart-title-product-cols-mobile ">
      {/* 1 */}
      <span className=" pro-name-mobile-flex ">
      {cart_item.brand} {cart_item.name}
        <div> <i className="fas fa-trash-alt  delete-one " /> </div>
      </span>
      {/* 2 */}
      <span className="unit-price">
        <div className="col-name">ĐƠN GIÁ</div>
        <div className="col-value">{cart_item.price.toLocaleString() } đ</div>
      </span>
      {/* 3 */}
      <span className="pro-quantity">
        <div className="col-name">SỐ LƯỢNG</div>
        {/* Chỉnh số lượng sp */}
        <div className="custom-number-mobile">
          <i className="fas fa-minus" />
          <input className="custom-number-input-mobile" type="number" defaultValue={cart_item.quantity} />
          <i className="fas fa-plus" />
        </div>
      </span>
      {/* 4 */}
      <span>
        <div className="col-name">THÀNH TIỀN</div>
        <div>{ (cart_item.price * cart_item.quantity).toLocaleString() } ₫</div>
      </span>
    </div>
  </div>
  ) );

  return (
    <>
      <main className=" cart-container-background ">
        {/* cart-container Desktop */}
        <section className=" cart-container   container     ">

          <div className="cart-title">
            <span> SẢN PHẨM&nbsp;
              <small className="cart-title-number-items">({ stateProducts.length })</small>
            </span>
            <span> TÊN SẢN PHẨM</span>
            <span>ĐƠN GIÁ</span>
            <span>SỐ LƯỢNG</span>
            <span>THÀNH TIỀN</span>
            {/* nhầm */}
            <span style={{display: 'none'}}> <i className="fas fa-trash-alt" /> </span>
          </div>

          <div className="cart-items">

            {/* 1 */}
            {/* 2 */}
            {/* 3 */}
            { cartItemElement }

          </div>
          {/* cart-items */}
        </section> 
        {/* cart-container Desktop */}


        {/* cart-container Mobile*/}
        <section className=" cart-container-mobile   container ">
          {/* item 1 */}
          {/* item 2 */}
          {/* item 3 */}
          { cartItemElementMobile }
        </section>
        {/* cart-container Mobile */}

        {/* Nút tiếp tục mua hàng và xóa tất cả */}
        <div className=" cart-button-buy-delete-all   container ">
          <Link to="./product.html"> <span className="button-buy" type="button"> TIẾP TỤC MUA HÀNG </span> </Link>
          <span className="button-delete-all" type="button" onclick="deleteAllItem()"> XÓA TOÀN BỘ </span>
        </div>

        {/* Khối giảm giá và tính tổng tiền với giảm giá */}
        <DiscountTotalCalculation />
        {/* Khối giảm giá */}
        {/* Khối Thành tiền */}
          



      </main>

    </>
  );
}

export default ShoppingCartPage;
