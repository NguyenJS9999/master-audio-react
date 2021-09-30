import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./ProductDetail.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

import Newsletter from "../../newsletter/NewsLetter"

function ProductDetailPage() {
    // Mảng data 1 { item }
    const [stateProducts, setProducts] = useState([]); 
    console.log(stateProducts)
    const [loading, setLoading] = useState(true);



    // Lấy chuỗi params
    let { id } = useParams();

    // Lấy về mảng các {} từ API
    useEffect(() => {
      fetch(
        ` https://rest-api-nodejs-reactjs-router.herokuapp.com/products/${id} `
      )
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setProducts(result);  
          setLoading(false)
        });
    }, [id]);
    
    
  

  return (
    <>
      { loading ? 
        <div className='container'>Loadding...</div> 
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
                      <img src={stateProducts.image } alt="chi tiết sản phẩm" />
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="tab-pane fade " id="product-detail-image-02" role="tabpanel" aria-labelledby="product-detail-image-02-tab">
                    <div className=" product-image ">
                      <img src={ stateProducts.image } alt="chi tiết sản phẩm" />
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="tab-pane fade " id="product-detail-image-03" role="tabpanel" aria-labelledby="product-detail-image-03-tab">
                    <div className=" product-image ">
                      <img src={ stateProducts.image } alt="chi tiết sản phẩm" />
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="tab-pane fade " id="product-detail-image-04" role="tabpanel" aria-labelledby="product-detail-image-04-tab">
                    <div className=" product-image ">
                      <img src={ stateProducts.image } alt="chi tiết sản phẩm" />
                    </div>
                  </div>
                  {/* 5 */}
                
                </div>

                {/* Các ảnh khác thu nhỏ đã xóa ( nav-item và nav-link ) */}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {/* 1 */}
                  <li className="  " role="presentation">
                    <span className="  nav-link   active   " id="product-detail-image-01-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-01" type="button" role="tab" aria-controls="product-detail-image-01" aria-selected="true">
                      <div className="images-other">
                        <img src={ stateProducts.image } alt="chi tiết sản phẩm" />
                      </div>
                    </span>
                  </li>
                  {/* 2 */}
                  <li className="  " role="presentation">
                    <span className=" nav-link  " id="product-detail-image-02-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-02" type="button" role="tab" aria-controls="product-detail-image-02" aria-selected="true">
                      <div className="images-other">
                        <img src={ stateProducts.image } alt="chi tiết sản phẩm" />
                      </div>
                    </span>
                  </li>
                  {/* 3 */}
                  <li className="  " role="presentation">
                    <span className=" nav-link  " id="product-detail-image-03-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-03" type="button" role="tab" aria-controls="product-detail-image-03" aria-selected="true">
                      <div className="images-other">
                        <img src={ stateProducts.image } alt="chi tiết sản phẩm" />
                      </div>
                    </span>
                  </li>
                  {/* 4 */}
                  <li className="  " role="presentation">
                    <span className=" nav-link  " id="product-detail-image-04-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-04" type="button" role="tab" aria-controls="product-detail-image-04" aria-selected="true">
                      <div className="images-other">
                        <img src={ stateProducts.image } alt="chi tiết sản phẩm" />
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
                    <div className="product__brand ">{stateProducts.brand}</div>
                    
                    <span className="product-detail__type ">{stateProducts.type}</span> 

                    <span className="product-detail__name  ">{stateProducts.name}</span>

                  </div>
 
                  <b>Đơn giá 1 chiếc chưa bao gồm VAT</b>
                  <div className="product-price-detail ">{ stateProducts.price.toLocaleString() } ₫</div>
                </div>
                <div className="bottom-line" />

                {/* 2 */}
                <div className="product-status-amount">
                  
                  <div className="product-status-detail ">Tình trạng: 
                    <span>Còn hàng</span>
                  </div>

                  <div className="product-amount-detail ">
                    <b>Số lượng:</b>

                    <span className="custom-number ">
                      <i className="fas fa-minus" />
                      <input className="custom-number-input" type="number" defaultValue={stateProducts.quantity} />
                      <i className="fas fa-plus" />
                    </span>

                    <span className="like-product">
                      <i className="like far fa-heart" />
                    </span>

                  </div>
                  
                  {/* Nút bấm thêm vào giỏ hàng - mua */}
                  <div className="button-cart-buy">
                    <div className="button-cart" type="button"><i className="fas fa-cart-arrow-down" /> Thêm vào giỏ hàng </div>
                  
                    <Link to="/shopping-cart">
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
              </div> {/* product-detail-buy */}
            </div> {/* 1 */}
          </section>
        </main>
        )
      }

      {/* Email nhận tin tức mới */}
      <Newsletter />
    </>
  );
}

export default ProductDetailPage;
