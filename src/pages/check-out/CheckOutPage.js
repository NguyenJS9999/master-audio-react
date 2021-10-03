import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./CheckOut.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";

import Newsletter from "../../newsletter/NewsLetter"
function CheckOutPage() {
  useEffect(() => {
    console.log("CheckOutPage");
  }, []);
  return (
    <>
      <section className="section-order__container container-fluid">
        <div className="order container">
          <div className="order-form needs-validation">
            {/* Thông tin thanh toán */}
            <div className="order-info">
              <h4 className="order__title">Thông tin thanh toán</h4>
              <div className="order__first-info row g-3">
                <div className="order__name">
                  <input type="text" className=" name-input" placeholder="Họ tên *" />
                  <div className="feedback-noti">Vui lòng nhập họ tên</div>
                </div>
                <div className="order__phone">
                  <input type="text" className=" phone-input" placeholder="Số điện thoại *" />
                  <div className="feedback-noti">Vui lòng nhập số điện thoại</div>
                </div>
                <div className="order__address">
                  <input type="text" className=" address-input" placeholder="Địa chỉ *" />
                  <div className="feedback-noti">Vui lòng nhập địa chỉ</div>
                </div>
                <div className="order__city">
                  <input type="text" className=" city-input" placeholder="Tỉnh/Thành phố *" />
                  <div className="feedback-noti">Vui lòng nhập tỉnh/thành phố</div>
                </div>
                <div className="order__district">
                  <input type="text" className=" district-input" placeholder="Quận/Huyện *" />
                  <div className="valid-feedback feedback-noti">
                    Vui lòng nhập quận/huyện
                  </div>
                </div>
                <div className="order__ward">
                  <input type="text" className=" ward-input" placeholder="Phường/Xã *" />
                  <div className="feedback-noti">Vui lòng nhập phường/xã</div>
                </div>
                <div className="order__ship-method">
                  <select className="form-select ship-method-select" id="ship-method">
                    <option selected value>
                      Phương thức vận chuyển *
                    </option>
                    <option value="standard">Tiêu chuẩn</option>
                    <option value="save">Tiết kiệm</option>
                    <option value="fast">Nhanh</option>
                    <option value="super-fast">Hỏa tốc</option>
                  </select>
                  <div className="feedback-noti">
                    Vui lòng chọn phương thức vận chuyển
                  </div>
                </div>
                <div className=" mb-3 ">
                  <textarea className=" order-note form-control d-none" id="order-note" rows={3} placeholder="Ghi chú đơn hàng" defaultValue={"                                "} />
                  <textarea className=" order-note form-control " id="order-note" rows={3} placeholder="Ghi chú đơn hàng" defaultValue={"                                "} />
                </div>
              </div>
            </div>
            <div className=" order-payment__container ">
              {/* Thông tin đơn hàng */}
              <div className="order__details">
                <h4 className="order__title">Thông tin đơn hàng</h4>
                <div className="order__list">
                  <div className="order-header order-row">
                    <div className="col-left">SẢN PHẨM</div>
                    <div className="col-right">THÀNH TIỀN</div>
                  </div>
                  {/* 1 */}
                  <div className="order-item order-row">
                    <div className="col-left">
                      4 Acoustic PCS 318NB x<span className="order-item__quantity">&nbsp;1</span>
                    </div>
                    <div className="col-right order-item__unit-price">65.200.000₫</div>
                  </div>
                  {/* 2 */}
                  <div className="order-item order-row">
                    <div className="col-left">
                      Nexo LS 18 x&nbsp;<span className="order-item__quantity">1</span>
                    </div>
                    <div className="col-right order-item__unit-price">89,612,600₫</div>
                  </div>
                  {/* 3 */}
                  <div className="order-item order-row">
                    <div className="col-left">
                    Amate X218WF x&nbsp;<span className="order-item__quantity">1</span>
                    </div>
                    <div className="col-right order-item__unit-price">189,200,000₫</div>
                  </div>
                  {/* 4 */}

                  <div className="order-price order-row-small">
                    <div className="col-left">Tạm tính</div>
                    <div className="col-right">5.440.000₫</div>
                  </div>
                  <div className="check-out__order-discount order-row-small">
                    <div className="col-left">Giảm giá</div>
                    <div className="col-right">
                      - <span className="discount-amount">200.000₫</span>
                    </div>
                  </div>
                  <div className="order-ship-fee order-row-small">
                    <div className="col-left">Phí giao hàng</div>
                    <div className="col-right">0₫</div>
                  </div>
                  <div className="order-subtotal order-row">
                    <div className="col-left">TỔNG TIỀN</div>
                    <div className="col-right">5.240.000₫</div>
                  </div>
                </div>
              </div>
              {/* Phuong thức thanh toán */}
              <div className=" payment-methods__container  ">
                <h4 className=" order__title ">PHƯƠNG THỨC THANH TOÁN</h4>
                {/* Các phương thức thanh toán - accordion */}
                <div className=" payment-methods   accordion" id="payment-methods">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingVisa">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#visa" aria-expanded="false" aria-controls="visa">
                        <div className="form-check">
                          <input className="form-check-input pay-radio" type="radio" name="pay-methods" id="visa-pay" defaultValue="visa-pay" />
                          <label className="form-check-label" htmlFor="visa-pay">
                            Thanh toán trực tuyến bằng thẻ Visa/MasterCard
                          </label>
                        </div>
                      </button>
                    </h2>
                    <div id="visa" className="accordion-collapse collapse" aria-labelledby="headingVisa" data-bs-parent="#payment-methods">
                      <div className="accordion-body">
                        <div className="row g-2">
                          <div className="col-12">
                            <input className="form-control visa-card-number" type="text" placeholder="Số thẻ *" aria-label="Card number" />
                            <div className="feedback-noti">
                              Vui lòng nhập số thẻ
                            </div>
                          </div>
                          <div className="col-12">
                            <input type="text" className="form-control visa-card-name" placeholder="Tên chủ thẻ *" aria-label="Card name" />
                            <div className="feedback-noti">
                              Vui lòng nhập tên chủ thẻ
                            </div>
                          </div>
                          <div className="col-12">
                            <input type="text" className="form-control visa-card-date" name="datepicker" id="datepicker" placeholder="MM/YYYY *" />
                            <div className="feedback-noti">
                              Vui lòng nhập ngày hết hạn
                            </div>
                          </div>
                          <div className="col-12">
                            <input type="text" className="form-control visa-card-cvv" placeholder="CVV/CVC *" aria-label="CVV-CVC" />
                            <div className="feedback-noti">
                              Vui lòng nhập số CVV/CVC
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingBankTransfer">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bankTransfer" aria-expanded="false" aria-controls="bankTransfer">
                        <div className="form-check">
                          <input className="form-check-input pay-radio" type="radio" name="pay-methods" id="bank-pay" defaultValue="bank-pay" />
                          <label className="form-check-label" htmlFor="bank-pay">
                            Chuyển khoản ngân hàng
                          </label>
                        </div>
                      </button>
                    </h2>
                    <div id="bankTransfer" className="accordion-collapse collapse" aria-labelledby="headingBankTransfer" data-bs-parent="#payment-methods">
                      <div className="accordion-body">
                        Thực hiện chuyển khoản vào tài khoản ngân hàng của
                        Master&nbsp;Audio. <br />
                        Xem thông tin chi tiết tài khoản tại
                        <Link to="./check-out" className="text-info">đây</Link>. <br />
                        Nội dung chuyển khoản:
                        <span className="text-bold text-danger">“SĐT của bạn - Mã đơn hàng”</span>.
                        <br />
                        (Ví dụ:
                        <span className="text-bold">“0988360148 - 006868”</span>)
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingCod">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cod" aria-expanded="false" aria-controls="cod">
                        <div className="form-check">
                          <input className="form-check-input pay-radio" type="radio" defaultChecked name="pay-methods" id="cod-pay" defaultValue="cod-pay" />
                          <label className="form-check-label" htmlFor="cod-pay">
                            Thanh toán tiền mặt khi nhận hàng (COD)
                          </label>
                        </div>
                      </button>
                    </h2>
                    <div id="cod" className="accordion-collapse collapse" aria-labelledby="headingCod" data-bs-parent="#payment-methods">
                      <div className="accordion-body">
                        Quý khách sẽ thanh toán tiền mặt trực tiếp cho nhân viên
                        giao hàng ngay sau khi nhận hàng.
                      </div>
                    </div>
                  </div>
                </div>
                {/* Nút tiến hành đặt hàng */}
                <div className="col-12">
                  <Link to="/order-complete">
                    <button className="section__btn w-100 btn-place-order" type="button">ĐẶT HÀNG </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email nhận tin tức mới */}
      <Newsletter />

    </>
  );
}

export default CheckOutPage;
