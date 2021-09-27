import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ProductDetail.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function ProductDetailPage() {
    // Mảng data các { item }
    const [stateProducts, setProducts] = useState([]);
    const [stateIsLoading, setIsLoading] = useState(true);
    console.log(stateProducts)
    console.log(stateIsLoading)

    // Lấy chuỗi params
    let { slug, id } = useParams(); console.log("Lấy url là text, id là số:", slug, id);

    // Lấy về mảng các {} từ API
    useEffect(() => {
      fetch(
        ` https://rest-api-nodejs-reactjs-router.herokuapp.com/products/${id} `
      )
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(".then trả về data products:", result);
          setProducts(result);
          setIsLoading(false);
        });
    }, [id]);
  
  return (
    <>
       <main>
        <section className=" product-detail-image-buy-container   container ">
          {/* 1 product-detail-image-buy */}
          <div className=" product-detail-image ">
            {/* Nội dung ảnh chính to được trỏ đến từ ảnh nhỏ - đã xóa/hoặc để ( show active ) */}
            <div className="tab-content" id="myTabContent">
              {/* 1 */}
              <div className="tab-pane fade show    active  " id="product-detail-image-01" role="tabpanel" aria-labelledby="product-detail-image-01-tab">
                <div className=" product-image ">
                  <img src="../img/4-acoustic/PCS-318NB-01.png" alt="chi tiết sản phẩm" />
                </div>
              </div>
              {/* 2 */}
              <div className="tab-pane fade " id="product-detail-image-02" role="tabpanel" aria-labelledby="product-detail-image-02-tab">
                <div className=" product-image ">
                  <img src="../img/4-acoustic/PCS-318NB-02.png" alt="chi tiết sản phẩm" />
                </div>
              </div>
              {/* 3 */}
              <div className="tab-pane fade " id="product-detail-image-03" role="tabpanel" aria-labelledby="product-detail-image-03-tab">
                <div className=" product-image ">
                  <img src="../img/4-acoustic/PCS-318NB-03.png" alt="chi tiết sản phẩm" />
                </div>
              </div>
              {/* 4 */}
              <div className="tab-pane fade " id="product-detail-image-04" role="tabpanel" aria-labelledby="product-detail-image-04-tab">
                <div className=" product-image ">
                  <img src="../img/4-acoustic/PCS-318NB-04.png" alt="chi tiết sản phẩm" />
                </div>
              </div>
              {/* 5 */}
              <div className="tab-pane fade " id="product-detail-image-05" role="tabpanel" aria-labelledby="product-detail-image-05-tab">
                <div className=" product-image ">
                  <img src="../img/4-acoustic/PCS-318NB-05.png" alt="chi tiết sản phẩm" />
                </div>
              </div>
              {/* 6 */}
              <div className="tab-pane fade " id="product-detail-image-06" role="tabpanel" aria-labelledby="product-detail-image-06-tab">
                <div className=" product-image ">
                  <img src="../img/4-acoustic/PCS-318NB-06.png" alt="chi tiết sản phẩm" />
                </div>
              </div>
              {/* 7 */}
              <div className="tab-pane fade " id="product-detail-image-07" role="tabpanel" aria-labelledby="product-detail-image-07-tab">
                <div className=" product-image ">
                  <img src="../img/4-acoustic/PCS-318NB-07.png" alt="chi tiết sản phẩm" />
                </div>
              </div>
              {/*  */}
            </div>
            {/* Các ảnh khác thu nhỏ đã xóa ( nav-item và nav-link ) */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {/* 1 */}
              <li className="  " role="presentation">
                <span className="  nav-link   active   " id="product-detail-image-01-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-01" type="button" role="tab" aria-controls="product-detail-image-01" aria-selected="true">
                  <div className="images-other" id="   ">
                    <img src="../img/4-acoustic/PCS-318NB-01.png" alt="chi tiết sản phẩm" />
                  </div>
                </span>
              </li>
              {/* 2 */}
              <li className="  " role="presentation">
                <span className=" nav-link  " id="product-detail-image-02-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-02" type="button" role="tab" aria-controls="product-detail-image-02" aria-selected="true">
                  <div className="images-other">
                    <img src="../img/4-acoustic/PCS-318NB-02.png" alt="chi tiết sản phẩm" />
                  </div>
                </span>
              </li>
              {/* 3 */}
              <li className="  " role="presentation">
                <span className=" nav-link  " id="product-detail-image-03-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-03" type="button" role="tab" aria-controls="product-detail-image-03" aria-selected="true">
                  <div className="images-other">
                    <img src="../img/4-acoustic/PCS-318NB-03.png" alt="chi tiết sản phẩm" />
                  </div>
                </span>
              </li>
              {/* 4 */}
              <li className="  " role="presentation">
                <span className=" nav-link  " id="product-detail-image-04-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-04" type="button" role="tab" aria-controls="product-detail-image-04" aria-selected="true">
                  <div className="images-other">
                    <img src="../img/4-acoustic/PCS-318NB-04.png" alt="chi tiết sản phẩm" />
                  </div>
                </span>
              </li>
              {/* 5 */}
              <li className="  " role="presentation">
                <span className=" nav-link  " id="product-detail-image-05-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-05" type="button" role="tab" aria-controls="product-detail-image-05" aria-selected="true">
                  <div className="images-other">
                    <img src="../img/4-acoustic/PCS-318NB-05.png" alt="chi tiết sản phẩm" />
                  </div>
                </span>
              </li>
              {/* 6 */}
              <li className="  " role="presentation">
                <span className=" nav-link  " id="product-detail-image-06-tab" data-bs-toggle="tab" data-bs-target="#product-detail-image-06" type="button" role="tab" aria-controls="product-detail-image-06" aria-selected="true">
                  <div className="images-other">
                    <img src="../img/4-acoustic/PCS-318NB-06.png" alt="chi tiết sản phẩm" />
                  </div>
                </span>
              </li>
              {/* 7 */}
              {/* <li class="  " role="presentation">

                        <span class=" nav-link  " id="product-detail-image-07-tab" data-bs-toggle="tab"
                            data-bs-target="#product-detail-image-07" type="button" role="tab"
                            aria-controls="product-detail-image-07" aria-selected="true">

                            <div class="images-other">
                                <img src="../img/4-acoustic/PCS-318NB-07.png" alt="chi tiết sản phẩm">

                            </div>

                        </span>

                    </li> */}
              {/*  */}
            </ul>
            {/* Các ảnh khác thu nhỏ */}
          </div>
          {/* product-detail-image - Ảnh sp chi tiết và các ảnh nhỏ */}
          <div className=" product-detail-buy ">
            {/* 1 */}
            <div className="product-name-code">
              <div className="product-name-detail ">Speak Subwoofer PCS 318NB</div>
              <div className="product-code-detail ">Mã sản phẩm: 318NB</div>
              <b>Đơn giá 1 chiếc chưa bao gồm VAT</b>
              <div className="product-price-detail ">65,200,000₫</div>
            </div>
            <div className="bottom-line" />
            {/* 2 */}
            <div className="product-status-amount">
              <div className="product-status-detail ">Tình trạng:
                <span>Còn hàng</span>
              </div>
              <div className="product-amount-detail ">
                <b>Số lượng:</b>
                <span className="custom-number">
                  <i className="fas fa-minus" />
                  <input className="custom-number-input" type="text" defaultValue={1} />
                  <i className="fas fa-plus" />
                </span>
                <span className="like-product">
                  <i className="like far fa-heart" />
                </span>
              </div>
              {/* Nút bấm thêm vào giở hàng - mua */}
              <div className="button-cart-buy">
                <div className="button-cart" type="button"><i className="fas fa-cart-arrow-down" /> Thêm vào giỏ hàng
                </div>
                <a href=".../cart.html">
                  <div className="button-buy" type="button">
                    <i className="fas fa-coins" />&nbsp;Mua ngay
                  </div>
                </a>
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
        </section> {/* 1 */}

      </main>


    </>
  );
}

export default ProductDetailPage;
