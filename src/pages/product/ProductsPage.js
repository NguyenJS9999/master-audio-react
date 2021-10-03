import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./ProductsPage.css";
import "../../App.css";

// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";
import Newsletter from "../../newsletter/NewsLetter"
import { addProduct } from "../../store/cartSlice"

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
  // Redux
  const dispatch = useDispatch();
  // console.log('dispatch', dispatch)

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
    console.log("Giá trị ô select sort item:", stateSortValueItem);
  }

  // Lấy giá trị phân trang trong select dropdown
  function getLimitOfPaginate(event) {
    setLimitOfPaginate(event.target.value);
    console.log("Số sp 1 trang:", stateSortValueItem);
  }
  // Phân Trang - Lấy giá trị 1 nút phân trang
  function getNumOfPaginate(num) {
    setNumOfPaginate(num);
    console.log("Số trả về của 1 phân trang:", stateNumOfPaginate, 'num', num);
  }
  // Tích checkbox để lọc sp
  function filterWithCheckBox(textFilter) {
    console.log('Lọc với check-box, textFilter', textFilter);
    async function filterProduct() {
      const response = await fetch(
        `https://rest-api-nodejs-reactjs-router.herokuapp.com/products/?q=${textFilter}  `
      );
      const result = await response.json();
      setProducts(result);
    }
    filterProduct()

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

          <button onClick={() => dispatch(addProduct(1))}
            className="btn-addtocart product-card__btn">
            <i className="fas fa-shopping-cart" />
            <span>Thêm vào giỏ hàng</span>
          </button>

        </div>
      </div>
    </div>
  ));

  function FilterBrandsComponent() {
    return (
      <div className="products__filter">
        <h4 className=" section-title    products__filter-title">
          TÌM SẢN PHẨM
        </h4>
        {/* Seacrch */}

        {/* Lọc theo thương hiệu */}
        <div className=" filter__brands">
          <h4 className="section-title    filter-title">
            LỌC THEO THƯƠNG HIỆU
          </h4>
          <div className="filter__list">
            <span>
              <input
                onClick={() => filterWithCheckBox('4 Acoustic')}
                type="radio"
                id="4 Acoustic"
                name="filter"
                defaultValue="4 Acoustic"
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
                onClick={() => filterWithCheckBox('Nexo')}
                type="radio"
                id="Nexo"
                name="filter"
                defaultValue="Nexo"
              />
              <label className="filter__item filter__brand-item" htmlFor="Nexo">
                Nexo
              </label>
            </span>
            <span>
              <input
                onClick={() => filterWithCheckBox('Adamson')}
                type="radio"
                id="Adamson"
                name="filter"
                defaultValue="Adamson"
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
                onClick={() => filterWithCheckBox('Amate')}
                type="radio"
                id="Amate"
                name="filter"
                defaultValue="Amate"
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
                onClick={() => filterWithCheckBox('Kuledy')}
                type="radio"
                id="Kuledy"
                name="filter"
                defaultValue="Kuledy"
              />
              <label
                className="filter__item filter__brand-item"
                htmlFor="Kuledy"
              >
                Kuledy
              </label>
            </span>

            <span>
              <input onClick={() => filterWithCheckBox('DK')}
                type="radio" id="DK" name="filter" defaultValue="DK" />
              <label className="filter__item filter__brand-item" htmlFor="DK">
                DK
              </label>
            </span>

            <span>
              <input
                onClick={() => filterWithCheckBox('Baiervires')}
                type="radio"
                id="Baiervires"
                name="filter"
                defaultValue="Baiervires"
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
                onClick={() => filterWithCheckBox('Hous')}
                type="radio"
                id="Hous"
                name="filter"
                defaultValue="Hous"
              />
              <label className="filter__item filter__brand-item" htmlFor="Hous">
                Hous
              </label>
            </span>
            <span>
              <input
                onClick={() => filterWithCheckBox('Pioneer Dj')}
                type="radio"
                id="Pioneer Dj"
                name="filter"
                defaultValue="Pioneer Dj"
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
              <input onClick={() => filterWithCheckBox('Subwoofer')}
                type="radio" name="filter" id="Subwoofer" defaultValue="Subwoofer" />
              <label
                className="filter__item filter__type-item"
                htmlFor="Subwoofer"
              >
                Subwoofer
              </label>
            </span>

            <span>
              <input
                onClick={() => filterWithCheckBox('full-range')}
                type="radio" name="filter"
                id="full-range"
                defaultValue="full-range"
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
                onClick={() => filterWithCheckBox('line-array')}
                type="radio" name="filter"
                id="Line-array"
                defaultValue="line-array"
              />
              <label
                className="filter__item filter__type-item"
                htmlFor="Line-array"
              >
                Line array
              </label>
            </span>

            {/* <span>
              <input onClick={() => filterWithCheckBox('Line array')}
                type="radio" name="filter" id="Mid-low" defaultValue="Mid low" />
              <label
                className="filter__item filter__type-item"
                htmlFor="Mid-low"
              >

                Mid low
              </label>
            </span> */}

            <span>

              <input onClick={() => filterWithCheckBox('amplifier')}
                type="radio" name="filter" id="Amplifier" defaultValue="amplifier" />
              <label
                className="filter__item filter__type-item"
                htmlFor="Amplifier"
              >
                Amplifier
              </label>
            </span>
            <span>

              <input onClick={() => filterWithCheckBox('micro')}
                type="radio" name="filter" id="Micro" defaultValue="micro" />
              <label className="filter__item filter__type-item" htmlFor="Micro">
                Micro
              </label>
            </span>

            {/* <span>
              <input
                onClick={() => filterWithCheckBox('Digital echo')}
                type="radio" name="filter"
                id="Digital-echo"
                defaultValue="Digital echo"
              />
              <label
                className="filter__item filter__type-item"
                htmlFor="Digital-echo"
              >
                Digital echo
              </label>
            </span> */}

            <span>
              <input onClick={() => filterWithCheckBox('Mixer')}
                type="radio" name="filter" id="Mixer" defaultValue="Mixer" />
              <label className="filter__item filter__type-item" htmlFor="Mixer">
                Mixer
              </label>
            </span>

            {/* <span>
              <input
                onClick={() => filterWithCheckBox('Auto power')}
                type="radio" name="filter"
                id="Auto-power"
                defaultValue="Auto power"
              />
              <label
                className="filter__item filter__type-item"
                htmlFor="Auto-power"
              >
                Auto power
              </label>
            </span> */}

          </div>
        </div>
        {/* Loc theo giá */}

      </div>
    );
  }
  return (
    <>
      {/* Section Products List */}
      <section className=" section-products-list   container-fluid ">
        <div className="products__container container">
          {/* Khối lọc bên trái */}
          <FilterBrandsComponent />

          {/* Khối danh sách sản phẩm bển phải */}
          <div className="products__wrapper">
            {/* Nút lọc màn mobile - thu gọn cột lọc */}
            <div className="mobile-filter-icon">
              <button className="section__btn mobile-filter__btn">
                <i className="fas fa-filter" />
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
                  ? (<div className="loadding_products-list"> Đang tải các sản phẩm, xin chờ... </div>)
                  : stateFilterResults.length === 0 && stateInputSearchValue ? ("Không tìm thấy sản phẩm phù hợp!")
                    : (ProductCardElement)}
              </div>
            </div>

            {/* Phân trang */}
            <div className="products__pagination">
              <nav aria-label="page-navigation">
                <ul className="pagination">

                  <li className="pagination-item">
                    <div className="pagination-link page-prev" aria-label="Previous" >
                      <i className="fas fa-chevron-left" />
                    </div>
                  </li>

                  <li className="pagination-item">
                    <div onClick={() => getNumOfPaginate(1)} className="pagination-link">1</div>
                  </li>

                  <li className="pagination-item">
                    <div onClick={() => getNumOfPaginate(2)} className="pagination-link">2</div>
                  </li>

                  <li className="pagination-item">
                    <div onClick={() => getNumOfPaginate(3)} className="pagination-link">3</div>
                  </li>

                  <li className="pagination-item">
                    <div onClick={() => getNumOfPaginate(4)} className="pagination-link">4</div>
                  </li>

                  <li className="pagination-item">
                    <div onClick={() => getNumOfPaginate(5)} className="pagination-link">5</div>
                  </li>

                  <li className="pagination-item page-next">
                    <div className="pagination-link" aria-label="Next">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </li>

                </ul>
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
