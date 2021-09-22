import { useEffect } from "react";

import ProductCss from "./ProductsPage.module.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function ProductsPage() {
  useEffect( () => {
    console.log('ProductsPage')
  }, [] ) 
  return (
    <>
    <div className=" container">
      <h1 className={ProductCss.heading}>ProductsPage</h1>
      <h2 className={ProductCss.subHeading}>HELLO</h2>
    </div>


</>
  );
}

export default ProductsPage;
