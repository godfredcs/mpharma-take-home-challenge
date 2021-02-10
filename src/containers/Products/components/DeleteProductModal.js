import React from 'react';

const DeleteProductModal = ({product, deleteProduct}) => {
    const closeButtonRef = React.useRef(null);

    const deleteSelectedProduct = () => {
        deleteProduct(product.id, () => closeButtonRef.current.click());
    };

    return (
        <div>
            <a type="button" className="btn text-danger p-0" data-toggle="modal" data-target={`#delete-product-${product.id}`}>
                Delete
            </a>

            <div className="modal fade" id={`delete-product-${product.id}`} tabIndex="-1" role="dialog" aria-labelledby="delete-product-title" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="delete-product-title">Delete Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <p>Are you sure you want to delete <span className="font-weight-bold">{ product.name }</span>?</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeButtonRef} type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-warning" onClick={deleteSelectedProduct}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;
