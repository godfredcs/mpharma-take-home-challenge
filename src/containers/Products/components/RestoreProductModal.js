import React from 'react';

const RestoreProductModal = ({product, restoreProduct}) => {
    const closeButtonRef = React.useRef(null);

    const restoreSelectedProduct = () => {
        restoreProduct(product.id, () => closeButtonRef.current.click());
    };

    return (
        <div>
            <a
                href="#"
                type="button"
                data-toggle="modal"
                className="btn text-info p-0"
                data-target={`#delete-product-${product.id}`}>Restore</a>

            <div className="modal fade" id={`delete-product-${product.id}`} tabIndex="-1" role="dialog" aria-labelledby="delete-product-title" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="delete-product-title">Restore Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <p>Are you sure you want to restore <span className="font-weight-bold">{product.name}</span>?</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeButtonRef} type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-info" onClick={restoreSelectedProduct}>Restore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestoreProductModal;
