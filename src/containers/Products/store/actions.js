import Service from './service';
import * as types from './types';

export const statusChanged = (payload) => ({ type: types.STATUS_CHANGED, payload });

export const toggleChanged = (payload) => ({ type: types.TOGGLE_CHANGED, payload });

/**
 * Products Action Creator - Get All Products
 *
 * @param {Function} callback
 */
export const fetchAllProducts = (callback) => async dispatch => {
    try {
        dispatch({ type: types.GET_ALL_PRODUCTS_START });

        const result = await Service.all();

        if (result && result.products) {
            dispatch({ type: types.GET_ALL_PRODUCTS_SUCCESS, payload: result.products });
            // console.log(`${types.GET_ALL_PRODUCTS_SUCCESS}: `, result);
            callback && callback();
        }
    } catch (error) {
        console.log(`${types.GET_ALL_PRODUCTS_FAIL}: `, error);
        dispatch({ type: types.GET_ALL_PRODUCTS_FAIL, payload: error });
    }
}

/**
 * Add a product
 *
 * @param {Object} data
 * @param {Function} callback
 */
export const addProduct = (data, callback) => async dispatch => {
    try {
        dispatch({ type: types.ADD_PRODUCT_START });

        if (!data.name || !data.price) {
            return dispatch({ type: types.ADD_PRODUCT_FAIL });
        }

        dispatch({ type: types.ADD_PRODUCT_SUCCESS, payload: data });
        callback && callback();
    } catch (error) {
        console.log('error from adding product: ', error);
    }
}

/**
 * Edit a product
 *
 * @param {Object} data
 * @param {Function} callback
 */
export const editProduct = (data, callback) => async dispatch => {
    try {
        dispatch({ type: types.EDIT_PRODUCT, payload: data });
        callback && callback();
    } catch (error) {
        console.log('error from editing product: ', error);
    }
}

/**
 * Delete a product
 *
 * @param {Number} id
 * @param {Function} callback
 */
export const deleteProduct = (id, callback) => async dispatch => {
    try {
        dispatch({ type: types.DELETE_PRODUCT, payload: id })
        callback && callback();
    } catch (error) {
        console.log('error while deleting product: ', error);
    }
}

/**
 * Restore a deleted product
 *
 * @param {Number} id
 * @param {Function} callback
 */
export const restoreProduct = (id, callback) => async dispatch => {
    try {
        dispatch({ type: types.RESTORE_PRODUCT, payload: id });
        callback && callback();
    } catch (error) {
        console.log('error while restoring product: ', error);
    }
}
