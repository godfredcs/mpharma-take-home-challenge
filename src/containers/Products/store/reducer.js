import * as types from './types';

const INITIAL_STATE = {
    products: [],
    fetching_all_products: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_ALL_PRODUCTS_START:
            return {
                ...state,
                fetching_all_products: true
            };

        case types.GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                fetching_all_products: false,
            };

        case types.GET_ALL_PRODUCTS_FAIL:
            return {
                ...state,
                fetching_all_products: false,
            };

        default:
            return state;
    }
};

export default reducer;
