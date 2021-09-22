import { useEffect } from "react";

import ShoppingCartCss from "./ShoppingCart.module.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function ShoppingCartPage() {
  useEffect(() => {
    console.log("ShoppingCartPage");
  }, []);
  return (
    <>
      <div className=" container">
        <h1 className={ShoppingCartCss.heading}>ShoppingCartPage</h1>
        <h2 className={ShoppingCartCss.subHeading}>HELLO</h2>
      </div>
    </>
  );
}

export default ShoppingCartPage;
