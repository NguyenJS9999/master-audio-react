import "./NewsLetter.css"

function Newsletter() {
    return (
        <>
            {/* Email nhận tin tức mới */}
            <section className=" newsletter-container    container-fluid ">
                <div className=" newsletter-title ">ĐĂNG KÍ NHẬN TIN MỚI</div>
                <div className=" newsletter-description ">
                    Nhận các tin tức về sản phẩm và khuyến mãi sớm nhất
                </div>
                <div className=" get-news ">
                    <i className=" service__icon   fas fa-paper-plane" />
                    <input type="text" placeholder="Email của bạn..." />
                </div>
            </section>
        </>
    )
}

export default Newsletter;