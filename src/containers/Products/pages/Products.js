import React from 'react';
import { connect } from 'react-redux';

import { Helpers } from './../../../globals';
import { Navbar, Loader } from './../../../components';
import { ProductCard, AddProductModal } from './../components';
import { EditProductModal, RestoreProductModal, DeleteProductModal, PricesHistoryModal } from './../components';
import {
    addProduct,
    editProduct,
    deleteProduct,
    statusChanged,
    toggleChanged,
    restoreProduct,
    fetchAllProducts,
} from './../store/actions';

const Products = ({
    status,
    toggle,
    products,
    addProduct,
    editProduct,
    deleteProduct,
    statusChanged,
    toggleChanged,
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

        let cards = products.filter(product => status === 'active' ? !product.deleted_at : product.deleted_at);

        if (toggle === 'grid') {
            cards = cards.map(product => (
                    <div key={`${product.id}_${product.name}`} className="col-sm-4 mb-3">
                        <ProductCard
                            toggle={toggle}
                            product={product}
                            editProduct={editProduct}
                            deleteProduct={deleteProduct}
                            restoreProduct={restoreProduct} />
                    </div>
                )
            );

            while (cards.length > 0) {
                row = cards.splice(0, 3);
                rows.push(row);
            }

            return rows;
        }

        return cards;
    }, [products, status, toggle, editProduct, deleteProduct, restoreProduct]);

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

                        <div className="col-md-3 offset-md-3 col-sm-3 offset-sm-3 align-self-end">
                            <select className="form-control" value={toggle} onChange={e => toggleChanged(e.target.value)}>
                                <option value="grid">Grid</option>
                                <option value="table">Table</option>
                            </select>
                        </div>

                        <div className="col-md-3 col-sm-3 align-self-end">
                            <select className="form-control" value={status} onChange={e => statusChanged(e.target.value)}>
                                <option value="active">Active</option>
                                <option value="deleted">Deleted</option>
                            </select>
                        </div>
                    </div>

                    {
                        toggle === 'grid'
                            ? renderProducts().map((card, index) => <div key={index} className="row">{card}</div>)
                            : (
                                <table className="table border-top-0">
                                    <thead className="border-top-0">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Price history</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            renderProducts().map(prod => (
                                                <tr key={`product-${prod.id}`}>
                                                    <td>{prod.id}</td>
                                                    <td>{Helpers.capitalize(prod.name)}</td>
                                                    <td>{prod.prices ? Helpers.formattedCedis(prod.prices[prod.prices.length - 1].price) : 'N/A'}</td>
                                                    <td>
                                                        <PricesHistoryModal product={prod} toggle={toggle} />
                                                    </td>
                                                    <td>
                                                        <EditProductModal product={prod} editProduct={editProduct} />
                                                    </td>
                                                    <td>
                                                        {
                                                            prod.deleted_at
                                                                ? <RestoreProductModal product={prod} restoreProduct={restoreProduct} />
                                                                : <DeleteProductModal product={prod} deleteProduct={deleteProduct} />
                                                        }
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const {fetching_all_products, products, status, toggle} = state.products;
    return {fetching_all_products, products, status, toggle};
};

const mapActionsToProps = {
    addProduct,
    editProduct,
    toggleChanged,
    statusChanged,
    deleteProduct,
    restoreProduct,
    fetchAllProducts,
};

export default connect(mapStateToProps, mapActionsToProps)(Products);
