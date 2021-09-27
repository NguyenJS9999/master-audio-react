import { useEffect } from "react";

import "./News.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function NewsPage() {
  useEffect(() => {
    console.log("NewsPage");
  }, []);
  
  return (
    <>
      {/* Blog */}
      <section className=" blog-container   container ">
        <div className=" blogs-title ">
          <b><i className="fas fa-newspaper" />&nbsp; Tin tức âm thanh</b>
          <small>Cập nhật các tin tức âm thanh trong và ngoài nước mới nhất hay nhất</small>
        </div>
        <div className=" blogs ">
          {/* 1 */}
          <div className=" blog ">
            <div className=" blog-content ">
              <div className="blog-content-title">Adamson giới thiệu dòng loa loudspeaked series-IS weatherized</div>
              <div className="blog-content-short">
                Loa Amate Nitid N46 là mẫu loa nằm trong Series Nitid của Amate. Đây là mẫu loa cao cấp với 4
                Driver bass 6” và có công suất 700W sử dụng mạch active Class D...
              </div>
              <button className=" blog-see-more-button " >
                <div className=" blog-see-more ">Xem thêm</div>
              </button>
            </div>
            <div className=" blog-img ">
              <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/blog/ADAMSON-LOUDSPEAKED-SERIES-IS-WEATHERIZED.png" alt="blog-img" />
            </div>
          </div>
          {/* 2 */}
          <div className=" blog ">
            <div className=" blog-content ">
              <div className="blog-content-title">Loa NEXO ID84 dòng loa cột hiệu suất cao</div>
              <div className="blog-content-short">
                ID84 là thiết kế loa cột đầu tiên của NEXO, giới thiệu các đặc điểm thương hiệu của công ty về
                tỷ lệ kích thước trên công suất, các hướng thay đổi và cấu hình có thể mở rộng linh hoạt cao cho
                một danh mục loa phù hợp với nhiều ứng dụng...
              </div>
              <button className=" blog-see-more-button " >
                <div className=" blog-see-more ">Xem thêm</div>
              </button>
            </div>
            <div className=" blog-img ">
              <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/blog/Nexo-ID84.png?raw=true" alt="blog-img" />
            </div>
          </div>
          {/* 3 */}
          <div className=" blog ">
            <div className=" blog-content ">
              <div className="blog-content-title">Line Array 4 Acoustic PCS 210L Vs Subwoofer PCS 318NB</div>
              <div className="blog-content-short">
                Hệ thống gồm 1 vế, sử dụng 4 chiếc line array 210L kết hợp với quái vật 3 đầu – sub 3 bass 318NB
                của 4acoustic!...
              </div>
              <button className=" blog-see-more-button " >
                <div className=" blog-see-more ">Xem thêm</div>
              </button>
            </div>
            <div className=" blog-img ">
              <img src="https://raw.githubusercontent.com/NguyenKeo/MasterAudio/main/img/blog/blog-test-Sub-318NB.jpg" alt="blog-img" />
            </div>
          </div>
          {/* 4 */}
          <div className=" blog ">
            <div className=" blog-content ">
              <div className="blog-content-title">Amate Nitid N46 Đánh giá chi tiết</div>
              <div className="blog-content-short">
                Loa Amate Nitid N46 là mẫu loa nằm trong Series Nitid của Amate. Đây là mẫu loa cao cấp với 4
                Driver bass 6” và có công suất 700W sử dụng mạch active Class D...
              </div>
              <button className=" blog-see-more-button " >
                <div className=" blog-see-more ">Xem thêm</div>
              </button>
            </div>
            <div className=" blog-img ">
              <img src="https://github.com/NguyenKeo/MasterAudio/blob/main/img/blog/loa-amate-nitid-n46-active-P6481.jpg?raw=true" alt="blog-img" />
            </div>
          </div>
        </div> {/* blogs */}
      </section>
      {/* Blog */}
      
    </>
  );
}

export default NewsPage;
