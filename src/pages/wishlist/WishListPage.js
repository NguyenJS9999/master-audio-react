import { useEffect } from "react";

import WishlistCss from "./WishList.module.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function WishlistPage() {
  useEffect(() => {
    console.log("WishlistPage");
  }, []);
  return (
    <>
      <div className=" container">
        <h1 className={WishlistCss.heading}>WishlistPage</h1>
        <h2 className={WishlistCss.subHeading}>HELLO</h2>
      </div>
    </>
  );
}

export default WishlistPage;
