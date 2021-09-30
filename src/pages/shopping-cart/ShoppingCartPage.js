import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import "./ShoppingCart.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

import Newsletter from "../../newsletter/NewsLetter"
import { DiscountTotalCalculation } from "./DiscountTotalCalculation"

function ShoppingCartPage() {
  // Store prop tạm thời sau thay = redux;
  const [stateProducts, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Tải dữ liệu về 1 lần đầu
  useEffect(() => {
    // Async await
    async function fetchData() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/products`
      );
      const result = await response.json();
      setProducts(result);
      setLoading(false)
    }

    fetchData();
  }, []);

  // Tăng số lượng sp ô input
  function addProductNumber( event, id ) { console.log('Tăng')
  let cloneDataItems = stateProducts.map( (obj) => ( {...obj} ) );

  cloneDataItems.forEach( (item)=> {
      if(item.id === id){
          item.quantity += 1
      }
  });
  console.log('cloneDataItems', cloneDataItems)
  setProducts(cloneDataItems)
  // Truyền obj data mới vào state-truyền snag payment

  }
  // Giảm số lượng sp ô input
  function minusProductNumber( event, id ) { console.log('Giảm')
      let cloneDataItems = stateProducts.map( (obj) => ( {...obj}) );
      cloneDataItems.forEach( ( item) => {
          if ( item.id === id ) {
              item.quantity -= 1
          }
      }) 
      console.log('cloneDataItems', cloneDataItems)
      setProducts(cloneDataItems);

  }
  // Lấy giá trị ô input số lượng item
  function valueInputQuantity( event, id ) {
    let valueQuantity = event.target.value;
    console.log('valueQuantity', valueQuantity)

    let dataItemClone;

    if (valueInputQuantity > 0 && valueInputQuantity <= 100) {
      dataItemClone = stateProducts.map((obj) => ({ ...obj }) );
      dataItemClone.forEach((item) => {
        if (item.id === id) {
          item.quantity = parseInt(valueQuantity);
        }        
      })
    } else {
      return;
    }
    setProducts( dataItemClone )
    console.log('stateProducts[1]', stateProducts[1])
  }

  // Xóa
  function deleteItem(id) {
    let deletedItem = stateProducts.filter( (item) => item.id !== id);
    setProducts( deletedItem )
  }

   // Xóa tất cả các item - phải thông qua thông báo
   function deleteAllItems() { 
    let deleteItem =  [...stateProducts].splice( 1, 0 );
    setProducts( deleteItem )

}

  const cartItemElement = stateProducts.map((cart_item) =>

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

        <i  onClick={ minusProductNumber } className="fas fa-minus" />

        <input onChange={ (event) => valueInputQuantity(event, cart_item.id) }
          value = { cart_item.quantity } 
          
          className="custom-number-input" type="number" />

        <i onClick={ addProductNumber } className="fas fa-plus" />

      </span>

      {/* Thành tiền */}
      <span>{(cart_item.price * cart_item.quantity).toLocaleString()} ₫</span>

      {/* icon thùng rác xóa đơn */}
      <span onClick= { () => deleteItem( cart_item.id ) } 
        className=" delete-one " type="button"> 
        <i className="fas fa-trash-alt " /> 
      </span>

    </div>
  )

  // Cart màn Modile
  const cartItemElementMobile = stateProducts.map((cart_item) => (
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

          <div onClick= { () => deleteItem( cart_item.id ) } > 
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
            
            <i onClick={ minusProductNumber } className="fas fa-minus" />
            
            <input onChange={ (event) => valueInputQuantity(event, cart_item.id) } 
              value={cart_item.quantity} 
              className="custom-number-input-mobile" type="number" />

            <i onClick={ addProductNumber } className="fas fa-plus" />

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
      <main className=" cart-container-background ">
        {/* cart-container Desktop */}
        <section className=" cart-container   container     ">

          <div className="cart-title">
            <span> SẢN PHẨM&nbsp;
              <small className="cart-title-number-items">({stateProducts.length})</small>
            </span>
            <span> TÊN SẢN PHẨM</span>
            <span>ĐƠN GIÁ</span>
            <span>SỐ LƯỢNG</span>
            <span>THÀNH TIỀN</span>
            {/* nhầm */}
            <span style={{ display: 'none' }}> <i className="fas fa-trash-alt" /> </span>
          </div>

          <div className="cart-items">
            {loading
              ? (<div className="loadding_products-list"> Đang tải các sản phẩm, xin chờ... </div>)
              : stateProducts.length === 0 ?
                (<div className="empty-cart-message">Giỏ hàng của bạn đang trống! </div>)
                : (cartItemElement)
            }
          </div>

        </section>
        {/* stateProducts.length */}
        {/* cart-container Desktop */}


        {/* cart-container Mobile*/}
        <div className=" cart-container-mobile   container ">
          {loading
            ? (<div className="loadding_products-list__mobile"> Đang tải các sản phẩm, xin chờ... </div>)
            : stateProducts.length === 0 ?
            (<div className="empty-cart-message__mobile">Giỏ hàng của bạn đang trống! </div>)
            : (cartItemElementMobile)
          }
        </div>
     

        {/* Nút tiếp tục mua hàng và xóa tất cả */}
        <div className=  {` ${ stateProducts.length === 0 ? "justify-content__center" 
          : 'justify-content__space-between' }  cart-button-buy-delete-all   container `} >

          <Link to="/products"> 
            <span className= {` button-buy `}  type="button"> TIẾP TỤC MUA HÀNG </span> 
          </Link>  
          
          <span onClick= { deleteAllItems } 
            className= {` ${ stateProducts.length > 0 ? "d-flex" : 'd-none' } button-delete-all `}  type="button" > XÓA TOÀN BỘ 
          </span>

        </div>

        {/* Khối giảm giá và tính tổng tiền với giảm giá */}
        <DiscountTotalCalculation stateProducts = { stateProducts } />
        {/* Khối giảm giá */}
        {/* Khối Thành tiền */}

      </main>

      {/* Email nhận tin tức mới */}
      <Newsletter />
    </>
  );
}

export default ShoppingCartPage;
