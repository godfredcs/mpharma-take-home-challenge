import React from 'react';
import moment from 'moment';

const PricesHistoryModal = ({product}) => {
    return (
        <div>
            <button type="button" className="btn btn-warning form-control" data-toggle="modal" data-target={`#product-prices-${product.id}`}>
                Price history
            </button>

            <div className="modal fade" id={`product-prices-${product.id}`} tabIndex="-1" role="dialog" aria-labelledby="add-product-title" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="add-product-title">Price History</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <table className="table border-top-0">
                                    <thead className="border-top-0">
                                        <tr>
                                            <th scope="col">Price</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            product.prices.map(price => (
                                                <tr key={`prices-${product.id}-${price.id}`}>
                                                    <td>{price.price}</td>
                                                    <td>{moment(price.date).format('Do MMMM YYYY, h:mm:ss a')}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricesHistoryModal;
