import { useEffect } from "react";

import HomeCss from "./Home.module.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function HomePage() {
  useEffect( () => {
    console.log('HomePage')
  }, [] ) 
  
  return (
    <>
        <div className="  container">
          <h1 className={HomeCss.heading}>Home Page</h1>
          <h2 className={HomeCss.subHeading}>HELLO</h2>
        </div>


    </>
  
  );
}

export default HomePage;
