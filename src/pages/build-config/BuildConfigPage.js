import { useEffect } from "react";

import BuildConfig from "./BuildConfig.module.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function BuildConfigPage() {
  useEffect(() => {
    console.log("BuildConfigPage");
  }, []);
  return (
    <>
      <div className=" container">
        <h1 className={BuildConfig.heading}>BuildConfigPage</h1>
        <h2 className={BuildConfig.subHeading}>HELLO</h2>
      </div>
    </>
  );
}

export default BuildConfigPage;
