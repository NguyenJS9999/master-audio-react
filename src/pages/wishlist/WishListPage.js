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
     <div className=" container">
        <h1 className='heading'>Tính năng sản phẩm yêu thích đang được phát triển</h1>
      </div>

      {/* Email nhận tin tức mới */}
      <Newsletter />
    </>
  );
}

export default WishlistPage;
