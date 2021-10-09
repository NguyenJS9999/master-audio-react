import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";

// import NavigationCss from "./navigation.module.css";
import "./Navigation.css";


function NavigationPage() {
  const [ stateStatusMenuMobile, setStatusCategory ] = useState(false);
  const shoppingList = useSelector((state) => state.cart.listProductCart);
  const [ stateQuantityAllItem , setQuantityAllItem ] = useState( 0 );
  
  // Lấy ra số lượng từng Loại sp và cộng lại = số sp
  useEffect( () => {
    let cloneQuantityItem = shoppingList.map( (obj) => obj.quantity)
    console.log('cloneQuantityItem', cloneQuantityItem)
    let sum = 0;
    cloneQuantityItem.forEach(function(numberQuantity) {
      sum += numberQuantity;
    })
    setQuantityAllItem(sum)
  }, [shoppingList])

  // Tắt bật menu hambeger
  function toggleMenuHiddenMobile() {
    if (stateStatusMenuMobile === true) {
      setStatusCategory(false);
    } else {
      setStatusCategory(true);
    }
  }
  // Ấn X ẩn munu hamber
  function closeMenuMobile() {
    setStatusCategory(false);
  }

  return (
    <>
      <header>
        {/* container-nav-1 :)*/}
        <div className="  container-nav-1  container-fluid  ">
          {/* Start navigation 1 */}
          <nav className=" navigation-mobile-container   container-fluid">
            {/* Start navigation mobile */}
            <div className=" navigation-mobile  container-fluid ">
              <div className="icon-menu-search">

                {/* Menu Hambeger ẩn màn iphone - Home - Xây dựng cấu hình */}
                <div onClick={toggleMenuHiddenMobile} className=" icon-menu-hidden-mobile  ">
                  <i className="fas fa-bars" />
                </div>

                {/* Icon tìm kiếm Màn min992 */}
                <div className=" icon-search-hidden-mobile-992  ">
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="logo-master-audio">
                <Link to="/">
                  <img
                    src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/logo/logo.png"
                    alt="logo"
                  />
                </Link>
              </div>
              {/* Icon tìm kiếm màn max576 */}
              <div className=" icon-search-hidden-mobile-min576  ">
                <i className="fas fa-search" />
              </div>
              {/* cart / login Mobile max576 */}
              <div className="cart-login-mobile">
                {/* cart mobile */}
                <Link to="/shopping-cart" className="cart-icon">
                  <span>
                    <i className="fas fa-shopping-cart" />
                    <span className=" cart-number-items ">{stateQuantityAllItem}</span>
                  </span>
                </Link>
                {/* Like mobile */}
                <Link to="/wish-list" className="liked-product-wishlist ">
                  <div className="wishlist-status ">
                    <i className="fas fa-heart" />
                    <span className=" wishlist-number ">
                      <span></span>
                    </span>
                  </div>
                </Link>
                {/* User mobile */}
                <div className=" mobile-account   login-register-btn ">
                  <div className="login-status">
                    <i className="fas fa-user" />
                  </div>
                </div>
              </div>{" "}
              {/* cart / login */}
              {/* menu cố định đáy chuyển từ nav2 ẩn lên thành hambeger màn max576*/}
              <div className="mobile-header-components">
                {/* 1 */}
                <div className="component-wrapper">
                  <div className="mobile-component mobile-home">
                    <NavLink to="/" activeClassName="high-light__menu-bottom" exact>
                      <i className="fas fa-home" />
                      <span>Trang chủ</span>
                    </NavLink>
                  </div>
                  {/* 2 */}
                  <div className=" mobile-component    mobile-wishlist ">
                    <NavLink to="/wish-list" activeClassName="high-light__menu-bottom">
                      <div className="mobile-wishlist-status ">
                        <i className="fas fa-heart" />
                        <span className=" mobile-wishlist-number ">
                          <span></span>
                        </span>
                      </div>
                      <span>Yêu thích</span>
                    </NavLink>
                  </div>
                  {/* 3 */}
                  <div className="mobile-component mobile-cart">
                    <NavLink to="/shopping-cart" activeClassName="high-light__menu-bottom">
                      <div className="mobile-cart-status">
                        <i className="fas fa-shopping-cart" />
                        <span className="mobile-cart-number">{stateQuantityAllItem}</span>
                      </div>
                      <span>Giỏ hàng</span>
                    </NavLink>
                  </div>
                  {/* 4 */}
                  <div className="mobile-component mobile-account">
                    <div className="mobile-account-div">
                      <div className="mobile-accoun-login-status">
                        <i className="fas fa-user" />
                      </div>
                      <span>Tài khoản</span>
                    </div>
                  </div>

                </div>
              </div>
              {/* menu cố định đáy */}
            </div>
          </nav>{" "}
          {/* End navigation mobile */}
          {/* Start navigation desktop*/}
          <nav className=" navigation-desktop-container   container ">
            <div className="navigation-desktop   container">
              <div className="logo-master-audio">
                <Link to="/">
                  <img
                    src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/logo/logo.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className=" search-header-desktop ">
                <span>
                  <input type="text" placeholder="Tìm kiếm" />
                  <i className="fas fa-search" />
                </span>
              </div>
              {/* cart / login desktop*/}
              <div className="cart-login">
                <Link to="/shopping-cart" className="cart-icon">
                  <div>
                    <i className="fas fa-shopping-cart" />
                    <span className=" cart-number-items ">{stateQuantityAllItem}</span>
                  </div>
                </Link>
                {/* Like desktop */}
                <Link to="/wish-list" className="liked-product-wishlist ">
                  <div className="wishlist-status ">
                    <i className="fas fa-heart" />
                    <span className=" wishlist-number ">
                      <span></span>
                    </span>
                  </div>
                </Link>
                {/* User desktop */}
                <div className=" login-register-btn   mobile-account ">
                  <div className="login-status">
                    <i className="fas fa-user"> </i>
                  </div>
                </div>
              </div>{" "}
              {/* cart / login */}
            </div>{" "}
            {/* navigation-desktop */}
          </nav>
          {/* End navigation desktop 1*/}
        </div>
        {/* container-nav-1 */}

        {/* Moadal Đăng nhập / đăng kí */}
        <div className=" login-register-container   container-fluid ">
          Đăng nhập đăng kí
        </div>
        {/* Moadal Đăng nhập / đăng kí */}

        {/* **************************************************************************** */}

        {/* container Navigation 2 Mobile Danh mục sán phẩm, menu */}
        <div className="  container-nav-2  container-fluid  ">
          <div className="  container-category-menu  container ">
            <div className=" nav-2-category  ">
              {/* onClick={toggleCategory}  */}
              <div className=" nav-2-category-title  ">
                Danh mục sản phẩm&nbsp;&nbsp;
                <i className="fas fa-sort-down   sort-down-category " />
              </div>

              <div className=" categorys-position ">
                {/* <ul className={`${stateStatusCategory ? "d-flex" : "d-none" } categorys  `} > */}
                <ul className={` categorys  `} >

                  {/* 1 */}
                  <li className=" category ">
                    <Link to="/products">
                      <span>Loa fullrange</span>
                      <i className="fas fa-angle-right   category-right-arrow " />
                    </Link>
                    <div className=" submenu-container ">
                      <ul className=" submenu ">
                        <li className="submenu-items">
                          <p>Loa fullrange theo thương hiệu</p>
                          <Link to="/products/4-Acoustic">4 Acoustic</Link>
                          <Link to="/products">Nexo</Link>
                          <Link to="/products">Adamson</Link>
                          <Link to="/products">Amate</Link>
                          <Link to="/products">Kukedy</Link>
                          <Link to="/products">DK</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* 2 */}
                  <li className=" category ">
                    <Link to="/products">
                      <span>Loa subwoofer</span>
                      <i className="fas fa-angle-right   category-right-arrow " />
                    </Link>
                    <div className=" submenu-container ">
                      <ul className=" submenu ">
                        <li className="submenu-items">
                          <p>Loa subwoofer theo thương hiệu</p>
                          <Link to="/products">4 Acoustic</Link>
                          <Link to="/products">Nexo</Link>
                          <Link to="/products">Adamson</Link>
                          <Link to="/products">Amate</Link>
                          <Link to="/products">Kukedy</Link>
                          <Link to="/products">DK</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* 3 */}
                  <li className=" category ">
                    <Link to="/products">
                      <span>Loa line array</span>
                      <i className="fas fa-angle-right   category-right-arrow " />
                    </Link>
                    <div className=" submenu-container ">
                      <ul className=" submenu ">
                        <li className="submenu-items">
                          <p>Loa line array theo thương hiệu</p>
                          <Link to="/products">4 Acoustic</Link>
                          <Link to="/products">Nexo</Link>
                          <Link to="/products">Adamson</Link>
                          <Link to="/products">Amate</Link>
                          <Link to="/products">Kukedy</Link>
                          <Link to="/products">DK</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* 4 */}
                  <li className=" category ">
                    <Link to="/products">
                      <span>Đẩy công suất</span>
                      <i className="fas fa-angle-right   category-right-arrow " />
                    </Link>
                    <div className=" submenu-container ">
                      <ul className=" submenu ">
                        <li className="submenu-items">
                          <p>Đẩy công suất theo thương hiệu</p>
                          <Link to="/products">4 Acoustic</Link>
                          <Link to="/products">Nexo</Link>
                          <Link to="/products">Adamson</Link>
                          <Link to="/products">Amate</Link>
                          <Link to="/products">Kukedy</Link>
                          <Link to="/products">DK</Link>
                          <Link to="/products">Hours</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* 5 */}
                  <li className=" category ">
                    <Link to="/products">
                      <span>Vang Số - DSP</span>
                      <i className="fas fa-angle-right   category-right-arrow " />
                    </Link>
                    <div className=" submenu-container ">
                      <ul className=" submenu ">
                        <li className="submenu-items">
                          <p>Vang Số - DSP theo thương hiệu</p>
                          <Link to="/products">4 Acoustic</Link>
                          <Link to="/products">Vainal</Link>
                          <Link to="/products">Nexo</Link>
                          <Link to="/products">Amate</Link>
                          <Link to="/products">Kukedy</Link>
                          <Link to="/products">Zongson</Link>
                          <Link to="/products">Marani</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* 6 */}
                  <li className=" category ">
                    <Link to="/products">
                      <span>Mixcer</span>
                      <i className="fas fa-angle-right   category-right-arrow " />
                    </Link>
                    <div className=" submenu-container ">
                      <ul className=" submenu ">
                        <li className="submenu-items">
                          <p>Mixcer theo thương hiệu</p>
                          <Link to="/products">Pioneer-dj</Link>
                          <Link to="/products">Allen &amp; Heath </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* 7 */}
                  <li className=" category ">
                    <Link to="/products">
                      <span>Micro không dây</span>
                      <i className="fas fa-angle-right   category-right-arrow " />
                    </Link>
                    <div className=" submenu-container ">
                      <ul className=" submenu ">
                        <li className="submenu-items">
                          <p>Micro không dây theo thương hiệu</p>
                          <Link to="/products">Baiervires</Link>
                          <Link to="/products">DK</Link>
                          <Link to="/products">DB acoustic</Link>
                          <Link to="/products">Maingo</Link>
                          <Link to="/products">VTA</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* 8 */}
                  <li className=" category ">
                    <Link to="/products">
                      <span>Quản lý nguồn</span>
                      <i className="fas fa-angle-right   category-right-arrow " />
                    </Link>
                    <div className=" submenu-container ">
                      <ul className=" submenu ">
                        <li className="submenu-items">
                          <p>Quản lý nguồn theo thương hiệu</p>
                          <Link to="/products">Kuledy</Link>
                          <Link to="/products">VTA</Link>
                          <Link to="/products">dBacoustic</Link>
                          <Link to="/products">Kukedy</Link>
                          <Link to="/products">MK</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* 9 */}
                  <li className=" category ">
                    <Link to="/products">
                      <span>Phụ kiện âm Thanh</span>
                      <i className="fas fa-angle-right   category-right-arrow " />
                    </Link>
                    <div className=" submenu-container ">
                      <ul className=" submenu ">
                        <li className="submenu-items">
                          <p>Phụ kiện từ các hãng</p>
                          <Link to="/products">Tủ kĩ thuật</Link>
                          <Link to="/products">Chân loa</Link>
                          <Link to="/products">Cọc loa</Link>
                          <Link to="/products">Dây jack</Link>
                          <Link to="/products">Treo loa</Link>
                          <Link to="/products">Khung treo loa</Link>
                          <Link to="/products">Khác ...</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* 10 */}
                  <li className=" category ">
                    <Link to="/products">
                      <span>Combo âm thanh gia đình</span>
                      <i className="fas fa-angle-right   category-right-arrow " />
                    </Link>
                    <div className=" submenu-container ">
                      <ul className=" submenu ">
                        <li className="submenu-items">
                          <p>Combo theo giá</p>
                          <Link to="/products">Combo từ 20 - 30 triệu</Link>
                          <Link to="/products">Combo từ 30 - 50 triệu</Link>
                          <Link to="/products">Combo từ 50 - 70 triệu</Link>
                          <Link to="/products">Combo từ 120 - 150 triệu</Link>
                          <Link to="/products">Combo từ 150 - 200 triệu</Link>
                        </li>
                        <li className="submenu-items">
                          <p>Combo theo thương hiệu</p>
                          <Link to="/products">4 Acoustic</Link>
                          <Link to="/products">Nexo</Link>
                          <Link to="/products">Adamson</Link>
                          <Link to="/products">Amate</Link>
                          <Link to="/products">Kukedy</Link>
                          <Link to="/products">DK</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* 11 */}
                  <li className=" category ">
                    <Link to="/products">
                      <span>Combo phòng phim</span>
                      <i className="fas fa-angle-right   category-right-arrow " />
                    </Link>
                    <div className=" submenu-container ">
                      <ul className=" submenu ">
                        <li className="submenu-items">
                          <p>Combo theo giá</p>
                          <Link to="/products">Combo từ 20 - 30 triệu</Link>
                          <Link to="/products">Combo từ 30 - 50 triệu</Link>
                          <Link to="/products">Combo từ 50 - 70 triệu</Link>
                          <Link to="/products">Combo từ 120 - 150 triệu</Link>
                          <Link to="/products">Combo từ 150 - 200 triệu</Link>
                        </li>
                        <li className="submenu-items">
                          <p>Combo theo thương hiệu</p>
                          <Link to="/products">4 Acoustic</Link>
                          <Link to="/products">Nexo</Link>
                          <Link to="/products">Adamson</Link>
                          <Link to="/products">Amate</Link>
                          <Link to="/products">Kukedy</Link>
                          <Link to="/products">DK</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* 12 */}
                  <li className=" category ">
                    <Link to="/products">
                      <span>Combo âm thanh hội trường</span>
                      <i className="fas fa-angle-right   category-right-arrow " />
                    </Link>
                    <div className=" submenu-container ">
                      <ul className=" submenu ">
                        <li className="submenu-items">
                          <p>Combo theo giá</p>
                          <Link to="/products">Combo từ 20 - 30 triệu</Link>
                          <Link to="/products">Combo từ 30 - 50 triệu</Link>
                          <Link to="/products">Combo từ 50 - 70 triệu</Link>
                          <Link to="/products">Combo từ 120 - 150 triệu</Link>
                          <Link to="/products">Combo từ 150 - 200 triệu</Link>
                        </li>
                        <li className="submenu-items">
                          <p>Combo theo thương hiệu</p>
                          <Link to="/products">4 Acoustic</Link>
                          <Link to="/products">Nexo</Link>
                          <Link to="/products">Adamson</Link>
                          <Link to="/products">Amate</Link>
                          <Link to="/products">Kukedy</Link>
                          <Link to="/products">DK</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" nav-2-menu ">
              <NavLink to="/" activeClassName="active" exact>
                <i className="fas fa-home" />
                &nbsp;Trang chủ
              </NavLink>

              <NavLink to="/build-config" activeClassName="active">
                <i className="fas fa-tools" />
                &nbsp;Xây dựng cấu hình
              </NavLink>

              <NavLink to="/typical-projects" activeClassName="active">
                <i className="fas fa-users-cog" />
                &nbsp;CÔNG TRÌNH TIÊU BIỂU
              </NavLink>

              <NavLink to="/news" activeClassName="active">
                <i className="far fa-newspaper" />
                &nbsp;Tin tức
              </NavLink>

              <NavLink to="/contact" activeClassName="active">
                <i className="fas fa-map-marked-alt" /> Liên hệ
              </NavLink>

            </div>
          </div>
        </div>
        {/* container Navigation 2 Mobile Danh mục sán phẩm, menu  */}

        {/*  d-none  Nav Menu2 Ẩn - thu gọn - nền xám */}
        {/* <div className=" backdrop-bg "></div> */}
        <div onClick={closeMenuMobile}
          className={` ${stateStatusMenuMobile ? "d-flex" : "d-none"}  backdrop-bg `} >
        </div>
        {/* Menu ẩn nhỏ bên trái màn hình */}

        <div className={` ${stateStatusMenuMobile ? "mobile-nav-bar__translate-left" : "d-none"} mobile-nav-bar `} >

          <div onClick={closeMenuMobile}
            className="btn-close-menu" type="button">
            <i className="fas fa-times" />
          </div>

          {/* 1 - Logo menu hidden */}
          <div className=" mobile-menu__item-logo ">
            <div className="logo-master-audio ">
              <Link to="/">
                <img
                  src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/logo/logo.png"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          {/* 2 - Input tìm kiếm sp bất kì */}
          <div className=" search-collapse">
            <input type="text" placeholder="Tìm kiếm" />
          </div>
          {/* 3 - accordion Tuôn ra giữa Menu và danh mục */}
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {/* 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Menu
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {/*Menu con bên trong accodion được ẩn cuộn ẩn đi */}
                  <div className=" menu-collapse ">
                    <span>
                      <NavLink to="/" activeClassName="active" exact>
                        <div>Trang chủ</div>
                      </NavLink>
                    </span>
                    <span>
                      <NavLink to="/build-config" activeClassName="active">
                        <div>Xây dựng cấu hình</div>
                      </NavLink>
                    </span>
                    <span>
                      <NavLink to="/typical-projects" activeClassName="active">
                        <div>CÔNG TRÌNH TIÊU BIỂU</div>
                      </NavLink>
                    </span>
                    <span>
                      <NavLink to="/news" activeClassName="active">
                        <div>Tin tức</div>
                      </NavLink>
                    </span>
                    <span>
                      <NavLink to="/contact" activeClassName="active">
                        <div>Liên hệ</div>
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-heading-category">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse-category"
                  aria-expanded="false"
                  aria-controls="flush-collapse-category"
                >
                  Danh mục sản phẩm
                </button>
              </h2>
              {/* Các danh mục con chính */}
              <div
                id="flush-collapse-category"
                className="accordion-collapse collapse"
                aria-labelledby="flush-heading-category"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {/* Danh mục con các sản phẩm - Accordion Luôn mở */}
                  <ul className=" categorys-hide ">
                    {/* 1 */}
                    <li className=" category-hide ">
                      <span className=" category-hide-title ">
                        <Link to="/products">
                          <div>Loa fullrange</div>
                        </Link>
                        <i className="fas fa-angle-right  category-hide-right-arrow " />
                      </span>
                      <div className=" submenu-hide-container ">
                        <ul className=" submenu-hide ">
                          <li className="submenu-hide-items">
                            <p>Loa fullrange theo thương hiệu</p>
                            <Link to="/products">4 Acoustic</Link>
                            <Link to="/products">Nexo</Link>
                            <Link to="/products">Adamson</Link>
                            <Link to="/products">Amate</Link>
                            <Link to="/products">Kukedy</Link>
                            <Link to="/products">DK</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 2 */}
                    <li className=" category-hide ">
                      <span
                        className=" category-hide-title "
                        href="./product.html"
                      >
                        <div>Loa subwoofer</div>
                        <i className="fas fa-angle-right   category-hide-right-arrow " />
                      </span>
                      <div className=" submenu-hide-container ">
                        <ul className=" submenu-hide ">
                          <li className="submenu-hide-items">
                            <p>Loa subwoofer theo thương hiệu</p>
                            <Link to="/products">4 Acoustic</Link>
                            <Link to="/products">Nexo</Link>
                            <Link to="/products">Adamson</Link>
                            <Link to="/products">Amate</Link>
                            <Link to="/products">Kukedy</Link>
                            <Link to="/products">DK</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 3 */}
                    <li className=" category-hide ">
                      <span
                        className=" category-hide-title "
                        href="./product.html"
                      >
                        <div>Loa line array</div>
                        <i className="fas fa-angle-right   category-hide-right-arrow " />
                      </span>
                      <div className=" submenu-hide-container ">
                        <ul className=" submenu-hide ">
                          <li className="submenu-hide-items">
                            <p>Loa line array theo thương hiệu</p>
                            <Link to="/products">4 Acoustic</Link>
                            <Link to="/products">Nexo</Link>
                            <Link to="/products">Adamson</Link>
                            <Link to="/products">Amate</Link>
                            <Link to="/products">Kukedy</Link>
                            <Link to="/products">DK</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 4 */}
                    <li className=" category-hide ">
                      <span
                        className=" category-hide-title "
                        href="./product.html"
                      >
                        <div>Đẩy công suất</div>
                        <i className="fas fa-angle-right   category-hide-right-arrow " />
                      </span>
                      <div className=" submenu-hide-container ">
                        <ul className=" submenu-hide ">
                          <li className="submenu-hide-items">
                            <p>Đẩy công suất theo thương hiệu</p>
                            <Link to="/products">4 Acoustic</Link>
                            <Link to="/products">Nexo</Link>
                            <Link to="/products">Adamson</Link>
                            <Link to="/products">Amate</Link>
                            <Link to="/products">Kukedy</Link>
                            <Link to="/products">DK</Link>
                            <Link to="/products">Hours</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 5 */}
                    <li className=" category-hide ">
                      <span
                        className=" category-hide-title "
                        href="./product.html"
                      >
                        <div>Vang Số - DSP</div>
                        <i className="fas fa-angle-right   category-hide-right-arrow " />
                      </span>
                      <div className=" submenu-hide-container ">
                        <ul className=" submenu-hide ">
                          <li className="submenu-hide-items">
                            <p>Vang Số - DSP theo thương hiệu</p>
                            <Link to="/products">4 Acoustic</Link>
                            <Link to="/products">Vainal</Link>
                            <Link to="/products">Nexo</Link>
                            <Link to="/products">Amate</Link>
                            <Link to="/products">Kukedy</Link>
                            <Link to="/products">Zongson</Link>
                            <Link to="/products">Marani</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 6 */}
                    <li className=" category-hide ">
                      <span
                        className=" category-hide-title "
                        href="./product.html"
                      >
                        <div>Mixcer</div>
                        <i className="fas fa-angle-right   category-hide-right-arrow " />
                      </span>
                      <div className=" submenu-hide-container ">
                        <ul className=" submenu-hide ">
                          <li className="submenu-hide-items">
                            <p>Mixcer theo thương hiệu</p>
                            <Link to="/products">Pioneer-dj</Link>
                            <Link to="/products">Allen &amp; Heath </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 7 */}
                    <li className=" category-hide ">
                      <span
                        className=" category-hide-title "
                        href="./product.html"
                      >
                        <div>Micro không dây</div>
                        <i className="fas fa-angle-right   category-hide-right-arrow " />
                      </span>
                      <div className=" submenu-hide-container ">
                        <ul className=" submenu-hide ">
                          <li className="submenu-hide-items">
                            <p>Micro không dây theo thương hiệu</p>
                            <Link to="/products">Baiervires</Link>
                            <Link to="/products">DK</Link>
                            <Link to="/products">DB acoustic</Link>
                            <Link to="/products">Maingo</Link>
                            <Link to="/products">VTA</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 8 */}
                    <li className=" category-hide ">
                      <span
                        className=" category-hide-title "
                        href="./product.html"
                      >
                        <div>Quản lý nguồn</div>
                        <i className="fas fa-angle-right   category-hide-right-arrow " />
                      </span>
                      <div className=" submenu-hide-container ">
                        <ul className=" submenu-hide ">
                          <li className="submenu-hide-items">
                            <p>Quản lý nguồn theo thương hiệu</p>
                            <Link to="/products">Kuledy</Link>
                            <Link to="/products">VTA</Link>
                            <Link to="/products">dBacoustic</Link>
                            <Link to="/products">Kukedy</Link>
                            <Link to="/products">MK</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 9 */}
                    <li className=" category-hide ">
                      <span
                        className=" category-hide-title "
                        href="./product.html"
                      >
                        <div>Phụ kiện âm Thanh</div>
                        <i className="fas fa-angle-right   category-hide-right-arrow " />
                      </span>
                      <div className=" submenu-hide-container ">
                        <ul className=" submenu-hide ">
                          <li className="submenu-hide-items">
                            <p>Phụ kiện từ các hãng</p>
                            <Link to="/products">Tủ kĩ thuật</Link>
                            <Link to="/products">Chân loa</Link>
                            <Link to="/products">Cọc loa</Link>
                            <Link to="/products">Dây jack</Link>
                            <Link to="/products">Treo loa</Link>
                            <Link to="/products">Khung treo loa</Link>
                            <Link to="/products">Khác ...</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 10 */}
                    <li className=" category-hide ">
                      <span
                        className=" category-hide-title "
                        href="./product.html"
                      >
                        <div>Combo âm thanh gia đình</div>
                        <i className="fas fa-angle-right   category-hide-right-arrow " />
                      </span>
                      <div className=" submenu-hide-container ">
                        <ul className=" submenu-hide ">
                          <li className="submenu-hide-items">
                            <p>Combo theo giá</p>
                            <Link to="/products">Combo từ 20 - 30 triệu</Link>
                            <Link to="/products">Combo từ 30 - 50 triệu</Link>
                            <Link to="/products">Combo từ 50 - 70 triệu</Link>
                            <Link to="/products">Combo từ 120 - 150 triệu</Link>
                            <Link to="/products">Combo từ 150 - 200 triệu</Link>
                          </li>
                          <li className="submenu-hide-items">
                            <p>Combo theo thương hiệu</p>
                            <Link to="/products">4 Acoustic</Link>
                            <Link to="/products">Nexo</Link>
                            <Link to="/products">Adamson</Link>
                            <Link to="/products">Amate</Link>
                            <Link to="/products">Kukedy</Link>
                            <Link to="/products">DK</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 11 */}
                    <li className=" category-hide ">
                      <span
                        className=" category-hide-title "
                        href="./product.html"
                      >
                        <div>Combo phòng phim</div>
                        <i className="fas fa-angle-right   category-hide-right-arrow " />
                      </span>
                      <div className=" submenu-hide-container ">
                        <ul className=" submenu-hide ">
                          <li className="submenu-hide-items">
                            <p>Combo theo giá</p>
                            <Link to="/products">Combo từ 20 - 30 triệu</Link>
                            <Link to="/products">Combo từ 30 - 50 triệu</Link>
                            <Link to="/products">Combo từ 50 - 70 triệu</Link>
                            <Link to="/products">Combo từ 120 - 150 triệu</Link>
                            <Link to="/products">Combo từ 150 - 200 triệu</Link>
                          </li>
                          <li className="submenu-hide-items">
                            <p>Combo theo thương hiệu</p>
                            <Link to="/products">4 Acoustic</Link>
                            <Link to="/products">Nexo</Link>
                            <Link to="/products">Adamson</Link>
                            <Link to="/products">Amate</Link>
                            <Link to="/products">Kukedy</Link>
                            <Link to="/products">DK</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 12 */}
                    <li className=" category-hide ">
                      <span
                        className=" category-hide-title "
                        href="./product.html"
                      >
                        <div>Combo âm thanh hội trường</div>
                        <i className="fas fa-angle-right   category-hide-right-arrow " />
                      </span>
                      <div className=" submenu-hide-container ">
                        <ul className=" submenu-hide ">
                          <li className="submenu-hide-items">
                            <p>Combo theo giá</p>
                            <Link to="/products">Combo từ 20 - 30 triệu</Link>
                            <Link to="/products">Combo từ 30 - 50 triệu</Link>
                            <Link to="/products">Combo từ 50 - 70 triệu</Link>
                            <Link to="/products">Combo từ 120 - 150 triệu</Link>
                            <Link to="/products">Combo từ 150 - 200 triệu</Link>
                          </li>
                          <li className="submenu-hide-items">
                            <p>Combo theo thương hiệu</p>
                            <Link to="/products">4 Acoustic</Link>
                            <Link to="/products">Nexo</Link>
                            <Link to="/products">Adamson</Link>
                            <Link to="/products">Amate</Link>
                            <Link to="/products">Kukedy</Link>
                            <Link to="/products">DK</Link>
                          </li>
                        </ul>
                      </div>
                      {/* Danh mục con các sản phẩm - Accordion Luôn mở */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          {/* Menu ẩn nhỏ bên trái màn hình */}
        </div>
      </header>
    </>
  );
}

export default NavigationPage;
