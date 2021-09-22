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
        <h1 className="heading">TypicalProjectsPage</h1>
        <h2 className="subHeading">HELLO</h2>
      </div>
    </>
  );
}

export default TypicalProjectsPage;
