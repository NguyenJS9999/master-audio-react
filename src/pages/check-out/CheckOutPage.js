import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//  Redux
import { useDispatch, useSelector } from "react-redux";
import { addCustomerInfor } from "../../store/checkOutSlice"


// import { accordion } from "bootstrap"


import "./CheckOut.css";
// import CustomToast from "../../components/CustomToast";
// import CustomTab from "../../components/Tab";`
import Newsletter from "../../newsletter/NewsLetter"

function CheckOutPage() {
  const shoppingList = useSelector((state) => state.cart.listProductCart);
  // Số liệu tính toán
  const currentOrderInfor  = useSelector((state) => state.order.orderInfor );
  // const orderInfor = currentOrderInfor[ currentOrderInfor.length - 1 ];
  const objectCurrentOrderInfor = currentOrderInfor[ 0 ];
  console.log('objectCurrentOrderInfor', objectCurrentOrderInfor)

  // const [ state, set ] = useState();
  const [stateOrderStatus, setOrderStatus] = useState(false);
  // Form nhập thông tin khách hàng
  const [ stateInputName, setInputName ] = useState('');
  const [ stateInputPhone, setInputPhone ] = useState(null);
  const [ stateInputAddress, setInputAddress ] = useState('');
  const [ stateInputCity, setInputCity ] = useState('');
  const [ stateInputDistrict, setInputDistrict ] = useState('');
  const [ stateInputWard, setInputWard ] = useState('');
  const [ stateInputOrderNotes, setInputOrderNotes ] = useState('');
  const [ stateShippingMethod, setShippingMethod ] = useState('');

  
  // Redux gửi data khách hàng lên store
  const dispatch = useDispatch();
  // Mảng chứa thông tin khách hàng nhập vàp
  let customerDataInput =  {
      name: stateInputName,
      phone: stateInputPhone,
      address: stateInputAddress,
      city: stateInputCity,
      district: stateInputDistrict,
      ward: stateInputWard,
      note: stateInputOrderNotes
    };
  // Kiểm tra liên tục ô input để bật nút
  useEffect(() => {
    if (stateInputName === '' || stateInputPhone === '' || stateInputAddress === '' ||
      stateInputCity === '' || stateInputDistrict === '' || stateInputWard === ''|| 
      stateShippingMethod ==='') {
      // console.log('Vui lòng nhập đủ thông tin')
      setOrderStatus(false);
      // Lỗi
    }
    else if (stateInputName || stateInputPhone || stateInputAddress ||
      stateInputCity || stateInputDistrict || stateInputWard || stateShippingMethod) {
      setOrderStatus(true)
    }

  }, [stateInputName, stateInputPhone, stateInputAddress,
    stateInputCity, stateInputDistrict, stateInputWard, stateShippingMethod])

  // Lấy ra giá trị ô input mỗi trường
  function getValueInforInput(event, nameInput) {
    let eventTargetValue = event.target.value
    if (nameInput === 'name') {
      setInputName( eventTargetValue );
    } else if (nameInput === 'phone') {
      setInputPhone( eventTargetValue );
    } else if (nameInput === 'address') {
      setInputAddress( eventTargetValue );
    } else if (nameInput === 'city') {
      setInputCity( eventTargetValue );
    } else if (nameInput === 'district') {
      setInputDistrict( eventTargetValue );
    } else if (nameInput === 'ward') {
      setInputWard( eventTargetValue );
    } else if (nameInput === 'order-notes') {
      setInputOrderNotes( eventTargetValue );
    }else if (nameInput === 'shipping-method') {
      setShippingMethod( eventTargetValue );
    }
    
  }

  const orderItemElement = shoppingList.map((item) => (
    <div key={item.id} className="order-item order-row">

      <div className="col-left">
        <img className='check-out__img-item' src={item.image} alt="speak" />&nbsp;
        {item.brand}&nbsp;{item.name}&nbsp;x&nbsp;
        <span className="order-item__quantity"><strong>{item.quantity}</strong></span>
      </div>

      <div className="col-right order-item__unit-price">{((item.price) * (item.quantity)).toLocaleString()}&nbsp;₫</div>
    </div>
  ));


  return (
    <>
      {/* breadcrumb */}
      <div className="page-banner     container-fluid ">
        <div className=" page-banner__content ">
          <div className=" breadcrumb-title ">THANH TOÁN</div>

          <div className="page-banner__hr-line" />

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="./index.html">TRANG CHỦ</a></li>
              <li className="breadcrumb-item" aria-current="page">THANH TOÁN</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* breadcrumb */}

      <section className="section-order__container container-fluid">
        <div className="order container">
          <div
            // dùng <form onSubmit={handleSubmit(onSubmit)}
            className="order-form needs-validation">

            <div className=" info-order--payment__container ">

              {/* Thông tin thanh toán */}
              <div className="order-info">
                <h4 className="order__title">Thông tin thanh toán</h4>

                <div className="order__first-info row g-3">

                  <div className="order__name">
                    <label htmlFor='name' >Họ và tên <span className='required'>*</span></label>
                    <input
                      // {...register("name")} 
                      onChange={(event) => getValueInforInput(event, 'name')}
                      id='name' type="text" className=" name-input" placeholder="" />

                    <div className="feedback-noti">Vui lòng nhập họ tên</div>
                  </div>

                  <div className="order__phone">
                    <label htmlFor='phone' >Số điện thoại <span className='required'>*</span></label>
                    <input
                      onChange={(event) => getValueInforInput(event, 'phone')}
                      id='phone' type="number" className=" phone-input" placeholder="(+84)" />

                    <div className="feedback-noti">Vui lòng nhập số điện thoại</div>
                  </div>

                  <div className="order__address">
                    <label htmlFor='address' >Địa chỉ <span className='required'>*</span></label>
                    <input
                      onChange={(event) => getValueInforInput(event, 'address')}
                      id='address' type="text" className=" address-input" placeholder="Số nhà, nghách, ngõ" />

                    <div className="feedback-noti">Vui lòng nhập địa chỉ</div>
                  </div>

                  <div className="order__city">
                    <label htmlFor='city' >Tỉnh/Thành phố <span className='required'>*</span></label>
                    <input
                      onChange={(event) => getValueInforInput(event, 'city')}
                      id='city' type="text" className=" city-input" placeholder="" />

                    <div className="feedback-noti">Vui lòng nhập tỉnh/thành phố</div>
                  </div>

                  <div className="order__district">
                    <label htmlFor='district' >Quận/Huyện <span className='required'>*</span></label>
                    <input
                      onChange={(event) => getValueInforInput(event, 'district')}
                      id='district' type="text" className=" district-input" placeholder="" />

                    <div className="valid-feedback feedback-noti">
                      Vui lòng nhập quận/huyện
                    </div>
                  </div>

                  <div className="order__ward">
                    <label htmlFor='ward' >Phường/Xã <span className='required'>*</span></label>
                    <input
                      onChange={(event) => getValueInforInput(event, 'ward')}
                      id='ward' type="text" className=" ward-input" placeholder="" />

                    <div className="feedback-noti">Vui lòng nhập phường/xã</div>
                  </div>

                  <div className="order__ship-method">
                    <select onChange={(event) => getValueInforInput(event, 'shipping-method')}
                      className="form-select ship-method-select" id="ship-method">

                      <option defaultValue="default" value> Phương thức vận chuyển * </option>
                      <option value="standard">Tiêu chuẩn</option>
                      <option value="save">Tiết kiệm</option>
                      <option value="fast">Nhanh</option>
                      <option value="super-fast">Hỏa tốc</option>
                    </select>

                    <div className="feedback-noti">
                      Vui lòng chọn phương thức vận chuyển
                    </div>
                  </div>
                  {/* Ghi chú đơn hàng */}
                  <div className=" mb-3 ">
                    <textarea onChange={(event) => getValueInforInput(event, 'order-notes')}
                      className=" order-note form-control "
                      id="order-note" rows={3} placeholder="Ghi chú đơn hàng" />
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
                          <input className="form-check-input pay-radio" type="radio" name="pay-methods" id="visa-pay" />
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
                  {/* Chuyển khoản ngân hàng */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingBankTransfer">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bankTransfer" aria-expanded="false" aria-controls="bankTransfer">
                        <div className="form-check">
                          <input className="form-check-input pay-radio" type="radio" name="pay-methods" id="bank-pay" />
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
                        <Link to="./check-out" className="text-info">&nbsp;đây</Link>. <br />
                        Nội dung chuyển khoản:
                        <span className="text-bold text-danger">&nbsp;“SĐT của bạn - Mã đơn hàng”</span>.
                        <br />
                        (Ví dụ:&nbsp;
                        <span className="text-bold">“0988360148 - 006868”</span>)
                      </div>
                    </div>
                  </div>
                  {/* Thanh toán tiền mặt khi nhận hàng */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingCod">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cod" aria-expanded="false" aria-controls="cod">
                        <div className="form-check">
                          <input className="form-check-input pay-radio" type="radio" defaultChecked name="pay-methods" id="cod-pay" />
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
                {/*  */}
              </div>
            </div>

            {/* Thông tin đơn hàng */}
            <div className="order__details">
              <h4 className="order__title">Thông tin đơn hàng</h4>

              <div className="order__list">
                <div className="order-header order-row">
                  <div className="col-left">SẢN PHẨM</div>
                  <div className="col-right">THÀNH TIỀN</div>
                </div>
                {/* List */}
                {orderItemElement}

                {/* Tổng tiền */}
                <div className="order-price order-row-small">
                  <div className="col-left">Tạm tính</div>
                  <div className="col-right">{objectCurrentOrderInfor.net.toLocaleString()}&nbsp;₫</div>
                </div>

                <div className="check-out__order-discount order-row-small">
                  <div className="col-left">VAT (10%)</div>
                  <div className="col-right">
                    + <span className="discount-amount">{objectCurrentOrderInfor.vat.toLocaleString()}&nbsp;₫</span>
                  </div>
                </div>

                <div className=" tax-avt    order-row-small">
                  <div className="col-left">Giảm giá</div>
                  <div className="col-right">
                    - <span className=" discount-amount ">{objectCurrentOrderInfor.discount.toLocaleString()}&nbsp;₫</span>
                  </div>
                </div>

                <div className="order-ship-fee order-row-small">
                  <div className="col-left">Phí giao hàng</div>
                  <div className="col-right">0₫</div>
                </div>

                <div className="order-subtotal order-row">
                  <div className="col-left">TỔNG TIỀN</div>
                  <div className="col-right">{objectCurrentOrderInfor.gross.toLocaleString()}&nbsp;₫</div>
                </div>
              </div>

              {/* Nút tiến hành đặt hàng */}
              <div className="col-12">
                {stateOrderStatus ?
                  (<Link disabled={true}
                    onClick={() => dispatch( addCustomerInfor(customerDataInput) ) }
                    to="/order-complete" >
                    <button className="section__btn w-100 btn-place-order " type="submit" >ĐẶT HÀNG </button>
                  </Link>)
                  :
                  (<button
                    className="section__btn w-100 btn-place-order   cursor__not-allowed " type="button">ĐẶT HÀNG
                  </button>)
                }
                {/* cursor__not-allowed */}
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
