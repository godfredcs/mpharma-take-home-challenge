import React from 'react';
import { CustomInput } from './../../../components';

const AddProductModal = ({addProduct}) => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const closeButtonRef = React.useRef(null);

    const saveNewProduct = () => {
        addProduct({name, price}, () => {
            closeButtonRef.current.click();
            setName('');
            setPrice('');
        });
    }

    return (
        <div>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#add-product">
                Add Product
            </button>

            <div className="modal fade" id="add-product" tabIndex="-1" role="dialog" aria-labelledby="add-product-title" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="add-product-title">Add Product</h5>
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
                            <button type="button" className="btn btn-warning" onClick={saveNewProduct}>Save product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductModal;
