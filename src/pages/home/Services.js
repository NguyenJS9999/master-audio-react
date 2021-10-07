import "./Home.css"

export function Services() {
  return (
    <>
      <section className=' services__backgound  container-fluid '>
        <div className=" services-container  container ">
          <div className=" section__title   services__title ">TẠI SAO CHỌN MASTER AUDIO</div>
          <div className=" services ">
            <div className=" service ">
              <i className=" service__icon   fas fa-award" />
              <div className=" service__title ">Sản phẩm chính hãng</div>
              <p className=" service__content  ">
                Sản phẩm được nhập khẩu trực tiếp từ các thương hiệu lớn tại Châu Âu và Châu Á
              </p>
            </div>
            <div className=" service ">
              <i className=" service__icon   fas fa-hand-holding-usd" />
              <div className=" service__title ">Giá thành hợp lý</div>
              <p className=" service__content  ">
                Tặng kèm phụ kiện với đơn hàng trên 20,000,000 VNĐ cho tất cả các khách hàng
              </p>
            </div>
            <div className=" service ">
              <i className=" service__icon   fas fa-wrench" />
              <div className=" service__title ">Miễn phí lặp đặt</div>
              <p className=" service__content  ">
                Miễn phí vận chuyển và lắp đặt
                với đơn hàng trên 50,000,000 VNĐ
              </p>
            </div>
            <div className=" service ">
              <i className=" service__icon   fas fa-cog" />
              <div className=" service__title ">Bảo hành dài lâu</div>
              <p className=" service__content  ">Bảo hành chính hãng 3 năm lỗi 1 đổi 1 trong 6 tháng đầu hỗ trợ cài
                đặt miễn phí
              </p>
            </div>
            <div className=" service ">
              <i className=" service__icon   fas fa-headset" />
              <div className=" service__title ">Hỗ trợ nhiệt tình</div>
              <p className=" service__content  ">Tổng đài miễn phí 24/24 giải đáp mọi khó khăn của quý khách hàng</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
};