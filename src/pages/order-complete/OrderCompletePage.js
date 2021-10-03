import { Link } from "react-router-dom";
import "./OrderComplete.css"

function OrderCompletePage() {
    return (
        <>
            <main id="main">
                <section className="section-order--complete container-fluid">
                    <div className="order-summary container">
                        <div className="order-thank">
                            <h4 className="order-complete-noti mb-2">ĐẶT HÀNG THÀNH CÔNG!</h4>
                            <h4 className="thank-you">
                                Cảm ơn quý khách đã lựa chọn Master&nbsp;Audio
                            </h4>
                            <div className="order-result">
                                <span>
                                    <div className="order-number">
                                        <p>Mã đơn hàng</p>
                                        <p className="text-bold">686868</p>
                                    </div>
                                    <div className="vertical-line" />
                                    <div className="order-date">
                                        <p>Ngày nhận đơn</p>
                                        <p className="text-bold">30/12/2021</p>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="order__details">
                            <h4 className="order__title">Chi tiết đơn hàng</h4>
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
                                    <div className="col-right order-item__unit-price">189,200,000đ</div>
                                </div>
                                {/* 4 */}
                                <div className="order-price order-row-small">
                                    <div className="col-left">Tạm tính</div>
                                    <div className="col-right">344,012,600₫</div>
                                </div>
                                <div className="order-complete__discount order-row-small">
                                    <div className="col-left">Giảm giá</div>
                                    <div className="col-right">
                                        - <span className="discount-amount">34,401,260₫</span>
                                    </div>
                                </div>
                                <div className="order-ship-fee order-row-small">
                                    <div className="col-left">Phí giao hàng</div>
                                    <div className="col-right">0₫</div>
                                </div>
                                <div className="order-payment order-row-small">
                                    <div className="col-left">Phương thức thanh&nbsp;toán</div>
                                    <div className="col-right">Thanh toán tiền mặt khi nhận&nbsp;hàng (COD)</div>
                                </div>
                                <div className="order-expect order-row-small">
                                    <div className="col-left">Giao hàng dự&nbsp;kiến</div>
                                    <div className="col-right">30/12/2021</div>
                                </div>
                                <div className="order-ship order-row-small">
                                    <div className="col-left">Phương thức vận&nbsp;chuyển</div>
                                    <div className="col-right">Tiêu chuẩn</div>
                                </div>
                                <div className="order-subtotal order-row">
                                    <div className="col-left">TỔNG CỘNG</div>
                                    <div className="col-right">309,611,340₫</div>
                                </div>
                            </div>
                            <p className="support-info">
                                Tổng đài hỗ trợ: <span className="text-info">0988360148</span>
                            </p>
                            <div className="col-12">
                                <Link to="/" className=" back-home   section__btn" >QUAY VỀ TRANG CHỦ</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>

    )
}

export default OrderCompletePage;