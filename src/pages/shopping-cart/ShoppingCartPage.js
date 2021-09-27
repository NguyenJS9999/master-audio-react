import { useEffect } from "react";
import { Link } from "react-router-dom";


import "./ShoppingCart.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

import { DiscountTotalCalculation } from "./DiscountTotalCalculation"

function ShoppingCartPage() {
  useEffect(() => {
    console.log("ShoppingCartPage");
  }, []);
  return (
    <>
      <main className=" cart-container-background ">
        {/* cart-container Desktop */}
        <section className=" cart-container   container     ">
          <div className="cart-title">
            <span> SẢN PHẨM&nbsp;<span className="cart-title-number-items"><small>(3)</small></span> </span>
            <span> TÊN SẢN PHẨM</span>
            <span>ĐƠN GIÁ</span>
            <span>SỐ LƯỢNG</span>
            <span>THÀNH TIỀN</span>
            {/* nhầm */}
            <span style={{display: 'none'}}> <i className="fas fa-trash-alt" /> </span>
          </div>
          <div className="cart-items">
            {/* 1 */}
            <div className="cart-item">
              {/* Ảnh sản phẩm */}
              <span className=" cart-item-product-image ">
                <Link to="/product-detail">
                  <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/PCS-318NB-01.png" alt="cartImage" />
                </Link>
              </span>
              {/* Tên sản phẩm */}
              <span><Link to="/product-detail">PCS 318NB</Link></span>
              {/* Đơn giá */}
              <span>65.200.000₫</span>
              {/* Chỉnh số lượng sp */}
              <span className="custom-number">
                <i className="fas fa-minus" />
                <input className="custom-number-input" type="text" defaultValue={1} />
                <i className="fas fa-plus" />
              </span>
              {/* Thành tiền */}
              <span>65.200.000₫</span>
              {/* icon thùng rác xóa đơn */}
              <span className=" delete-one " type="button" onclick="deleteOneItem()"> <i className="fas fa-trash-alt " /> </span>
            </div> {/* cart-item */}
            {/* 2 */}
            <div className="cart-item">
              {/* Ảnh sản phẩm */}
              <span className=" cart-item-product-image ">
                <Link to="/product-detail">
                  <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/nexo-ls18.jpg" alt="cartImage" />
                </Link>
              </span>
              {/* Tên sản phẩm */}
              <span><Link to="/product-detail">LS 18</Link></span>
              {/* Đơn giá */}
              <span>89,612,600₫</span>
              {/* Chỉnh số lượng sp */}
              <span className="custom-number">
                <i className="fas fa-minus" />
                <input className="custom-number-input" type="text" defaultValue={2} />
                <i className="fas fa-plus" />
              </span>
              {/* Thành tiền */}
              <span>179,225,200đ</span>
              {/* icon thùng rác xóa ₫ơn */}
              <span className=" delete-one " type="button" onclick="deleteOneItem()"> <i className="fas fa-trash-alt " /> </span>
            </div> {/* cart-item */}
            {/* 3 */}
            <div className="cart-item">
              {/* Ảnh sản phẩm */}
              <span className=" cart-item-product-image ">
                <Link to="/product-detail">
                  <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/amate-X218WF.png" alt="cartImage" />
                </Link>
              </span>
              {/* Tên sản phẩm */}
              <span><Link to="/product-detail">X218WF</Link></span>
              {/* Đơn giá */}
              <span>189,200,000đ</span>
              {/* Chỉnh số lượng sp */}
              <span className="custom-number">
                <i className="fas fa-minus" />
                <input className="custom-number-input" type="text" defaultValue={3} />
                <i className="fas fa-plus" />
              </span>
              {/* Thành tiền */}
              <span>567,000,000đ</span>
              {/* icon thùng rác xóa đơn */}
              <span className=" delete-one " type="button" onclick="deleteOneItem()">
                <i className="fas fa-trash-alt " />
              </span>
            </div> {/* cart-item */}
          </div>
          {/* cart-items */}
        </section> {/* cart-container Desktop */}
        {/* cart-container Mobile*/}
        <section className=" cart-container-mobile   container ">
          {/* item 1 */}
          <div className=" cart-item-mobile ">
            {/* Khối ảnh Trái */}
            <div className=" cart-item-pro-img-mobile ">
              <Link to="/product-detail">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/PCS-318NB-01.png" alt="cartImage" />
              </Link>
            </div>
            {/* Khối thông tin bên phải */}
            <div className=" cart-title-product-cols-mobile ">
              {/* 1 */}
              <span className=" pro-name-mobile-flex ">
                <Link to="/product-detail">PCS 318NB</Link>
                <div> <i className="fas fa-trash-alt  delete-one " /> </div>
              </span>
              {/* 2 */}
              <span className="unit-price">
                <div className="col-name">ĐƠN GIÁ</div>
                <div className="col-value">65.200.000đ</div>
              </span>
              {/* 3 */}
              <span className="pro-quantity">
                <div className="col-name">SỐ LƯỢNG</div>
                {/* Chỉnh số lượng sp */}
                <div className="custom-number-mobile">
                  <i className="fas fa-minus" />
                  <input className="custom-number-input-mobile" type="text" defaultValue={1} />
                  <i className="fas fa-plus" />
                </div>
              </span>
              {/* 4 */}
              <span>
                <div className="col-name">THÀNH TIỀN</div>
                <div>65.200.000đ</div>
              </span>
            </div>
          </div>
          {/* item 2 */}
          <div className=" cart-item-mobile ">
            {/* Khối ảnh Trái */}
            <div className=" cart-item-pro-img-mobile ">
              <Link to="/product-detail">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/nexo-ls18.jpg" alt="cartImage" />
              </Link>
            </div>
            {/* Khối thông tin bên phải */}
            <div className=" cart-title-product-cols-mobile ">
              {/* 1 */}
              <span className=" pro-name-mobile-flex ">
                <Link to="/product-detail">LS 18</Link>
                <div> <i className="fas fa-trash-alt delete-one " /> </div>
              </span>
              {/* 2 */}
              <span className="unit-price">
                <div className="col-name">ĐƠN GIÁ</div>
                <div className="col-value">89,612,600₫</div>
              </span>
              {/* 3 */}
              <span className="pro-quantity">
                <div className="col-name">SỐ LƯỢNG</div>
                {/* Chỉnh số lượng sp */}
                <div className="custom-number-mobile">
                  <i className="fas fa-minus" />
                  <input className="custom-number-input-mobile" type="text" defaultValue={2} />
                  <i className="fas fa-plus" />
                </div>
              </span>
              {/* 4 */}
              <span>
                <div className="col-name">THÀNH TIỀN</div>
                <div>179,225,200đ</div>
              </span>
            </div>
          </div>
          {/* item 3 */}
          <div className=" cart-item-mobile ">
            {/* Khối ảnh Trái */}
            <div className=" cart-item-pro-img-mobile ">
              <Link to="/product-detail">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/amate-X218WF.png" alt="cartImage" />
              </Link>
            </div>
            {/* Khối thông tin bên phải */}
            <div className=" cart-title-product-cols-mobile ">
              {/* 1 */}
              <span className=" pro-name-mobile-flex ">
                <Link to="/product-detail">X218WF Active</Link>
                <div> <i className="fas fa-trash-alt  delete-one " /> </div>
              </span>
              {/* 2 */}
              <span className="unit-price">
                <div className="col-name">ĐƠN GIÁ</div>
                <div className="col-value">189,200,000đ</div>
              </span>
              {/* 3 */}
              <span className="pro-quantity">
                <div className="col-name">SỐ LƯỢNG</div>
                {/* Chỉnh số lượng sp */}
                <div className="custom-number-mobile">
                  <i className="fas fa-minus" />
                  <input className="custom-number-input-mobile" type="text" defaultValue={3} />
                  <i className="fas fa-plus" />
                </div>
              </span>
              {/* 4 */}
              <span>
                <div className="col-name">THÀNH TIỀN</div>
                <div>567,000,000đ</div>
              </span>
            </div>
          </div>
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
