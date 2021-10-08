import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./OrderComplete.css"

function OrderCompletePage() {
    const shoppingList = useSelector((state) => state.cart.listProductCart);
    const orderInfor = useSelector((state) => state.order.orderInfor);
    const currentOrderInfor = orderInfor[orderInfor.length - 1];
    const objectCurrentOrderInfor = currentOrderInfor[0]

    const orderItemElement = shoppingList.map((item) => (
        <div key={item.id} className="order-item order-row">
            <div className="col-left">
                {item.brand}&nbsp;{item.name}&nbsp;x<span className="order-item__quantity">&nbsp;{item.quantity}</span>
            </div>
            <div className="col-right order-item__unit-price">{ ((item.price )*(item.quantity)).toLocaleString()  }&nbsp;₫</div>
        </div>
    ));

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
                                {/* order-item */}
                                { orderItemElement }

                                <div className="order-complete__vat order-row-small">
                                    <div className="col-left">Thuế VAT (10%)</div>
                                    <div className="col-right">
                                        + <span className="discount-amount">{objectCurrentOrderInfor.vat.toLocaleString()}&nbsp;₫</span>
                                    </div>
                                </div>
                             
                                <div className="order-complete__discount order-row-small">
                                    <div className="col-left">Giảm giá</div>
                                    <div className="col-right">
                                        - <span className="discount-amount">{objectCurrentOrderInfor.discount.toLocaleString()}&nbsp;₫</span>
                                    </div>
                                </div>

                                <div className="order-ship-fee order-row-small">
                                    <div className="col-left">Phí giao hàng</div>
                                    <div className="col-right">{(0).toLocaleString()}₫</div>
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
                                    <div className="col-right">{objectCurrentOrderInfor.gross.toLocaleString()}&nbsp;₫</div>
                                </div>
                            </div>
                            <p className="support-info">
                                Tổng đài hỗ trợ: <span className="text-info">&nbsp;0988360148</span>
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