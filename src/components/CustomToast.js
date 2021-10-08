import { useRef } from "react";
import { Toast } from "bootstrap";
import "./toast.css"

function CustomToast({ toastTitle, toastBrand, toastName, buttonText, imgSrc }) {
  const toastEl = useRef(null);

  function openToast() {
    var toast = new Toast(toastEl.current);
    toast.show();
  }

  return (
    <>
      <div style={{ width: '100%' }} >

        <div type="button"
          // className="btn btn-primary" 
          className="btn-addtocart  product-card__btn"
          onClick={openToast}
        >
          <i className="fas fa-shopping-cart" />&nbsp;
          {buttonText}
        </div>

        <div className=" position-fixed bottom-0 end-0 p-3 " style={{ zIndex: 11 }}>

          <div ref={toastEl} className="toast" role="alert" aria-live="assertive" aria-atomic="true"  >

            <div className="toast-title  toast-body text-center">{toastTitle}</div>

            <div className="toast-header">
              <img src={imgSrc} className="rounded me-2" alt="..." />
              <strong className="me-auto">{toastBrand}&nbsp;{toastName}</strong>
              {/* <small>{time}</small> */}

              <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
            </div>


          </div>
        </div>
      </div>

      {/* <CustomToast
        onClick={() => dispatch(addProduct(item))}
        toastTitle="Đã thêm sản phẩm vào giỏ hàng!"
        buttonText="Thêm vào giỏ hàng"
        toastBrand={item.brand}
        toastName={item.name}
        imgSrc={item.image}
      >
      </CustomToast> */}
    </>
  );
}

export default CustomToast;

