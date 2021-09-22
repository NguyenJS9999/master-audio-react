import { useEffect } from "react";

import NewsCss from "./News.module.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function NewsPage() {
  useEffect(() => {
    console.log("NewsPage");
  }, []);
  
  return (
    <>
      <div className=" container">
        <h1 className={NewsCss.heading}>NewsPage</h1>
        <h2 className={NewsCss.subHeading}>HELLO</h2>
      </div>
    </>
  );
}

export default NewsPage;
