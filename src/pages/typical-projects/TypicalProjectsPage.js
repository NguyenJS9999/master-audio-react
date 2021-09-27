import { useEffect } from "react";

import "./TypicalProjects.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function TypicalProjectsPage() {
  useEffect(() => {
    console.log("TypicalProjectsPage");
  }, []);
  
  return (
    <>
 <div className=" container">
        <h1 className='heading'>Trang các công trình tiêu biểu đang được phát triển</h1>
      </div>
    </>
  );
}

export default TypicalProjectsPage;
