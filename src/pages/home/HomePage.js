import { useEffect } from "react";

import "./Home.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function HomePage() {
  useEffect( () => {
    console.log('HomePage')
  }, [] ) 
  
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
            <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/banner-top-home-adamson-system.png?raw=true" alt="banner" />
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </a>
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
                  <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </a>
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
                  <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </a>
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
                  <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
                </div>
              </div>
            </div>
            {/* Banner giữa 1 */}
            <div className=" featured-product__banners ">
              <div className=" banners ">
                <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/banner-top-home-adamson-system-bass.png?raw=true" alt="banner" />
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </a>
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
                  <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </a>
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
                  <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
                </div>
              </div>
            </span>
            {/* Banner giữa 2 */}
            <div className=" featured-product__banners ">
              <div className=" banners ">
                <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/banner-adamson-S-Series.png?raw=true" alt="banner" />
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </a>
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
                  <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/4-acoustic/subwoofer/PCS-318NB/PCS-318NB-01.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/nexo/full-range/ps15/ps15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/adamson/full-range/point15/point15.webp" alt="speak" />
                        </div>
                      </a>
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
                      <div className="product-card__wishlist">
                        <i className="far fa-heart" />
                      </div>
                      <a href="./product-detail/product-detail.html">
                        <div className="product-card__img">
                          <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/amate/subwoofer/X218WF/X218WF.webp" alt="speak" />
                        </div>
                      </a>
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
                  <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
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
              <a href=" project-finished.html " className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-Lasvegas.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Lasvegas</span>
              </a>
            </div>
            <div className=" typical-project-card--col ">
              <a href=" project-finished.html " className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-X-Men-Club.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke X-Men Club</span>
              </a>
            </div>
            <div className=" typical-project-card--col ">
              <a href=" project-finished.html " className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-Blue-Eyes.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Blue Eyes</span>
              </a>
            </div>
            <div className=" typical-project-card--col ">
              <a href=" project-finished.html " className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-Golden-Star.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Golden Star</span>
              </a>
            </div>
            <div className=" typical-project-card--col ">
              <a href=" project-finished.html " className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-Grand-300.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Grand 300</span>
              </a>
            </div>
            <div className=" typical-project-card--col ">
              <a href=" project-finished.html " className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-New-Sky.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke New Sky</span>
              </a>
            </div>
            <div className=" typical-project-card--col ">
              <a href=" project-finished.html " className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-O2png.jpg" alt="construction" />
                <span className=" typical-project-title ">Karaoke O2</span>
              </a>
            </div>
            <div className=" typical-project-card--col ">
              <a href=" project-finished.html " className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/TOP-ONE-KTV.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke TOP ONE KTV</span>
              </a>
            </div>
            <div className=" typical-project-card--col ">
              <a href=" project-finished.html " className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/karaoke-family.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Family</span>
              </a>
            </div>
          </div>
          <div className=" typical-project__btn  container ">
            <div className=" section__btn ">XEM TẤT CẢ CÁC CÔNG TRÌNH</div>
          </div>
        </section>
        {/* VLOG công trình tiêu biểu */}
        {/* Tự hào thương hiệu */}
        <section className=" services-container  container ">
          <div className=" section__title   services__title ">TẠI SAO CHỌN MASTER AUDIO</div>
          <div className=" services ">
            <div className=" service ">
              <i className=" service__icon   fas fa-award" />
              <div className=" service__title ">Sản phẩm chính hãng</div>
              <p className=" service__content  ">
                Sản phẩm được nhập khẩu trực tiếp từ các thương hiệu lớn tại Châu Âu và Châu Á
              </p>
            </div>
            <div className=" service ">
              <i className=" service__icon   fas fa-hand-holding-usd" />
              <div className=" service__title ">Giá thành hợp lý</div>
              <p className=" service__content  ">
                Tặng kèm phụ kiện với đơn hàng trên 20,000,000 VND cho tất cả các khách hàng
              </p>
            </div>
            <div className=" service ">
              <i className=" service__icon   fas fa-wrench" />
              <div className=" service__title ">Miễn phí lặp đặt</div>
              <p className=" service__content  ">
                Miễn phí vận chuyển và lắp đặt
                với đơn hàng trên 50,000,000 VND
              </p>
            </div>
            <div className=" service ">
              <i className=" service__icon   fas fa-cog" />
              <div className=" service__title ">Bảo hành dài lâu</div>
              <p className=" service__content  ">Bảo hành chính hãng 3 năm lỗi 1 đổi 1 trong 6 tháng đầu hỗ trợ cài
                đặt miễn phí
              </p>
            </div>
            <div className=" service ">
              <i className=" service__icon   fas fa-headset" />
              <div className=" service__title ">Hỗ trợ nhiệt tình</div>
              <p className=" service__content  ">Tổng đài miễn phí 24/24 giải đáp mọi khó khăn của quý khách hàng</p>
            </div>
          </div>
        </section>
        {/* Email nhận tin tức mới */}
        <section className=" newsletter-container    container-fluid ">
          <div className=" newsletter-title ">ĐĂNG KÍ NHẬN TIN MỚI</div>
          <div className=" newsletter-description ">
            Nhận các tin tức về sản phẩm và khuyến mãi sớm nhất
          </div>
          <div className=" get-news ">
            <i className=" service__icon   fas fa-paper-plane" />
            <input type="text" placeholder="Email của bạn..." />
          </div>
        </section>
      </main>


    </>
  
  );
}

export default HomePage;
