import React from 'react';
import { connect } from 'react-redux';

import {Navbar, Loader} from './../../../components';
import {ProductCard, AddProductModal} from './../components';
import {
    addProduct,
    editProduct,
    deleteProduct,
    statusChanged,
    restoreProduct,
    fetchAllProducts,
} from './../store/actions';

const Products = ({
    status,
    products,
    addProduct,
    editProduct,
    deleteProduct,
    statusChanged,
    restoreProduct,
    fetchAllProducts,
    fetching_all_products,
}) => {
    React.useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    const renderProducts = React.useCallback(() => {
        let row = [];
        const rows = [];

        if (!Array.isArray(products)) {
            return [];
        }

        const cards =
            products.filter(product => status === 'active' ? !product.deleted_at : product.deleted_at)
            .map(product => {
                return (
                    <div key={`${product.id}_${product.name}`} className="col-sm-4 mb-3">
                        <ProductCard
                            product={product}
                            editProduct={editProduct}
                            deleteProduct={deleteProduct}
                            restoreProduct={restoreProduct} />
                    </div>
                );
            });

        while (cards.length > 0) {
            row = cards.splice(0, 3);
            rows.push(row);
        }

        return rows;
    }, [products, status, editProduct, deleteProduct, restoreProduct]);

    return (
        <div>
            <Navbar />

            <div className="container">
                <Loader loading={fetching_all_products} title="loading products..." />

                <h3 className="pt-3 pb-3"><span className="text-secondary">Welcome to</span> <span className="text-warning">mPharma</span></h3>

                <div>
                    <div className="mb-3 row">
                        <div className="col-md-3 col-sm-3">
                            <AddProductModal addProduct={addProduct} />
                        </div>

                        <div className="col-md-3 offset-md-6 col-sm-3 offset-sm-6 align-self-end">
                            <select className="form-control" value={status} onChange={e => statusChanged(e.target.value)}>
                                <option value="active">Active</option>
                                <option value="deleted">Deleted</option>
                            </select>
                        </div>
                    </div>

                    { renderProducts().map((card, index) => <div key={index} className="row">{card}</div>) }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const {fetching_all_products, products, status} = state.products;
    return {fetching_all_products, products, status};
};

const mapActionsToProps = {
    addProduct,
    editProduct,
    statusChanged,
    deleteProduct,
    restoreProduct,
    fetchAllProducts,
};

export default connect(mapStateToProps, mapActionsToProps)(Products);
