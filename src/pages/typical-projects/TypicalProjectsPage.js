import { useEffect } from "react";

import "./TypicalProjects.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

import Newsletter from "../../newsletter/NewsLetter"

function TypicalProjectsPage() {
  useEffect(() => {
    console.log("TypicalProjectsPage");
  }, []);

  return (
    <>
      {/* breadcrumb */}
      <div className="page-banner     container-fluid ">
        <div className=" page-banner__content ">
          <div className=" breadcrumb-title ">CÔNG TRÌNH TIÊU BIỂU</div>

          <div className="page-banner__hr-line" />

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="./index.html">TRANG CHỦ</a></li>
              <li className="breadcrumb-item" aria-current="page">CÔNG TRÌNH TIÊU BIỂU</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* breadcrumb */}

      <div className=" container">
        <h1 className='heading'>Trang các công trình tiêu biểu đang được phát triển</h1>
      </div>

      {/* Email nhận tin tức mới */}
      <Newsletter />

    </>
  );
}

export default TypicalProjectsPage;
