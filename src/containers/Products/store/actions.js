import Service from './service';
import * as types from './types';

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
            dispatch({ type: types.GET_ALL_PRODUCTS_SUCCESS, payload: result });

            callback && callback();
        }
    } catch (error) {
        console.log(`${types.GET_ALL_PRODUCTS_FAIL}: ${error}`);
        dispatch({ type: types.GET_ALL_PRODUCTS_FAIL, payload: error });
    }
}
