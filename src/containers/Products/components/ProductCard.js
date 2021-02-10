import React from 'react';
import EditProductModal from './EditProductModal';
import DeleteProductModal from './DeleteProductModal';
import PricesHistoryModal from './PricesHistoryModal';
import RestoreProductModal from './RestoreProductModal';

const ProductCard = ({product, editProduct, deleteProduct, restoreProduct}) => {
    const src = product.image ? product.image : 'http://placehold.it/120x120&text=image1';

    return (
        <div className="card">
            {/* <img className="card-img-top" src={src} alt="Product" /> */}
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>

                <div className="row">
                    <div className="col-sm-6">
                        <p className="card-text">{product.prices ? product.prices[product.prices.length - 1].price : 'N/A'}</p>
                    </div>

                    <div className="col-sm-3">
                        <EditProductModal product={product} editProduct={editProduct} />
                    </div>

                    <div className="col-sm-3">
                        {
                            product.deleted_at
                                ? <RestoreProductModal product={product} restoreProduct={restoreProduct} />
                                : <DeleteProductModal product={product} deleteProduct={deleteProduct} />
                        }
                    </div>
                </div>
            </div>

            <PricesHistoryModal product={product} />
        </div>
    );
};

export default ProductCard;
