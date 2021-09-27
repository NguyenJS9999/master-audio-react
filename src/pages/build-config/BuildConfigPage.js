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
        <h1 className={BuildConfig.heading}>Tính năng xây dựng cấu hình đang được phát triển</h1>
      </div>
    </>
  );
}

export default BuildConfigPage;
