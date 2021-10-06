import { useEffect } from "react";

import BuildConfig from "./BuildConfig.module.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

import Newsletter from "../../newsletter/NewsLetter"

function BuildConfigPage() {
  useEffect(() => {

  }, []);
  return (
    <>
      {/* breadcrumb */}
      <div className="page-banner     container-fluid ">
        <div className=" page-banner__content ">
          <div className=" breadcrumb-title ">XÂY DỰNG CẤU HÌNH</div>

          <div className="page-banner__hr-line" />

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="./index.html">TRANG CHỦ</a></li>
              <li className="breadcrumb-item" aria-current="page">XÂY DỰNG CẤU HÌNH</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* breadcrumb */}

      <div className=" container">
        <h1 className={BuildConfig.heading}>Tính năng xây dựng cấu hình đang được phát triển</h1>
      </div>
      {/* Email nhận tin tức mới */}
      <Newsletter />

    </>
  );
}

export default BuildConfigPage;
