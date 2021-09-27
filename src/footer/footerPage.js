import { useEffect } from "react";

// import FootereCss from "./footer.module.css";
import "./Footer.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function FooterPage() {
  useEffect(() => {
    console.log("HomePage");
  }, []);

  return (
    <>
      <footer>
        <div className="footer-container   container-fluid">
          <div className="footer-infors   container ">
            <div className="footer-infor">
              <h6>THÔNG TIN LIÊN HỆ</h6>
              <div className="footer-infor-description">
                <p>
                  CS 1: Số 31 - BT4, 3 KĐT Vinaconex 3, P. Trung Văn, Q. Nam Từ
                  Liêm, Hà Nội
                </p>
                <p>
                  CS 2: Tầng 12A, tòa nhà Viwaseen Tower, số 48, Tố Hữu, Lê Văn
                  Lương kéo dài, Hà Nội
                </p>
                <p>Hotline: 0988360148</p>
                <p>Email: admin@master-audio.com</p>
                <div className="social-network-icon">
                  <i className="fab fa-youtube" />
                  <i className="fab fa-facebook-f" />
                  <i className="far fa-envelope" />
                  <i className="fab fa-instagram" />
                  <i className="fab fa-pinterest" />
                  <i className="fab fa-twitter" />
                </div>
              </div>
            </div>
            <div className="footer-infor">
              <h6>THỜI GIAN LÀM VIỆC</h6>
              <div className="footer-infor-description">
                <p>Thứ 2 - Thứ 6: 8AM - 17hPM</p>
                <p>Thứ 7: 9AM - 16PM</p>
                <p>Chủ Nhật: ĐÃ ĐÓNG CỬA</p>
                <p>Nghỉ các ngày lễ, Tết</p>
              </div>
            </div>
            <div className="footer-infor">
              <h6>DỊCH VỤ KHÁCH HÀNG</h6>
              <div className="footer-infor-description">
                <span>
                  <p>Hướng dẫn mua hàng online</p>

                  <p>Hướng dẫn mua hàng trả góp</p>

                  <p>Chính sách bảo mật</p>

                  <p>Liên hệ &amp; góp ý</p>

                  <p>Câu hỏi thường gặp</p>
                </span>
              </div>
            </div>
            <div className="footer-infor">
              <h6>CHÍNH SÁCH MUA HÀNG</h6>
              <div className="footer-infor-description">
                <span>
                  <p>Chính sách bảo hành</p>

                  <p>Chính sách giao hàng</p>

                  <p>Chính sách đổi trả</p>

                  <p>Chính sách bảo mật</p>

                  <p>Thẻ thành viên</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-copyright">
          Copyright 2021 <span>©</span> Powered by Nguyên Bass
        </div>
      </footer>
    </>
  );
}

export default FooterPage;
