import "./Breadcrumb.css";

function BreadcrumbPage() {
  return (
    <>
      {/* breadcrumb */}
      <div className="breadcrumb-container     container-fluid ">
        <div className=" breadcrumb-content container ">
          <div className=" breadcrumb-title ">GIỎ HÀNG</div>
          {/* <div class="page-banner__hr-line"></div> */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="./index.html">TRANG CHỦ</a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                GIỎ HÀNG
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* breadcrumb */}
    </>
  );
}

export default BreadcrumbPage;
