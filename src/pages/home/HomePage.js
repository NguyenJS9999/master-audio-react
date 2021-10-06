// import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Slider from "react-slick"; // react-slick.neostack.com

// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

import Newsletter from "../../newsletter/NewsLetter"
import { Services } from "./Services"

function HomePage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    arrows: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,

  }

  return (
    <>
      <main>
        {/* Danh mục đổ xuống - banner quang cáo */}
        {/* categorys-banners-container  */}
        <section className=" banners-container   container-fluid ">
          {/* categorys */}
          {/* categorys */}
          {/* slick slider */}
          <div className=" banners ">

            <Slider {...settings}>
              <div>
                <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/banner-top-home-adamson-system.png?raw=true" alt="banner" />
              </div>
              <div>
                <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/adamson_CS_Family_1920.png?raw=true" alt="banner" />
              </div>
              <div>
                <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/adamson-m-series.png?raw=true" alt="banner" />
              </div>
              <div>
                <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/Adamson-S-series.png?raw=true" alt="banner" />
              </div>
              {/* <div>
                <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/X14FD_poster.png?raw=true" alt="banner" />
              </div> */}
            </Slider>


            {/* <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/banner-top-home-adamson-system.png?raw=true" alt="banner" /> */}
          </div>
        </section>
        {/* List sản phẩm - quảng cáo mỗi loại 1 vài sp nội bật */}
        <section className=" featured-products-container   container-fluid  ">
          {/* Các sp tiêu biểu */}
          <div className=" featured-products  ">
            {/* 1 KHUYẾN MÃI HOT NHẤT THÁNG ... {} */}
            <div className=" featured-product__backgound   container-fluid ">
              <div className=" featured-product container ">
                <div className=" featured-product--title ">KHUYẾN MÃI HOT NHẤT THÁNG 9</div>
                <div className=" featured-product__list  ">
                  {/* 1 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">4 Acoustic</h5>
                        <p className="card-text product-card__name">
                          Subwoofer PCS 318NB
                        </p>
                        <p className="card-text product-card__price">65,200,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Nexo</h5>
                        <p className="card-text product-card__name">
                          Fullrange PS15
                        </p>
                        <p className="card-text product-card__price">87,715,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Adamson</h5>
                        <p className="card-text product-card__name">
                          Fullrange Point 15
                        </p>
                        <p className="card-text product-card__price">99,111,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Amate</h5>
                        <p className="card-text product-card__name">
                          Subwoofer X218WFD
                        </p>
                        <p className="card-text product-card__price">179.697.708₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 5 */}
                </div>
                <div className=" featured-product__btn ">
                  <Link to="/products">
                    <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
                  </Link>
                </div>
              </div>
            </div>
            {/* 2 COMBO KARAOKE GIA ĐÌNH ĐƯỢC YÊU THÍCH NHẤT */}
            <div className=" featured-product__backgound    container-fluid ">
              <div className=" featured-product container">
                <div className=" featured-product--title ">COMBO KARAOKE GIA ĐÌNH ĐƯỢC YÊU THÍCH NHẤT</div>
                <div className=" featured-product__list  ">
                  {/* 1 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">4 Acoustic</h5>
                        <p className="card-text product-card__name">
                          Subwoofer PCS 318NB
                        </p>
                        <p className="card-text product-card__price">65,200,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Nexo</h5>
                        <p className="card-text product-card__name">
                          Fullrange PS15
                        </p>
                        <p className="card-text product-card__price">87,715,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Adamson</h5>
                        <p className="card-text product-card__name">
                          Fullrange Point 15
                        </p>
                        <p className="card-text product-card__price">99,111,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Amate</h5>
                        <p className="card-text product-card__name">
                          Subwoofer X218WFD
                        </p>
                        <p className="card-text product-card__price">179.697.708₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 5 */}
                </div>
                <div className=" featured-product__btn ">
                  <Link to="/products">
                    <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
                  </Link>
                </div>
              </div>
            </div>
            {/* 3 LOA FULL - SUB - ARRAY - MIDLOW */}
            <div className=" featured-product__backgound    container-fluid ">
              <div className=" featured-product container ">
                <div className=" featured-product--title ">LOA FULL - SUB - ARRAY - MIDLOW</div>
                <div className=" featured-product__list  ">
                  {/* 1 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">4 Acoustic</h5>
                        <p className="card-text product-card__name">
                          Subwoofer PCS 318NB
                        </p>
                        <p className="card-text product-card__price">65,200,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Nexo</h5>
                        <p className="card-text product-card__name">
                          Fullrange PS15
                        </p>
                        <p className="card-text product-card__price">87,715,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Adamson</h5>
                        <p className="card-text product-card__name">
                          Fullrange Point 15
                        </p>
                        <p className="card-text product-card__price">99,111,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Amate</h5>
                        <p className="card-text product-card__name">
                          Subwoofer X218WFD
                        </p>
                        <p className="card-text product-card__price">179.697.708₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 5 */}
                </div>
                <div className=" featured-product__btn ">
                  <Link to="/products">
                    <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Banner giữa 1 */}
            <div className=" featured-product__banners ">
              <div className=" banners-center-1 ">
                <Slider {...settings}>
                  <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/banner-adamson-S-Series.png?raw=true" alt="banner" />
                  <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/banner-top-home-adamson-system-bass.png?raw=true" alt="banner" />
                  <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/Point-PC-Series-7002.png?raw=true" alt="banner" />
                </Slider>
              </div>
            </div>
            {/* 4 "MIXER – VANG SỐ VANG CƠ - NÂNG TIẾNG" */}
            <span className=" featured-product__backgound  container-fluid ">
              <div className=" featured-product container   container-fluid ">
                <div className=" featured-product--title ">MIXER – VANG SỐ VANG CƠ - NÂNG TIẾNG</div>
                <div className=" featured-product__list  ">
                  {/* 1 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp"
                            alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">4 Acoustic</h5>
                        <p className="card-text product-card__name">
                          Subwoofer PCS 318NB
                        </p>
                        <p className="card-text product-card__price">65,200,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Nexo</h5>
                        <p className="card-text product-card__name">
                          Fullrange PS15
                        </p>
                        <p className="card-text product-card__price">87,715,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Adamson</h5>
                        <p className="card-text product-card__name">
                          Fullrange Point 15
                        </p>
                        <p className="card-text product-card__price">99,111,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Amate</h5>
                        <p className="card-text product-card__name">
                          Subwoofer X218WFD
                        </p>
                        <p className="card-text product-card__price">179.697.708₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 5 */}
                </div>
                <div className=" featured-product__btn ">
                  <Link to="/products">
                    <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
                  </Link>
                </div>
              </div>
            </span>
            {/* 5 CỤC ĐẨY CÔNG SUẤT - AMPLY */}
            <span className=" featured-product__backgound  container-fluid ">
              <div className=" featured-product container   container-fluid ">
                <div className=" featured-product--title ">CỤC ĐẨY CÔNG SUẤT - AMPLY</div>
                <div className=" featured-product__list  ">
                  {/* 1 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">4 Acoustic</h5>
                        <p className="card-text product-card__name">
                          Subwoofer PCS 318NB
                        </p>
                        <p className="card-text product-card__price">65,200,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Nexo</h5>
                        <p className="card-text product-card__name">
                          Fullrange PS15
                        </p>
                        <p className="card-text product-card__price">87,715,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Adamson</h5>
                        <p className="card-text product-card__name">
                          Fullrange Point 15
                        </p>
                        <p className="card-text product-card__price">99,111,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Amate</h5>
                        <p className="card-text product-card__name">
                          Subwoofer X218WFD
                        </p>
                        <p className="card-text product-card__price">179.697.708₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 5 */}
                </div>
                <div className=" featured-product__btn ">
                  <Link to="/products">
                    <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
                  </Link>
                </div>
              </div>
            </span>
            {/* Banner giữa 2 */}
            <div className=" featured-product__banners ">
              <div className=" banners-center-2 ">
                <Slider {...settings}>
                    <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/PS-Series-banner.jpg?raw=true" alt="banner" />
                    <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/xcellence_headers-banner.png?raw=true" alt="banner" />
                    <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/Nexo-stm-banner.png?raw=true" alt="banner" />
                </Slider>
              </div>
            </div>
            {/* 6 MICRO */}
            <span className=" featured-product__backgound  container-fluid ">
              <div className=" featured-product container   container-fluid ">
                <div className=" featured-product--title ">MICRO</div>
                <div className=" featured-product__list  ">
                  {/* 1 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">4 Acoustic</h5>
                        <p className="card-text product-card__name">
                          Subwoofer PCS 318NB
                        </p>
                        <p className="card-text product-card__price">65,200,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Nexo</h5>
                        <p className="card-text product-card__name">
                          Fullrange PS15
                        </p>
                        <p className="card-text product-card__price">87,715,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Adamson</h5>
                        <p className="card-text product-card__name">
                          Fullrange Point 15
                        </p>
                        <p className="card-text product-card__price">99,111,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Amate</h5>
                        <p className="card-text product-card__name">
                          Subwoofer X218WFD
                        </p>
                        <p className="card-text product-card__price">179.697.708₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 5 */}
                </div>
                <div className=" featured-product__btn ">
                  <Link to="/products">
                    <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
                  </Link>
                </div>
              </div>
            </span>
            {/* 7 QUẢN LÝ NGUỒN */}
            <span className=" featured-product__backgound  container-fluid ">
              <div className=" featured-product container   container-fluid ">
                <div className=" featured-product--title ">QUẢN LÝ NGUỒN</div>
                <div className=" featured-product__list  ">
                  {/* 1 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">4 Acoustic</h5>
                        <p className="card-text product-card__name">
                          Subwoofer PCS 318NB
                        </p>
                        <p className="card-text product-card__price">65,200,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Nexo</h5>
                        <p className="card-text product-card__name">
                          Fullrange PS15
                        </p>
                        <p className="card-text product-card__price">87,715,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Adamson</h5>
                        <p className="card-text product-card__name">
                          Fullrange Point 15
                        </p>
                        <p className="card-text product-card__price">99,111,000₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className=" col__product-card ">
                    <div className=" product-card ">
                      {/* <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div> */}
                      <Link to={`/products`} >
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className=" product-card__brand ">Amate</h5>
                        <p className="card-text product-card__name">
                          Subwoofer X218WFD
                        </p>
                        <p className="card-text product-card__price">179.697.708₫</p>
                        <button className="btn-addtocart product-card__btn">
                          <i className="fas fa-shopping-cart" />&nbsp;
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 5 */}
                </div>
                <div className=" featured-product__btn ">
                  <Link to="/products">
                    <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
                  </Link>
                </div>
              </div>
            </span>
            {/* 8 ... */}
          </div>
        </section>
        {/* VLOG công trình tiêu biểu */}
        <section className=" vlog-typical-projects    container ">
          <div className=" typical-projects--title ">CÁC CÔNG TRÌNH TIÊU BIỂU</div>
          <div className=" typical-projects-list ">
            <div className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-Lasvegas.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Lasvegas</span>
              </Link>
            </div>
            <div className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-X-Men-Club.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke X-Men Club</span>
              </Link>
            </div>
            <div className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-Blue-Eyes.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Blue Eyes</span>
              </Link>
            </div>
            <div className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-Golden-Star.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Golden Star</span>
              </Link>
            </div>
            <div className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-Grand-300.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Grand 300</span>
              </Link>
            </div>
            <div className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-New-Sky.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke New Sky</span>
              </Link>
            </div>
            <div className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-O2png.jpg" alt="construction" />
                <span className=" typical-project-title ">Karaoke O2</span>
              </Link>
            </div>
            <div className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/TOP-ONE-KTV.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke TOP ONE KTV</span>
              </Link>
            </div>
            <div className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/karaoke-family.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Family</span>
              </Link>
            </div>
          </div>
          <div className=" typical-project__btn  container ">
            <Link to="/typical-projects" className=" section__btn ">XEM TẤT CẢ CÁC CÔNG TRÌNH</Link>
          </div>
        </section>
        {/* https://tintuc.pro-sound.vn/nhung-quan-karaoke-tai-ha-noi-chat-luong-nhat/ */}
        {/* VLOG công trình tiêu biểu */}
        {/* Tự hào thương hiệu */}
        <Services />

        {/* Email nhận tin tức mới */}
        <Newsletter />

      </main>


    </>

  );
}

export default HomePage;
