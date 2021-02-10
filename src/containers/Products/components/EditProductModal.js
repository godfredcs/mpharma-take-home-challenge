import React from 'react';
import { CustomInput } from './../../../components';

const EditProductModal = ({ product, editProduct }) => {
    const closeButtonRef = React.useRef(null);
    const [name, setName] = React.useState(product.name);
    const [price, setPrice] = React.useState(product.prices[product.prices.length - 1].price);

    const editSelectedProduct = () => {
        editProduct({ id: product.id, name, price }, () => closeButtonRef.current.click());
    };

    return (
        <div>
            <a type="button" className="btn text-warning p-0" data-toggle="modal" data-target={`#edit-product-${product.id}`}>
                Edit
            </a>

            <div className="modal fade" id={`edit-product-${product.id}`} tabIndex="-1" role="dialog" aria-labelledby="edit-product-title" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="edit-product-title">Edit Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <CustomInput value={name} title="Name" onChange={e => setName(e.target.value)} />
                                <CustomInput type="number" value={price} title="Price" onChange={e => setPrice(e.target.value)} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeButtonRef} type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning" onClick={editSelectedProduct}>Save product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProductModal;
