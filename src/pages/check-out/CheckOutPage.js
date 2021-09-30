import { useEffect } from "react";

import "./CheckOut.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

import Newsletter from "../../newsletter/NewsLetter"
function CheckOutPage() {
  useEffect(() => {
    console.log("CheckOutPage");
  }, []);
  return (
    <>
         {/* Email nhận tin tức mới */}
         <Newsletter />

    </>
  );
}

export default CheckOutPage;
