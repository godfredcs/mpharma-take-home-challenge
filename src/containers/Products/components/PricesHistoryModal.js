import React from 'react';
import {Helpers} from './../../../globals';

const PricesHistoryModal = ({product, toggle}) => {
    return (
        <div>
            {
                toggle === 'grid'
                    ? <button type="button" className="btn btn-warning form-control" data-toggle="modal" data-target={`#product-prices-${product.id}`}>
                        Price history
                    </button>
                    : <a type="button" className="btn text-info p-0" data-toggle="modal" data-target={`#product-prices-${product.id}`}>
                        Price history
                    </a>
            }

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
                                <table id="prices" className="table border-top-0">
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
                                                    <td>{Helpers.formattedCedis(price.price)}</td>
                                                    <td>{Helpers.formattedDateTime(price.date)}</td>
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
