import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/cartSlice"

import "./ShoppingCart.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

import Newsletter from "../../newsletter/NewsLetter"
import { DiscountTotalCalculation } from "./DiscountTotalCalculation"



function ShoppingCartPage() {
  // Lỗi... ?
  const shoppingList = useSelector((state) => state.cart.listProductCart);
  // Redux gửi data lên store
  const dispatch = useDispatch();

  // Tăng số lượng sp ô input
  function addProductNumber(quantity, id) {
    let cloneDataItems
    if (quantity < 100) {
      cloneDataItems = shoppingList.map((obj) => ({ ...obj }));
      cloneDataItems.forEach((item) => {
        if (item.id === id) {
          item.quantity += 1
        }
      })
    } else {
      return
    }
    dispatch(setProducts(cloneDataItems));
  }
  // Giảm số lượng sp ô input
  function minusProductNumber(quantity, id) {
    let cloneDataItems
    if (quantity > 1) {
      cloneDataItems = shoppingList.map((obj) => ({ ...obj }));
      cloneDataItems.forEach((item) => {
        if (item.id === id) {
          item.quantity -= 1
        }
      })
    } else {
      return
    }
    dispatch(setProducts(cloneDataItems))
  }
  // Lấy giá trị ô input số lượng item
  function getValueInputQuantity(event, id) {
    let valueQuantity = event.target.value;
    let cloneDataItems;

    if (valueQuantity > 0 && valueQuantity <= 100) {
      cloneDataItems = shoppingList.map((obj) => ({ ...obj }));
      cloneDataItems.forEach((item) => {
        if (item.id === id) {
          item.quantity = parseInt(valueQuantity);
        }
      })
    } else {
      return;
    }
    dispatch(setProducts(cloneDataItems))
  }

  // Xóa
  function deleteItem(id) {
    let deletedItem = shoppingList.filter((item) => item.id !== id);
    dispatch(setProducts(deletedItem))
    // setProducts(deletedItem)
  }

  // Xóa tất cả các item - phải thông qua thông báo
  function deleteAllItems() {
    let deleteItem = [...shoppingList].splice(1, 0);
    dispatch(setProducts(deleteItem))
    // setProducts(deleteItem)

  }
  // Cart màn Desktop
  const cartItemElement = shoppingList.map((cart_item) =>
    <div key={cart_item.id} className="cart-item">

      {/* Ảnh sản phẩm */}
      <span className=" cart-item-product-image ">
        <Link to={`/product-detail/${cart_item.slug}/${cart_item.id}`}>
          <img src={cart_item.image} alt="cartImage" />
        </Link>
      </span>

      {/* Tên sản phẩm */}
      <span>{cart_item.brand} {cart_item.name}</span>
      {/* Đơn giá */}
      <span>{cart_item.price.toLocaleString()} ₫</span>

      {/* Chỉnh số lượng sp */}
      <span className="custom-number">

        <i onClick={() => minusProductNumber(cart_item.quantity, cart_item.id)} className="fas fa-minus" />

        <input onChange={(event) => getValueInputQuantity(event, cart_item.id)}
          value={cart_item.quantity}
          className="custom-number-input" type="number" />

        <i onClick={() => addProductNumber(cart_item.quantity, cart_item.id)} className="fas fa-plus" />

      </span>

      {/* Thành tiền */}
      <span>{(cart_item.price * cart_item.quantity).toLocaleString()} ₫</span>

      {/* icon thùng rác xóa đơn */}
      <span onClick={() => deleteItem(cart_item.id)}
        className=" delete-one " type="button">
        <i className="fas fa-trash-alt " />
      </span>

    </div>
  )

  // Cart màn Modile
  const cartItemElementMobile = shoppingList.map((cart_item) => (
    <div key={cart_item.id} className=" cart-item-mobile ">
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

          <div onClick={() => deleteItem(cart_item.id)} >
            <i className="fas fa-trash-alt  delete-one " />
          </div>

        </span>
        {/* 2 */}
        <span className="unit-price">
          <div className="col-name">ĐƠN GIÁ</div>
          <div className="col-value">{cart_item.price.toLocaleString()} đ</div>
        </span>
        {/* 3 */}
        <span className="pro-quantity">
          <div className="col-name">SỐ LƯỢNG</div>
          {/* Chỉnh số lượng sp */}
          <div className="custom-number-mobile">

            <i onClick={() => minusProductNumber(cart_item.quantity, cart_item.id)} className="fas fa-minus" />

            <input onChange={(event) => getValueInputQuantity(event, cart_item.id)}
              value={cart_item.quantity}

              className="custom-number-input-mobile" type="number" />

            <i onClick={() => addProductNumber(cart_item.quantity, cart_item.id)} className="fas fa-plus" />

          </div>
        </span>
        {/* 4 */}
        <span>
          <div className="col-name">THÀNH TIỀN</div>
          <div>{(cart_item.price * cart_item.quantity).toLocaleString()} ₫</div>
        </span>

      </div>
    </div>
  ));

  return (
    <>
      {/* breadcrumb */}
      <div className="page-banner     container-fluid ">
        <div className=" page-banner__content ">
          <div className=" breadcrumb-title ">GIỎ HÀNG CỦA BẠN</div>

          <div className="page-banner__hr-line" />

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="./index.html">TRANG CHỦ</a></li>
              <li className="breadcrumb-item" aria-current="page">GIỎ HÀNG</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* breadcrumb */}

      <main className=" cart-container-background ">
        {/* cart-container Desktop */}
        <section className=" cart-container   container     ">

          <div className="cart-title">
            <span> SẢN PHẨM&nbsp;
              <small className="cart-title-number-items">({shoppingList.length})</small>
            </span>
            <span> TÊN SẢN PHẨM</span>
            <span>ĐƠN GIÁ</span>
            <span>SỐ LƯỢNG</span>
            <span>THÀNH TIỀN</span>
            {/* nhầm */}
            <span style={{ display: 'none' }}> <i className="fas fa-trash-alt" /> </span>
          </div>

          <div className="cart-items">
            {
              // loading ?
              // (<div className="loadding_products-list"> Đang tải các sản phẩm, xin chờ... </div>) :
              shoppingList.length === 0 ?
                (<div className="empty-cart-message">Giỏ hàng của bạn đang trống! </div>) :
                (cartItemElement)
            }
          </div>

        </section>
        {/* stateProducts.length */}
        {/* cart-container Desktop */}


        {/* cart-container Mobile*/}
        <div className=" cart-container-mobile   container ">
          {
            // loading
            // ? (<div className="loadding_products-list__mobile"> Đang tải các sản phẩm, xin chờ... </div>) : 
            shoppingList.length === 0 ?
              (<div className="empty-cart-message__mobile">Giỏ hàng của bạn đang trống! </div>) :
              (cartItemElementMobile)
          }
        </div>


        {/* Nút tiếp tục mua hàng và xóa tất cả */}
        <div className={` ${shoppingList.length === 0 ? "justify-content__center"
          : 'justify-content__space-between'}  cart-button-buy-delete-all   container `} >

          <Link to="/products">
            <span className={` button-buy `} type="button"> TIẾP TỤC MUA HÀNG </span>
          </Link>

          <span onClick={deleteAllItems}
            className={` ${shoppingList.length > 0 ? "d-flex" : 'd-none'} button-delete-all `} type="button" > XÓA TOÀN BỘ
          </span>

        </div>

        {/* Khối giảm giá và tính tổng tiền với giảm giá */}
        <DiscountTotalCalculation stateProducts={shoppingList} />
        {/* Khối giảm giá */}
        {/* Khối Thành tiền */}

      </main>

      {/* Email nhận tin tức mới */}
      <Newsletter />
    </>
  );
}

export default ShoppingCartPage;
