import { useRef } from "react";
import { Toast } from "bootstrap";

function CustomToast({ buttonText, contentText, time }) {
  const toastEl = useRef(null);

  function openToast() {
    var toast = new Toast(toastEl.current);
    toast.show();
  }

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={openToast}>
        {buttonText}
      </button>

      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div
          ref={toastEl}
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img src="..." className="rounded me-2" alt="..." />
            <strong className="me-auto">Alert</strong>
            <small>{time}</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div className="toast-body">{contentText}</div>
        </div>
      </div>
    </div>
  );
}

export default CustomToast;
