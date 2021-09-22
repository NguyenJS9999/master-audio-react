import { useEffect } from "react";

import ContactCss from "./Contact.module.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function ContactPage() {
  useEffect( () => {
    console.log('ContactPage')
  }, [] ) 

  return (
    <>
      <div className="container">
        <h1 className={ContactCss.heading}>Contact Page</h1>

      </div>
    </>
  );
}

export default ContactPage;
