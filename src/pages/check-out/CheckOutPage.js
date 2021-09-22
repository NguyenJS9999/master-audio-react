import { useEffect } from "react";

import CheckOutCss from "./CheckOut.module.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function CheckOutPage() {
  useEffect(() => {
    console.log("CheckOutPage");
  }, []);
  return (
    <>
      <div className=" container">
        <h1 className={CheckOutCss.heading}>CheckOutPage</h1>
        <h2 className={CheckOutCss.subHeading}>HELLO</h2>
      </div>
    </>
  );
}

export default CheckOutPage;
