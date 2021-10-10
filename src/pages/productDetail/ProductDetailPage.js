import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cartSlice"

// import CustomToast from "../../components/CustomToast";
// import CustomModal from "../../components/Modal";
// import CustomModalBootstrap from "../../components/CustomModalBootstrap";


import "./ProductDetail.css";
import Newsletter from "../../newsletter/NewsLetter"

function ProductDetailPage() {
  // Mảng data 1 { item }
  const [stateProductDetail, setProductDetail] = useState( {} );
  const [loading, setLoading] = useState(true);
  // Redux
  const dispatch = useDispatch();

  // Lấy chuỗi params
  let { id } = useParams();

  // Lấy về mảng 1 {} từ API vs Param
  useEffect(() => {
    fetch(
      ` https://rest-api-nodejs-reactjs-router.herokuapp.com/products/${id} `
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProductDetail(result);
        setLoading(false)
      });
  }, [id]);
  // Tăng số lượng sp ô input
  function addProductNumber(quantity) {
    let cloneDataItems
    if (quantity < 100) {
      cloneDataItems = { ...stateProductDetail };
      cloneDataItems.quantity = cloneDataItems.quantity + 1;
    } else {
      return
    }
    setProductDetail(cloneDataItems)
  }
  // Giảm số lượng sp ô input
  function minusProductNumber(quantity) {
    let cloneDataItems
    if (quantity > 1) {
      cloneDataItems = { ...stateProductDetail };
      cloneDataItems.quantity = cloneDataItems.quantity - 1;
    } else {
      return
    }
    setProductDetail(cloneDataItems)
  }
  // Lấy giá trị ô input số lượng item
  function getValueInputQuantity(event) {
    let valueQuantity = event.target.value;
    let dataItemClone;

    if (valueQuantity > 0 && valueQuantity <= 100) {
      dataItemClone = { ...stateProductDetail };
      dataItemClone.quantity = parseInt(valueQuantity);
      setProductDetail(dataItemClone)
    }
    else {
      return;
    }
  }

  return (
    <>
      {/* breadcrumb */}
      <div className="page-banner     container-fluid ">
        <div className=" page-banner__content ">
          <div className=" breadcrumb-title ">{stateProductDetail.brand}</div>

          <div className="page-banner__hr-line" />

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="./index.html">TRANG CHỦ</a></li>
              <li className="breadcrumb-item" aria-current="page">{stateProductDetail.name}</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* breadcrumb */}
      {loading ?
        // <Loadding />
        <div className='loadding-text_center  container'></div>
        :
        (
          <main>

            <section className='product-detail__background'>
              <div className=" product-detail-image-buy-container   container ">
                {/* 1 product-detail-image-buy */}
                <div className=" product-detail-image ">

                  {/* Nội dung ảnh chính to được trỏ đến từ ảnh nhỏ - đã xóa/hoặc để ( show active ) */}
                  <div className="tab-content" id="myTabContent">
                    {/* 1 */}
                    <div className="tab-pane fade show    active  " id="product-detail-image-01" role="tabpanel" aria-labelledby="product-detail-image-01-tab">
                      <div className=" product-image ">
                        <img src={stateProductDetail.image} alt="chi tiết sản phẩm" />
                      </div>
                    </div>
                    {/* 2 */}
                    <div className="tab-pane fade " id="product-detail-image-02" role="tabpanel" aria-labelledby="product-detail-image-02-tab">
                      <div className=" product-image ">
                        <img src={stateProductDetail.thumbnail[1]} alt="chi tiết sản phẩm" />
                      </div>
                    </div>
                    {/* 3 */}
                    <div className="tab-pane fade " id="product-detail-image-03" role="tabpanel" aria-labelledby="product-detail-image-03-tab">
                      <div className=" product-image ">
                        <img src={stateProductDetail.thumbnail[2]} alt="chi tiết sản phẩm" />
                      </div>
                    </div>
                    {/* 4 */}
                    <div className="tab-pane fade " id="product-detail-image-04" role="tabpanel" aria-labelledby="product-detail-image-04-tab">
                      <div className=" product-image ">
                        <img src={stateProductDetail.thumbnail[3]} alt="chi tiết sản phẩm" />
                      </div>
                    </div>
                    {/* 5 */}

                  </div>

                  {/* Các ảnh khác thu nhỏ đã xóa ( nav-item và nav-link ) */}
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {/* 1 */}
                    <li role="presentation">
                      <span className="  nav-link   active   " id="product-detail-image-01-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-01" type="button" role="tab" aria-controls="product-detail-image-01" aria-selected="true">
                        <div className="images-other">
                          <img src={stateProductDetail.thumbnail[0]} alt="chi tiết sản phẩm" />
                        </div>
                      </span>
                    </li>
                    {/* 2 */}
                    <li role="presentation">
                      <span className=" nav-link  " id="product-detail-image-02-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-02" type="button" role="tab" aria-controls="product-detail-image-02" aria-selected="true">
                        <div className="images-other">
                          <img src={stateProductDetail.thumbnail[1]} alt="chi tiết sản phẩm" />
                        </div>
                      </span>
                    </li>
                    {/* 3 */}
                    <li role="presentation">
                      <span className=" nav-link  " id="product-detail-image-03-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-03" type="button" role="tab" aria-controls="product-detail-image-03" aria-selected="true">
                        <div className="images-other">
                          <img src={stateProductDetail.thumbnail[2]} alt="chi tiết sản phẩm" />
                        </div>
                      </span>
                    </li>
                    {/* 4 */}
                    <li role="presentation">
                      <span className=" nav-link  " id="product-detail-image-04-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-04" type="button" role="tab" aria-controls="product-detail-image-04" aria-selected="true">
                        <div className="images-other">
                          <img src={stateProductDetail.thumbnail[3]} alt="chi tiết sản phẩm" />
                        </div>
                      </span>
                    </li>
                    {/* 5 */}
                  </ul>
                  {/* Các ảnh khác thu nhỏ */}
                </div>
                {/* product-detail-image - Ảnh sp chi tiết và các ảnh nhỏ */}

                <div className=" product-detail-buy ">
                  {/* 1 */}
                  <div className="product-name-code">
                    <div>
                      <div className="product__brand ">{stateProductDetail.brand}</div>

                      <span className="product-detail__type ">{stateProductDetail.type}</span>

                      <span className="product-detail__name  ">{stateProductDetail.name}</span>

                    </div>

                    <b>Đơn giá 1 chiếc chưa bao gồm VAT</b>

                    <div className="product-price-detail ">{stateProductDetail.price.toLocaleString()} ₫</div>
                  </div>
                  <div className="bottom-line" />

                  {/* 2 */}
                  <div className="product-status-amount">

                    <div className="product-status-detail ">
                      <div>Tình trạng:</div>
                      <span>Còn hàng</span>
                    </div>

                    <div className="product-amount-detail ">
                      <b>Số lượng:</b>

                      <span className="custom-number ">
                        <i onClick={() => minusProductNumber(stateProductDetail.quantity)} className="fas fa-minus" />

                        <input onChange={(event) => getValueInputQuantity(event, 1)}
                          value={stateProductDetail.quantity}
                          className="custom-number-input" type="number" />

                        <i onClick={() => addProductNumber(stateProductDetail.quantity)} className="fas fa-plus" />
                      </span>

                      {/* <span className="like-product">
                      <i className="like far fa-heart" />
                    </span> */}

                    </div>

                    {/* Nút bấm thêm vào giỏ hàng - mua */}
                    <div className="button-cart-buy">

                      <div onClick={() => dispatch(addProduct(stateProductDetail))}
                        className="button-cart" type="button" 
                        data-bs-toggle="modal" data-bs-target={`#${stateProductDetail.id}`}
                      >
                        <i className="fas fa-cart-arrow-down" />&nbsp;Thêm vào giỏ hàng
                      </div>

                      {/* <CustomModal proTitle='Đã thêm sản phẩm vào giỏ hàng!'
                        imgUrl={stateProductDetail.image} proBrand={'Nexo'}
                        proName={stateProductDetail.name} proId={stateProductDetail.id}
                      /> */}

                      {/* <CustomModalBootstrap /> */}

                      <Link to="/shopping-cart"
                        onClick={() => dispatch(addProduct(stateProductDetail))} >
                        <div className="button-buy" type="button">
                          <i className="fas fa-coins" />&nbsp;Mua ngay
                        </div>
                      </Link>

                    </div>

                  </div>

                  <div className="bottom-line" />

                  {/* 3*/}
                  <div className="product-detail-phone-contact">
                    <strong className="phone-contact-title">Liên hệ</strong>
                    <div> <strong>KINH DOANH 1: </strong> <span>0988 360 149</span> </div>
                    <div> <strong>KINH DOANH 2: </strong> <span>0777 891 992</span> </div>
                    <div> <strong>KINH DOANH 3: </strong> <span>0942 97 96 96</span> </div>
                  </div>
                </div>
              </div>
            </section>

          </main>
        )
      }
      {/* <CustomModal 
        proTitle='Đã thêm sản phẩm vào giỏ hàng!' 
        imgUrl={stateProductDetail.image} 
        proBrand={stateProductDetail.brand} 
        proName={stateProductDetail.name} /> */}

      {/* Email nhận tin tức mới */}
      <Newsletter />

      <div className="modal fade" id={stateProductDetail.id} aria-hidden="true">
                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title text-center"  >Đã thêm sản phẩm vào giỏ hàng! </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <img src={stateProductDetail.image} alt={stateProductDetail.name} />
                            <span className='modal-body_type'>{stateProductDetail.type}</span>&nbsp;
                            <strong>{stateProductDetail.brand}</strong>&nbsp;
                            <span>{stateProductDetail.name}</span>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                        
                    </div>

                </div>
            </div>
    </>
  );
}

export default ProductDetailPage;
