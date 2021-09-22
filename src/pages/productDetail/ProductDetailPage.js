import { useEffect } from "react";

import ProductCss from "./ProductDetail.module.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function ProductDetailPage() {
  useEffect( () => {
    console.log('ProductDetailPage')
  }, [] ) 
  
  return (
    <>
    <div className=" container">
      <h1 className={ProductCss.heading}>ProductDetailPage</h1>
      <h2 className={ProductCss.subHeading}>HELLO</h2>
    </div>


</>
  );
}

export default ProductDetailPage;
