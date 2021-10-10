import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cartSlice"
// react-bootstrap
import { Pagination } from "react-bootstrap";

import CustomModal from "../../components/Modal";

import "./ProductsPage.css";
import "../../App.css";

import Newsletter from "../../newsletter/NewsLetter"


function ProductsPage() {
  const [stateProducts, setProducts] = useState([]);
  // Lọc sp
  const [stateFilterResults, setFilterResults] = useState([]);
  const [loading, setLoading] = useState(true);
  // Ô input seatch
  const [stateInputSearchValue, setInputSearchValue] = useState("");
  // Giá trị ô option sắp xếp giá
  const [stateSortValueItem, setSortValueItem] = useState("default");
  // Giá trị ô option số sp 1 trang
  const [stateLimitOfPaginate, setLimitOfPaginate] = useState(9);
  // Giá trị 1 nút phân trang
  const [stateNumOfPaginate, setNumOfPaginate] = useState(1);
  // Checked
  const [stateChecked, setChecker] = useState('');
  // Redux gửi đi
  const dispatch = useDispatch();


  // Tải dữ liệu về 1 lần đầu
  useEffect(() => {
    // Async await
    async function fetchData() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/products?_page=${stateNumOfPaginate}&_limit=${stateLimitOfPaginate}`
      );
      const result = await response.json();
      setProducts(result);
      setFilterResults(result);
      setLoading(false);
    }

    fetchData();
  }, [stateLimitOfPaginate, stateNumOfPaginate]);
  // Sắp xếp sp - sort 
  useEffect(() => {
    let filteredList = [...stateProducts];
    filteredList = stateProducts.filter(
      (product) =>
        product.brand.toLowerCase().includes(stateInputSearchValue) ||
        product.name.toLowerCase().includes(stateInputSearchValue)
    );

    if (stateSortValueItem === "ascending") {
      filteredList = filteredList.sort((a, b) => a.price - b.price);
    } else if (stateSortValueItem === "descending") {
      filteredList = filteredList.sort((a, b) => b.price - a.price);
    } else if (stateSortValueItem === "default") {
      filteredList = stateProducts;
    }
    setFilterResults(filteredList);
  }, [stateInputSearchValue, stateProducts, stateSortValueItem]);
  // Lấy giá trị ô Search input
  function inputSearchValue(event) {
    setInputSearchValue(event.target.value);
  }
  // Chức năng Search
  function searchProduct() {
    async function searchData() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/products/?q=${stateInputSearchValue}  `
      );
      const result = await response.json();
      setProducts(result);
    }
    searchData();
  }
  // Lấy giá trị sort trong select dropdown
  function getSortValue(event) {
    setSortValueItem(event.target.value);
  }
  // Lấy giá trị phân trang trong select dropdown
  function getLimitOfPaginate(event) {
    setLimitOfPaginate(event.target.value);
  }
  // Phân Trang - Lấy giá trị 1 nút phân trang
  function getNumOfPaginate(num) {
    setNumOfPaginate(num);
  }
  // Tích checkbox để lọc sp
  function filterWithCheckBox(query, valueFilter) {
    setChecker(valueFilter)
    async function filterProduct() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/products?${query}=${valueFilter}  `
      );
      const result = await response.json();
      setProducts(result);
    }
    filterProduct()
  }
  // Xóa trạng thái các lọc
  function clearAllFilters() {
    async function filterProduct() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/products`
      );
      const result = await response.json();
      setProducts(result);
    }
    filterProduct()
    setChecker('')
  }
  // Phân trang
  let active = stateNumOfPaginate;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}
        onClick={() => getNumOfPaginate(number)} className="pagination-item">
        {number}
      </Pagination.Item>,
    );
  }
  const [stateToggleFilterMobile, setToggleFilterMobile] = useState(false);
  // Lọc MOBILE
  function toggleFilterMobile() {
    if (stateToggleFilterMobile === true) {
      setToggleFilterMobile(false)
    } else {
      setToggleFilterMobile(true)
    }
  }

  // List tất cả data
  let ProductCardElement = stateFilterResults.map((item) => (

    <div className=" col__product-card " key={item.id}>
      <div className=" product-card ">
        {/* <div className="product-card__wishlist">
          <i className="far fa-heart" />
        </div> */}

        <Link to={`/product-detail/${item.slug}/${item.id}`}>
          <div className="product-card__img">
            <img src={item.image} alt="speak" />
          </div>
        </Link>

        <div className="card-body">
          <h5 className=" product-card__brand ">{item.brand}</h5>

          <p className="card-text product-card__name">{item.name}</p>

          <p className="card-text product-card__price">
            {item.price.toLocaleString()}&nbsp;₫</p>

          {/* <div onClick={() => dispatch(addProduct(item))}
            className="btn-addtocart  product-card__btn">
            <i className="fas fa-shopping-cart" />&nbsp;
            <span>Thêm vào giỏ hàng</span>
          </div> */}

          <button onClick={() => dispatch(addProduct(item))}
            type="button" className="btn-addtocart  product-card__btn" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>
            <i className="fas fa-cart-arrow-down" />&nbsp;
            Thêm vào giỏ hàng
          </button>

          {/* <!-- Modal --> */}
          <CustomModal proTitle='Đã thêm sản phẩm vào giỏ hàng!'
            imgUrl={item.image} proBrand={item.brand}
            proName={item.name} proType={item.type} proId={item.id}
          />

        </div>
      </div>
    </div>
  ));

  function FilterBrandsComponent() {
    return (
      <div className="products__filter">
        {/* <h4 className=" section-title    products__filter-title">TÌM SẢN PHẨM</h4> */}
        {/* Seacrch */} {/* Seacrch */}
        <div onClick={clearAllFilters}>
          <button className="section__btn  remove-filter__btn">XÓA LỌC</button>
        </div>


        {/* Lọc theo thương hiệu */}
        <div className=" filter__brands">
          <h4 className="section-title    filter-title">
            LỌC THEO THƯƠNG HIỆU
          </h4>
          <div className="filter__list">
            <span>
              <input
                checked={stateChecked === '4 Acoustic' ? true : false}
                onChange={() => filterWithCheckBox('brand', '4 Acoustic')}
                type="radio"
                id="4 Acoustic"
                name="filter"
              />

              <label
                className="filter__item filter__brand-item"
                htmlFor="4 Acoustic"
              >
                4 Acoustic
              </label>
            </span>

            <span>
              <input
                checked={stateChecked === 'Nexo' ? true : false}
                onChange={() => filterWithCheckBox('brand', 'Nexo')}
                type="radio"
                id="Nexo"
                name="filter"

              />
              <label className="filter__item filter__brand-item" htmlFor="Nexo">
                Nexo
              </label>
            </span>

            <span>
              <input
                checked={stateChecked === 'Adamson' ? true : false}
                onChange={() => filterWithCheckBox('brand', 'Adamson')}
                type="radio"
                id="Adamson"
                name="filter"

              />
              <label
                className="filter__item filter__brand-item"
                htmlFor="Adamson"
              >
                Adamson
              </label>
            </span>
            <span>
              <input
                checked={stateChecked === 'Amate' ? true : false}
                onChange={() => filterWithCheckBox('brand', 'Amate')}
                type="radio"
                id="Amate"
                name="filter"

              />
              <label
                className="filter__item filter__brand-item"
                htmlFor="Amate"
              >
                Amate
              </label>
            </span>
            <span>
              <input
                checked={stateChecked === 'Kuledy' ? true : false}
                onChange={() => filterWithCheckBox('brand', 'Kuledy')}
                type="radio"
                id="Kuledy"
                name="filter"

              />
              <label
                className="filter__item filter__brand-item"
                htmlFor="Kuledy"
              >
                Kuledy
              </label>
            </span>

            <span>

              <input
                checked={stateChecked === 'DK' ? true : false}
                onChange={() => filterWithCheckBox('brand', 'DK')}
                type="radio" id="DK" name="filter" />
              <label className="filter__item filter__brand-item" htmlFor="DK">
                DK
              </label>
            </span>

            <span>
              <input
                checked={stateChecked === 'Baiervires' ? true : false}
                onChange={() => filterWithCheckBox('brand', 'Baiervires')}
                type="radio"
                id="Baiervires"
                name="filter"
              />
              <label
                className="filter__item filter__brand-item"
                htmlFor="Baiervires"
              >
                Baiervires
              </label>
            </span>

            <span>
              <input
                checked={stateChecked === 'HOUS' ? true : false}
                onChange={() => filterWithCheckBox('brand', 'HOUS')}
                type="radio"
                id="Hous"
                name="filter"

              />
              <label className="filter__item filter__brand-item" htmlFor="Hous">
                Hous
              </label>
            </span>
            <span>
              <input
                checked={stateChecked === 'Pioneer' ? true : false}
                onChange={() => filterWithCheckBox('brand', 'Pioneer')}
                type="radio"
                id="Pioneer Dj"
                name="filter"

              />
              <label
                className="filter__item filter__brand-item"
                htmlFor="Pioneer Dj"
              >
                Pioneer Dj
              </label>
            </span>
          </div>
        </div>
        {/* Lọc theo loại sản phẩm */}
        <div className=" filter__type">
          <h4 className="section-title filter-title">LỌC THEO LOẠI SẢN PHẨM</h4>
          <div className="filter__type-list filter__list">

            <span>
              <input
                checked={stateChecked === 'Subwoofer' ? true : false}
                onChange={() => filterWithCheckBox('type', 'Subwoofer')}
                type="radio" name="filter" id="Subwoofer" value="Subwoofer" />
              <label
                className="filter__item filter__type-item"
                htmlFor="Subwoofer"
              >
                Subwoofer
              </label>
            </span>

            <span>
              <input
                checked={stateChecked === 'Full range' ? true : false}
                onChange={() => filterWithCheckBox('type', 'Full range')}
                type="radio" name="filter"
                id="full-range"

              />
              <label
                className="filter__item filter__type-item"
                htmlFor="full-range"
              >
                Full range
              </label>
            </span>

            <span>
              <input
                checked={stateChecked === 'Line Array' ? true : false}
                onChange={() => filterWithCheckBox('type', 'Line Array')}
                type="radio" name="filter"
                id="Line-array"

              />
              <label
                className="filter__item filter__type-item"
                htmlFor="Line-array"
              >
                Line array
              </label>
            </span>

            <span>
              <input
                checked={stateChecked === 'amplifier' ? true : false} onChange={() => filterWithCheckBox('type', 'amplifier')}
                type="radio" name="filter" id="Amplifier" />
              <label
                className="filter__item filter__type-item"
                htmlFor="Amplifier"
              >
                Amplifier
              </label>
            </span>
            <span>

              <input
                checked={stateChecked === 'micro' ? true : false} onChange={() => filterWithCheckBox('type', 'micro')}
                type="radio" name="filter" id="Micro" />
              <label className="filter__item filter__type-item" htmlFor="Micro">
                Micro
              </label>
            </span>

            <span>
              <input
                checked={stateChecked === 'Mixer' ? true : false}
                onChange={() => filterWithCheckBox('type', 'Mixer')}
                type="radio" name="filter" id="Mixer" />
              <label className="filter__item filter__type-item" htmlFor="Mixer">
                Mixer
              </label>
            </span>

          </div>
        </div>
        {/* LỌC THEO QUỐC GIA */}
        <div className=" filter__nation">
          <h4 className="section-title filter-title">LỌC THEO QUỐC GIA</h4>
          <div className="filter__nation-list filter__list">

            <span>
              <input
                checked={stateChecked === 'Germany' ? true : false}
                onChange={() => filterWithCheckBox('nation', 'Germany')}
                type="radio" name="filter" id="Germany" value='Germany' />

              <label className="filter__item filter__Nation-item" htmlFor="Germany">Đức</label>
            </span>

            <span>
              <input
                checked={stateChecked === 'French' ? true : false}
                onChange={() => filterWithCheckBox('nation', 'French')}
                type="radio" name="filter" id="France" />
              <label className="filter__item filter__Nation-item" htmlFor="France">Pháp</label>
            </span>

            <span>
              <input
                checked={stateChecked === 'Canada' ? true : false}
                onChange={() => filterWithCheckBox('nation', 'Canada')}
                type="radio" name="filter" id="Canada" />
              <label className="filter__item filter__Nation-item" htmlFor="Canada">Canada</label>
            </span>

            <span>
              <input
                checked={stateChecked === 'Spain' ? true : false}
                onChange={() => filterWithCheckBox('nation', 'Spain')}
                type="radio" name="filter" id="Spain" />
              <label className="filter__item filter__Nation-item" htmlFor="Spain">Tây Ban Nha</label>
            </span>

            <span>
              <input
                checked={stateChecked === 'USA' ? true : false}
                onChange={() => filterWithCheckBox('nation', 'USA')}
                type="radio" name="filter" id="USA" />
              <label className="filter__item filter__Nation-item" htmlFor="USA">Mỹ</label>
            </span>

            <span>
              <input
                checked={stateChecked === 'China' ? true : false}
                onChange={() => filterWithCheckBox('nation', 'China')}
                type="radio" name="filter" id="China" />
              <label className="filter__item filter__Nation-item" htmlFor="China">Trung Quốc</label>
            </span>

          </div>
        </div>

        {/* Loc theo giá */}

      </div>
    );
  }
  return (
    <>
      {/* breadcrumb */}
      <div className="page-banner     container-fluid ">
        <div className=" page-banner__content ">
          <div className=" breadcrumb-title ">Danh mục sản phẩm</div>

          <div className="page-banner__hr-line" />

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="./index.html">TRANG CHỦ</a></li>
              <li className="breadcrumb-item" aria-current="page">DANH MỤC</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* breadcrumb */}

      {/* Section Products List */}
      <section className=" section-products-list   container-fluid ">
        <div className="products__container container">
          {/* DESKTOP Khối lọc cố định bên trái */}
          <FilterBrandsComponent />


          {/* Nền đen che mờ  */}
          <div onClick={toggleFilterMobile}
            className={` ${stateToggleFilterMobile ? 'd-block' : 'd-none'}  mobile-filter-backdrop`}  >
          </div>
          {/* Start Khối lọc màn MOBILE ẩn bên trái */}
          <div className={` ${stateToggleFilterMobile ? 'mobile-products__filter-open' : 'mobile-products__filter-close '} mobile-products__filter`} >
            <div onClick={toggleFilterMobile}
              className="btn-close-filter"> <i className="fas fa-times" />
            </div>

            <h4 className="section-title filter-title">LỌC SẢN PHẨM</h4>

            <div className="remove-filter-container">
              <button className="section__btn remove-filter__btn">XÓA LỌC</button>
            </div>
            {/* MOBILE - Lọc theo thương hiệu */}
            <div className=" filter__brands">
              <h4 className="section-title    filter-title">
                LỌC THEO THƯƠNG HIỆU
              </h4>
              <div className="filter__list">
                <span>
                  <input
                    checked={stateChecked === '4 Acoustic' ? true : false}
                    onChange={() => filterWithCheckBox('brand', '4 Acoustic')}
                    type="radio"
                    id="4 Acoustic"
                    name="mobile_filter"
                  />

                  <label
                    className="filter__item filter__brand-item"
                    htmlFor="4 Acoustic"
                  >
                    4 Acoustic
                  </label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'Nexo' ? true : false}
                    onChange={() => filterWithCheckBox('brand', 'Nexo')}
                    type="radio"
                    id="Nexo"
                    name="mobile_filter"

                  />
                  <label className="filter__item filter__brand-item" htmlFor="Nexo">
                    Nexo
                  </label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'Adamson' ? true : false}
                    onChange={() => filterWithCheckBox('brand', 'Adamson')}
                    type="radio"
                    id="Adamson"
                    name="mobile_filter"

                  />
                  <label
                    className="filter__item filter__brand-item"
                    htmlFor="Adamson"
                  >
                    Adamson
                  </label>
                </span>
                <span>
                  <input
                    checked={stateChecked === 'Amate' ? true : false}
                    onChange={() => filterWithCheckBox('brand', 'Amate')}
                    type="radio"
                    id="Amate"
                    name="mobile_filter"

                  />
                  <label
                    className="filter__item filter__brand-item"
                    htmlFor="Amate"
                  >
                    Amate
                  </label>
                </span>
                <span>
                  <input
                    checked={stateChecked === 'Kuledy' ? true : false}
                    onChange={() => filterWithCheckBox('brand', 'Kuledy')}
                    type="radio"
                    id="Kuledy"
                    name="mobile_filter"

                  />
                  <label
                    className="filter__item filter__brand-item"
                    htmlFor="Kuledy"
                  >
                    Kuledy
                  </label>
                </span>

                <span>

                  <input
                    checked={stateChecked === 'DK' ? true : false}
                    onChange={() => filterWithCheckBox('brand', 'DK')}
                    type="radio" id="DK" name="mobile_filter" />
                  <label className="filter__item filter__brand-item" htmlFor="DK">
                    DK
                  </label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'Baiervires' ? true : false}
                    onChange={() => filterWithCheckBox('brand', 'Baiervires')}
                    type="radio"
                    id="Baiervires"
                    name="mobile_filter"
                  />
                  <label
                    className="filter__item filter__brand-item"
                    htmlFor="Baiervires"
                  >
                    Baiervires
                  </label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'HOUS' ? true : false}
                    onChange={() => filterWithCheckBox('brand', 'HOUS')}
                    type="radio"
                    id="Hous"
                    name="mobile_filter"

                  />
                  <label className="filter__item filter__brand-item" htmlFor="Hous">
                    Hous
                  </label>
                </span>
                <span>
                  <input
                    checked={stateChecked === 'Pioneer' ? true : false}
                    onChange={() => filterWithCheckBox('brand', 'Pioneer')}
                    type="radio"
                    id="Pioneer Dj"
                    name="mobile_filter"

                  />
                  <label
                    className="filter__item filter__brand-item"
                    htmlFor="Pioneer Dj"
                  >
                    Pioneer Dj
                  </label>
                </span>
              </div>
            </div>
            {/* MOBILE - Lọc theo loại sản phẩm */}
            <div className=" filter__type">
              <h4 className="section-title filter-title">LỌC THEO LOẠI SẢN PHẨM</h4>
              <div className="filter__type-list filter__list">

                <span>
                  <input
                    checked={stateChecked === 'Subwoofer' ? true : false}
                    onChange={() => filterWithCheckBox('type', 'Subwoofer')}
                    type="radio" name="mobile_filter" id="Subwoofer" value="Subwoofer" />
                  <label
                    className="filter__item filter__type-item"
                    htmlFor="Subwoofer"
                  >
                    Subwoofer
                  </label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'Full range' ? true : false}
                    onChange={() => filterWithCheckBox('type', 'Full range')}
                    type="radio" name="mobile_filter"
                    id="full-range"

                  />
                  <label
                    className="filter__item filter__type-item"
                    htmlFor="full-range"
                  >
                    Full range
                  </label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'Line Array' ? true : false}
                    onChange={() => filterWithCheckBox('type', 'Line Array')}
                    type="radio" name="mobile_filter"
                    id="Line-array"

                  />
                  <label
                    className="filter__item filter__type-item"
                    htmlFor="Line-array"
                  >
                    Line array
                  </label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'amplifier' ? true : false} onChange={() => filterWithCheckBox('type', 'amplifier')}
                    type="radio" name="mobile_filter" id="Amplifier" />
                  <label
                    className="filter__item filter__type-item"
                    htmlFor="Amplifier"
                  >
                    Amplifier
                  </label>
                </span>
                <span>

                  <input
                    checked={stateChecked === 'micro' ? true : false} onChange={() => filterWithCheckBox('type', 'micro')}
                    type="radio" name="mobile_filter" id="Micro" />
                  <label className="filter__item filter__type-item" htmlFor="Micro">
                    Micro
                  </label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'Mixer' ? true : false}
                    onChange={() => filterWithCheckBox('type', 'Mixer')}
                    type="radio" name="mobile_filter" id="Mixer" />
                  <label className="filter__item filter__type-item" htmlFor="Mixer">
                    Mixer
                  </label>
                </span>

              </div>
            </div>
            {/* Lọc theo quốc gia */}
            <div className=" filter__nation">
              <h4 className="section-title filter-title">LỌC THEO QUỐC GIA</h4>
              <div className="filter__nation-list filter__list">

                <span>
                  <input
                    checked={stateChecked === 'Germany' ? true : false}
                    onChange={() => filterWithCheckBox('nation', 'Germany')}
                    type="radio" name="mobile_filter" id="Germany" value='Germany' />

                  <label className="filter__item filter__Nation-item" htmlFor="Germany">Đức</label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'French' ? true : false}
                    onChange={() => filterWithCheckBox('nation', 'French')}
                    type="radio" name="mobile_filter" id="France" />
                  <label className="filter__item filter__Nation-item" htmlFor="France">Pháp</label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'Canada' ? true : false}
                    onChange={() => filterWithCheckBox('nation', 'Canada')}
                    type="radio" name="mobile_filter" id="Canada" />
                  <label className="filter__item filter__Nation-item" htmlFor="Canada">Canada</label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'Spain' ? true : false}
                    onChange={() => filterWithCheckBox('nation', 'Spain')}
                    type="radio" name="mobile_filter" id="Spain" />
                  <label className="filter__item filter__Nation-item" htmlFor="Spain">Tây Ban Nha</label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'USA' ? true : false}
                    onChange={() => filterWithCheckBox('nation', 'USA')}
                    type="radio" name="mobile_filter" id="USA" />
                  <label className="filter__item filter__Nation-item" htmlFor="USA">Mỹ</label>
                </span>

                <span>
                  <input
                    checked={stateChecked === 'China' ? true : false}
                    onChange={() => filterWithCheckBox('nation', 'China')}
                    type="radio" name="mobile_filter" id="China" />
                  <label className="filter__item filter__Nation-item" htmlFor="China">Trung Quốc</label>
                </span>

              </div>
            </div>
             {/* Loc theo giá */}
          </div>
          {/* End Khối lọc màn MOBILE ẩn bên trái */}



          {/* Khối danh sách sản phẩm bển phải */}
          <div className="products__wrapper">

            {/* Nút Lọc Ẩn màn MOBILE để thu gọn cột lọc */}
            <div className="mobile-filter-icon">
              <button onClick={toggleFilterMobile}
                className="section__btn mobile-filter__btn">
                <i className="fas fa-filter" />&nbsp;
                <span>LỌC SẢN PHẨM</span>
              </button>
            </div>


            {/* Chọn lọc sản phẩm   */}
            <div className="products__sorts ">
              <div className=" product__search ">
                <input
                  onChange={inputSearchValue}
                  type="search"
                  className="header-component__search-input"
                  placeholder="Tìm kiếm"
                />
                <i onClick={searchProduct} className="fas fa-search"></i>
              </div>

              <div className="products__sort-item products__sort-order">
                <select
                  value={stateSortValueItem}
                  onChange={getSortValue}
                  className="form-select"
                  aria-label="select-sort-order"
                >
                  {/* <option selected>Sắp xếp sản phẩm</option> */}
                  <option value="default">Theo mức độ phổ biến</option>
                  <option value="ascending">Theo giá từ thấp đến cao</option>
                  <option value="descending">Theo giá từ cao đến thấp</option>
                </select>
              </div>

              <div className="products__sort-item   products__sort-page-items">
                <select
                  value={stateLimitOfPaginate}
                  onChange={getLimitOfPaginate}
                  className="form-select"
                  aria-label="select-page-items"
                >
                  <option value={3}>3 sản phẩm/trang</option>
                  <option value={6}>6 sản phẩm/trang</option>
                  <option value={9}>9 sản phẩm/trang</option>
                </select>
              </div>
            </div>

            {/* Danh sách các sản phẩm */}
            <div className=" products-list ">
              <div className=" products-list__inner ">
                {loading
                  ? (<div className="loadding_products-list"></div>)
                  : stateFilterResults.length === 0 && stateInputSearchValue ? ("Không tìm thấy sản phẩm phù hợp!")
                    : (ProductCardElement)}
              </div>
            </div>

            {/* Phân trang */}
            <div className={` ${loading ? 'd-none' : 'products__pagination'}  `}>
              <nav aria-label="page-navigation">
                <Pagination>
                  {items}
                </Pagination>
              </nav>
            </div>
            {/* Phân trang  */}
          </div>
        </div>
      </section>

      {/* Email nhận tin tức mới */}
      <Newsletter />
    </>
  );
}

export default ProductsPage;
