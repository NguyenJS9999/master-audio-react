// import { useEffect } from "react";

// import FootereCss from "./footer.module.css";
import { Link } from "react-router-dom";
import "./Footer.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

function FooterPage() {

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
                  <Link to="/contact"><i className="fab fa-youtube" /></Link>
                  <Link to="/contact"><i className="fab fa-facebook-f" /></Link>
                  <Link to="/contact"><i className="far fa-envelope" /></Link>
                  <Link to="/contact"><i className="fab fa-instagram" /></Link>
                  <Link to="/contact"><i className="fab fa-pinterest" /></Link>
                  <Link to="/contact"><i className="fab fa-twitter" /></Link>
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
                  <Link to="/products">
                    <p>Hướng dẫn mua hàng online</p>
                  </Link>
                  <Link to="/products">
                    <p>Hướng dẫn mua hàng trả góp</p>
                  </Link>
                  <Link to="/products">
                    <p>Chính sách bảo mật</p>
                  </Link>
                  <Link to="/products">
                    <p>Liên hệ &amp; góp ý</p>
                  </Link>
                  <Link to="/products">
                    <p>Câu hỏi thường gặp</p>
                  </Link>
                </span>
              </div>
            </div>
            <div className="footer-infor">
              <h6>CHÍNH SÁCH MUA HÀNG</h6>
              <div className="footer-infor-description">
                <span>
                  <Link to="/products">
                    <p>Chính sách bảo hành</p>
                  </Link>
                  <Link to="/products">
                    <p>Chính sách giao hàng</p>
                  </Link>
                  <Link to="/products">
                    <p>Chính sách đổi trả</p>
                  </Link>
                  <Link to="/products">
                    <p>Chính sách bảo mật</p>
                  </Link>
                  <Link to="/products">
                    <p>Thẻ thành viên</p>
                  </Link>
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
