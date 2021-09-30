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
      <div className=" container">
        <h1 className='heading'>Trang các công trình tiêu biểu đang được phát triển</h1>
      </div>

      {/* Email nhận tin tức mới */}
      <Newsletter />

    </>
  );
}

export default TypicalProjectsPage;
