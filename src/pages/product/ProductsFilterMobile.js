

function ProductsFilterMobile({ stateToggleFilterMobile, toggleFilterMobile }) {

    return (
        <>
            {/* LỌC SẢN PHẨM Mobile  */}
            <div className={` ${stateToggleFilterMobile ? 'mobile-products__filter-open' : 'mobile-products__filter-close '} mobile-products__filter`} >
                <div onClick={toggleFilterMobile}
                    className="btn-close-filter"> <i className="fas fa-times" />
                </div>

                <h4 className="section-title filter-title">LỌC SẢN PHẨM</h4>

                <div className="remove-filter-container">
                    <button className="section__btn remove-filter__btn">XÓA LỌC</button>
                </div>
                {/* Lọc theo thương hiệu */}
                <div className=" filter__brands">
                    <h4 className="section-title filter-title">LỌC THEO THƯƠNG HIỆU</h4>
                    <div className="filter__list">
                        <span>
                            <input type="radio" id="4 Acoustic" name="brand" defaultValue="4 Acoustic" />
                            <label className="filter__item filter__brand-item" htmlFor="4 Acoustic">4 Acoustic</label>
                        </span>
                        <span>
                            <input type="radio" id="Nexo" name="brand" defaultValue="Nexo" />
                            <label className="filter__item filter__brand-item" htmlFor="Nexo">Nexo</label>
                        </span>
                        <span>
                            <input type="radio" id="Adamson" name="brand" defaultValue="Adamson" />
                            <label className="filter__item filter__brand-item" htmlFor="Adamson">Adamson</label>
                        </span>
                        <span>
                            <input type="radio" id="Amate" name="brand" defaultValue="Amate" />
                            <label className="filter__item filter__brand-item" htmlFor="Amate">Amate</label>
                        </span>
                        <span>
                            <input type="radio" id="Kuledy" name="brand" defaultValue="Kuledy" />
                            <label className="filter__item filter__brand-item" htmlFor="Kuledy">Kuledy</label>
                        </span>
                        <span>
                            <input type="radio" id="DK" name="brand" defaultValue="DK" />
                            <label className="filter__item filter__brand-item" htmlFor="DK">DK</label>
                        </span>
                        <span>
                            <input type="radio" id="Baiervires" name="brand" defaultValue="Baiervires" />
                            <label className="filter__item filter__brand-item" htmlFor="Baiervires">Baiervires</label>
                        </span>
                        <span>
                            <input type="radio" id="Hous" name="brand" defaultValue="Hous" />
                            <label className="filter__item filter__brand-item" htmlFor="Hous">Hous</label>
                        </span>
                        <span>
                            <input type="radio" id="Pioneer Dj" name="brand" defaultValue="Pioneer Dj" />
                            <label className="filter__item filter__brand-item" htmlFor="Pioneer Dj">Pioneer Dj</label>
                        </span>
                        <span>
                            <input type="radio" id="Pioneer Dj" name="brand" defaultValue="Pioneer Dj" />
                            <label className="filter__item filter__brand-item" htmlFor="Pioneer Dj">Allen Heath</label>
                        </span>
                    </div>
                    {/*  */}
                </div>
                {/* MOBILE - Lọc theo loại sản phẩm */}
                <div className=" filter__type">
                    <h4 className="section-title filter-title">LỌC THEO LOẠI SẢN PHẨM</h4>
                    <div className="filter__type-list filter__list">
                        <span>
                            <input type="radio" id="Subwoofer" name="speak" defaultValue="Subwoofer" />
                            <label className="filter__item filter__type-item" htmlFor="Subwoofer">Subwoofer</label>
                        </span>
                        <span>
                            <input type="radio" id="Full-range" name="speak" defaultValue="Full range" />
                            <label className="filter__item filter__type-item" htmlFor="Full-range">Full range</label>
                        </span>
                        <span>
                            <input type="radio" id="Line-array" name="speak" defaultValue="Line array" />
                            <label className="filter__item filter__type-item" htmlFor="Line-array">Line array</label>
                        </span>
                        <span>
                            <input type="radio" id="Mid-low" name="speak" defaultValue="Mid low" />
                            <label className="filter__item filter__type-item" htmlFor="Mid-low">Mid low</label>
                        </span>
                        <span>
                            <input type="radio" id="Amplifier" name="speak" defaultValue="Amplifier" />
                            <label className="filter__item filter__type-item" htmlFor="Amplifier">Amplifier</label>
                        </span>
                        <span>
                            <input type="radio" id="Micro" name="speak" defaultValue="Micro" />
                            <label className="filter__item filter__type-item" htmlFor="Micro">Micro</label>
                        </span>
                        <span>
                            <input type="radio" id="Digital-echo" name="speak" defaultValue="Digital echo" />
                            <label className="filter__item filter__type-item" htmlFor="Digital-echo">Digital echo
                            </label>
                        </span>
                        <span>
                            <input type="radio" id="Auto-power" name="speak" defaultValue="Auto power" />
                            <label className="filter__item filter__type-item" htmlFor="Auto-power">Auto power</label>
                        </span>
                        <span>
                            <input type="radio" id="Mixer" name="speak" defaultValue="Mixer" />
                            <label className="filter__item filter__type-item" htmlFor="Mixer">Mixer</label>
                        </span>
                        <span>
                            <input type="radio" id="DJ" name="speak" defaultValue="DJ" />
                            <label className="filter__item filter__type-item" htmlFor="DJ">JD</label>
                        </span>
                    </div>

                </div>
                {/* Lọc theo quốc gia */}
                <div className=" filter__nation">
                    <h4 className="section-title filter-title">LỌC THEO QUỐC GIA</h4>
                    <div className="filter__nation-list filter__list">
                        <span>
                            <input type="radio" id="Gemany" name="nation" defaultValue="Gemany" />
                            <label className="filter__item filter__Nation-item" htmlFor="Gemany">Đức</label>
                        </span>
                        <span>
                            <input type="radio" id="France" name="nation" defaultValue="France" />
                            <label className="filter__item filter__Nation-item" htmlFor="France">Pháp</label>
                        </span>
                        <span>
                            <input type="radio" id="Canada" name="nation" defaultValue="Canada" />
                            <label className="filter__item filter__Nation-item" htmlFor="Canada">Canada</label>
                        </span>
                        <span>
                            <input type="radio" id="Canada" name="nation" defaultValue="Canada" />
                            <label className="filter__item filter__Nation-item" htmlFor="Canada">Tây Ban Nha</label>
                        </span>
                        <span>
                            <input type="radio" id="America" name="nation" defaultValue="America" />
                            <label className="filter__item filter__Nation-item" htmlFor="America">Mỹ</label>
                        </span>
                        <span>
                            <input type="radio" id="China" name="nation" defaultValue="China" />
                            <label className="filter__item filter__Nation-item" htmlFor="China">Trung Quốc</label>
                        </span>
                    </div>
                </div>

            </div>

            {/* End - LỌC SẢN PHẨM Mobile  */}

        </>
    )
}

export default ProductsFilterMobile;