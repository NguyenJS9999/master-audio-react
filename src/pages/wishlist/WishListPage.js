import { useEffect } from "react";

import "./WishList.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

import Newsletter from "../../newsletter/NewsLetter"

function WishlistPage() {
  useEffect(() => {
    console.log("WishlistPage");
  }, []);
  return (
    <>
      {/* breadcrumb */}
      <div className="page-banner     container-fluid ">
        <div className=" page-banner__content ">
          <div className=" breadcrumb-title ">SẢN PHẨM BẠN YÊU THÍCH</div>

          <div className="page-banner__hr-line" />

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="./index.html">TRANG CHỦ</a></li>
              <li className="breadcrumb-item" aria-current="page">SẢN PHẨM BẠN YÊU THÍCH</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* breadcrumb */}

      <div className=" container">
        <h1 className='heading'>Tính năng sản phẩm yêu thích đang được phát triển</h1>
      </div>

      {/* Email nhận tin tức mới */}
      <Newsletter />
    </>
  );
}

export default WishlistPage;
