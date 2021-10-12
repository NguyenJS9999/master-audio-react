import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Slider from "react-slick"; // react-slick.neostack.com
import AOS from "aos";

import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cartSlice"

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

  AOS.init();
  // Khuyển mãi theo tháng - thời gian thực
  const currendTime = new Date();
  const month = (currendTime.getMonth() + 1)

  const [stateBestSellingMonth, setBestSellingMonth] = useState([]);
  const [stateFullSubArrayMidlow, seteFullSubArrayMidlow] = useState([]);
  const [stateMixer, setMixer] = useState([]);
  const [stateAmplifier, setAmplifier] = useState([]);
  const [stateMicro, setMicro] = useState([]);
  const [stateAutoPower, setAutoPower] = useState([]);

  // Redux gửi đi
  const dispatch = useDispatch();

  const [stateLoadding, setLoading] = useState(true);
  // Sản phẩm bán chạy tháng
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/betser-month`
      );
      const result = await response.json();
      setBestSellingMonth(result);
      setLoading(false);
    }
    fetchData();
  }, []);
  // LOA FULL - SUB - ARRAY - MIDLOW
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/full-sub-array-midlow`
      );
      const result = await response.json();
      seteFullSubArrayMidlow(result);
      setLoading(false);
    }
    fetchData();
  }, [])
  // MIXER – VANG SỐ VA G CƠ - NÂNG TIẾNG
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/mixer`
      );
      const result = await response.json();
      setMixer(result);
      setLoading(false);
    }
    fetchData();
  }, [])
  // CỤC ĐẨY CÔNG SUẤT - AMPLY
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/amplifier`
      );
      const result = await response.json();
      setAmplifier(result);
      setLoading(false);
    }
    fetchData();
  }, [])
  // MICRO
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/micro`
      );
      const result = await response.json();
      setMicro(result);
      setLoading(false);
    }
    fetchData();
  }, [])
  // QUẢN LÝ NGUỒN
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/auto-power`
      );
      const result = await response.json();
      setAutoPower(result);
      setLoading(false);
    }
    fetchData();
  }, [])

  // Render Element
  // Khuyến mãi hot nhât tháng 
  const betserMonthElement = stateBestSellingMonth.map((item) => (
    <div key={item.id} className=" col__product-card ">
      <div className=" product-card ">
        {/* <div className="product-card__wishlist">
          <i className="far fa-heart" />
        </div> */}
        <Link to={`/product-detail/${item.slug}/${item.id}`} >
          <div className="product-card__img">
            <img src={item.image} alt={item.name} />
          </div>
        </Link>
        <div className="card-body">
          <h5 className=" product-card__brand ">{item.brand}</h5>
          <p className="card-text product-card__name">
            {item.name}
          </p>
          <p className="card-text product-card__price">{(item.price).toLocaleString()}&nbsp;₫</p>

          {/* <button onClick={() => dispatch(addProduct(item))}
            className="btn-addtocart product-card__btn">
            <i className="fas fa-cart-arrow-down" />&nbsp;
            <span>Thêm vào giỏ hàng</span>
          </button> */}

          <div onClick={() => dispatch(addProduct(item))}
            className="btn-addtocart product-card__btn" type="button" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>
            <i className="fas fa-cart-arrow-down" />&nbsp;Thêm vào giỏ hàng
          </div>

          {/* <CustomModal
            proTitle='Đã thêm sản phẩm vào giỏ hàng!'
            imgUrl={item.image}
            proBrand={item.brand}
            proName={item.name} /> */}

          <div className="modal fade" id={item.id} aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-center"  >Đã thêm sản phẩm vào giỏ hàng!</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <img src={item.image} alt={item.name} />
                  <span className='modal-body_type'>{item.type}</span>&nbsp;
                  <strong>{item.brand}</strong>&nbsp;
                  <span>{item.name}</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  ))
  // 3 LOA FULL - SUB - ARRAY - MIDLOW 
  const fullSubArrayMidlowElement = stateFullSubArrayMidlow.map((item) => (
    <div key={item.id} className=" col__product-card ">
      <div className=" product-card ">
        {/* <div className="product-card__wishlist">
          <i className="far fa-heart" />
        </div> */}
        <Link to={`/product-detail/${item.slug}/${item.id}`} >
          <div className="product-card__img">
            <img src={item.image} alt="speak" />
          </div>
        </Link>
        <div className="card-body">
          <h5 className=" product-card__brand ">{item.brand}</h5>
          <p className="card-text product-card__name">
            {item.name}
          </p>
          <p className="card-text product-card__price">{item.price.toLocaleString()}&nbsp;₫</p>
          <button className="btn-addtocart product-card__btn">
            <i className="fas fa-shopping-cart" />&nbsp;
            <span>Thêm vào giỏ hàng</span>
          </button>
        </div>
      </div>
    </div>
  ));
  // 4 MIXER – VANG SỐ VANG CƠ - NÂNG TIẾNG
  const mixerElement = stateMixer.map((item) => (
    <div key={item.id} className=" col__product-card ">
      <div className=" product-card ">
        {/* <div className="product-card__wishlist">
          <i className="far fa-heart" />
        </div> */}
        <Link to={`/product-detail/${item.slug}/${item.id}`} >
          <div className="product-card__img">
            <img src={item.image} alt="speak" />
          </div>
        </Link>
        <div className="card-body">
          <h5 className=" product-card__brand ">{item.brand}</h5>
          <p className="card-text product-card__name">
            {item.name}
          </p>
          <p className="card-text product-card__price">{item.price.toLocaleString()}&nbsp;₫</p>
          <button className="btn-addtocart product-card__btn">
            <i className="fas fa-shopping-cart" />&nbsp;
            <span>Thêm vào giỏ hàng</span>
          </button>
        </div>
      </div>
    </div>
  ));
  // 5 CỤC ĐẨY CÔNG SUẤT - AMPLY
  const amplifierElement = stateAmplifier.map((item) => (
    <div key={item.id} className=" col__product-card ">
      <div className=" product-card ">
        {/* <div className="product-card__wishlist">
        <i className="far fa-heart" />
      </div> */}
        <Link to={`/product-detail/${item.slug}/${item.id}`} >
          <div className="product-card__img">
            <img src={item.image} alt="speak" />
          </div>
        </Link>
        <div className="card-body">
          <h5 className=" product-card__brand ">{item.brand}</h5>
          <p className="card-text product-card__name">
            {item.name}
          </p>
          <p className="card-text product-card__price">{item.price.toLocaleString()}&nbsp;₫</p>
          <button className="btn-addtocart product-card__btn">
            <i className="fas fa-shopping-cart" />&nbsp;
            <span>Thêm vào giỏ hàng</span>
          </button>
        </div>
      </div>
    </div>
  ));
  // 6 MICRO
  const microElement = stateMicro.map((item) => (
    <div key={item.id} className=" col__product-card ">
      <div className=" product-card ">
        {/* <div className="product-card__wishlist">
          <i className="far fa-heart" />
        </div> */}
        <Link to={`/product-detail/${item.slug}/${item.id}`} >
          <div className="product-card__img">
            <img src={item.image} alt="speak" />
          </div>
        </Link>
        <div className="card-body">
          <h5 className=" product-card__brand ">{item.brand}</h5>
          <p className="card-text product-card__name">
            {item.name}
          </p>
          <p className="card-text product-card__price">{item.price.toLocaleString()}&nbsp;₫</p>
          <button className="btn-addtocart product-card__btn">
            <i className="fas fa-shopping-cart" />&nbsp;
            <span>Thêm vào giỏ hàng</span>
          </button>
        </div>
      </div>
    </div>

  ));
  // 7 QUẢN LÝ NGUỒN
  const autoPoweElement = stateAutoPower.map((item) => (
    <div key={item.id} className=" col__product-card ">
      <div className=" product-card ">
        {/* <div className="product-card__wishlist">
          <i className="far fa-heart" />
        </div> */}
        <Link to={`/product-detail/${item.slug}/${item.id}`} >
          <div className="product-card__img">
            <img src={item.image} alt="speak" />
          </div>
        </Link>
        <div className="card-body">
          <h5 className=" product-card__brand ">{item.brand}</h5>
          <p className="card-text product-card__name">
            {item.name}
          </p>
          <p className="card-text product-card__price">{item.price.toLocaleString()}&nbsp;₫</p>
          <button className="btn-addtocart product-card__btn">
            <i className="fas fa-shopping-cart" />&nbsp;
            <span>Thêm vào giỏ hàng</span>
          </button>
        </div>
      </div>
    </div>
  ));

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
                <picture>
                  <source srcSet="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/adamson_CS_Family_1920.png?raw=true" style={{ width: '100%' }} />
                  <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/banner/webp/adamson_CS_Family_1920.webp" alt="banner" style={{ width: '100%' }} />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/adamson-m-series.png?raw=true" style={{ width: '100%' }} />
                  <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/banner/webp/adamson-m-series.webp" alt="banner" style={{ width: '100%' }} />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/adamson-m-series.png?raw=true" style={{ width: '100%' }} />
                  <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/banner/webp/adamson-m-series.webp" alt="banner" style={{ width: '100%' }} />
                </picture>
              </div>
              <div>
                <picture>
                  <source srcSet="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/Adamson-S-series.png?raw=true" style={{ width: '100%' }} />
                  <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/banner/webp/Adamson-S-series.webp" alt="banner" style={{ width: '100%' }} />
                </picture>
              </div>
              {/* <div>
                <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/banner/X14FD_poster.png?raw=true" alt="banner" />
              </div> */}
            </Slider>

          </div>
        </section>
        {/* List sản phẩm - quảng cáo mỗi loại 1 vài sp nội bật */}
        <section className=" featured-products-container   container-fluid  ">
          {/* Các sp tiêu biểu */}
          <div className=" featured-products  ">
            {/* 1 KHUYẾN MÃI HOT NHẤT THÁNG ... {} */}
            <div className=" featured-product__backgound   container-fluid ">
              <div className=" featured-product container ">
                <div className=" featured-product--title ">SẢN PHẨM HOT NHẤT THÁNG {month}</div>
                <div className=" featured-product__list  ">
                  {/* List */}
                  {stateLoadding ? <div className="loadding_home-list"></div> : betserMonthElement}
                </div>
                <div className=" featured-product__btn ">
                  <Link to="/products">
                    <div className="section__btn ">XEM THÊM SẢN PHẨM</div>
                  </Link>
                </div>
              </div>
            </div>
            {/* 2 COMBO KARAOKE GIA ĐÌNH ĐƯỢC YÊU THÍCH NHẤT */}

            {/* 3 LOA FULL - SUB - ARRAY - MIDLOW */}
            <div className=" featured-product__backgound    container-fluid ">
              <div className=" featured-product container ">
                <div className=" featured-product--title ">LOA FULL - SUB - ARRAY - MIDLOW</div>
                <div className=" featured-product__list  ">
                  {/* List */}
                  {stateLoadding ? <div className="loadding_home-list"></div> : fullSubArrayMidlowElement}
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
            {/* 4 MIXER – VANG SỐ VANG CƠ - NÂNG TIẾNG */}
            <span className=" featured-product__backgound  container-fluid ">
              <div className=" featured-product container   container-fluid ">
                <div className=" featured-product--title ">MIXER – VANG SỐ VANG CƠ - NÂNG TIẾNG</div>
                <div className=" featured-product__list  ">
                  {/* List */}
                  {stateLoadding ? <div className="loadding_home-list"></div> : mixerElement}

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
                  {/* List */}
                  {stateLoadding ? <div className="loadding_home-list"></div> : amplifierElement}

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
                  {/* List */}
                  {stateLoadding ? <div className="loadding_home-list"></div> : microElement}
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
                  {/* List */}
                  {stateLoadding ? <div className="loadding_home-list"></div> : autoPoweElement}

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

          <div className=" typical-projects-list "  >

            <div
              data-aos="fade-up"
              data-aos-duration={1200}
              className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-Lasvegas.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Lasvegas</span>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration={1200}
              className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-X-Men-Club.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke X-Men Club</span>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration={1200}
              className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-Blue-Eyes.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Blue Eyes</span>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration={1200}
              className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-Golden-Star.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Golden Star</span>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration={1200}
              className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-Grand-300.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke Grand 300</span>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration={1200}
              className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-New-Sky.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke New Sky</span>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration={1200}
              className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/Karaoke-O2png.jpg" alt="construction" />
                <span className=" typical-project-title ">Karaoke O2</span>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration={1200}
              className=" typical-project-card--col ">
              <Link to="/typical-projects" className=" typical-project ">
                <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/construction/TOP-ONE-KTV.png" alt="construction" />
                <span className=" typical-project-title ">Karaoke TOP ONE KTV</span>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration={1200}
              className=" typical-project-card--col ">
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
