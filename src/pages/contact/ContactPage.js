import { useEffect } from "react";

import "./Contact.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function ContactPage() {
  useEffect( () => {
    console.log('ContactPage')
  }, [] ) 

  return (
    <>
  <div className=" container">
        <h1 className='heading'>Tính năng liên hệ đang được phát triển</h1>
      </div>
    </>
  );
}

export default ContactPage;
