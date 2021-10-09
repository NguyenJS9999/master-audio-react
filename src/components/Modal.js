
function CustomModal( { proTitle, imgUrl, proBrand, proName, proId } ) {
    return (
        <>
            <div className="modal fade" id={proId} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title text-center"  >{ proTitle }</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <img src={imgUrl} alt={proName} />
                            <strong>{proBrand}</strong>&nbsp;
                            <span>{proName}</span>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                        
                    </div>

                </div>
            </div>
        </>
    )


}
export default CustomModal;