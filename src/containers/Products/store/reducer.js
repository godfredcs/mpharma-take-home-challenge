import * as types from './types';

const INITIAL_STATE = {
    products: [],
    toggle: 'grid',
    status: 'active',
    product_added: false,
    fetching_all_products: false,
};

let index = null;

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.STATUS_CHANGED:
            return {
                ...state,
                status: action.payload,
            };

        case types.TOGGLE_CHANGED:
            return {
                ...state,
                toggle: action.payload,
            };

        case types.GET_ALL_PRODUCTS_START:
            return {
                ...state,
                fetching_all_products: true
            };

        case types.GET_ALL_PRODUCTS_SUCCESS:
            action.payload.forEach(product => {
                if (!state.products.find(prod => prod.id === product.id)) {
                    state.products.push(product);
                }
            });

            return {
                ...state,
                fetching_all_products: false,
                products: [ ...state.products ],
            };

        case types.GET_ALL_PRODUCTS_FAIL:
            return {
                ...state,
                fetching_all_products: false,
            };

        case types.ADD_PRODUCT_SUCCESS:
            let new_product = {
                id: state.products[state.products.length - 1].id + 1,
                name: action.payload.name,
                prices: [
                    {
                        id: 1,
                        price: action.payload.price,
                        date: new Date().toISOString()
                    }
                ]
            };

            return {
                ...state,
                product_added: true,
                products: [
                    ...state.products,
                    new_product,
                ],
            };

        case types.EDIT_PRODUCT:
            index = state.products.findIndex(product => product.id === action.payload.id);

            if (index && index < 0) {
                return state;
            }

            if (action.payload.name) {
                state.products[index].name = action.payload.name;
            }

            const last_price = state.products[index].prices[state.products[index].prices.length - 1];

            if (Number(action.payload.price) && last_price.price !== Number(action.payload.price)) {
                state.products[index].prices.push({
                    id: last_price.id + 1,
                    price: action.payload.price,
                    date: new Date().toISOString(),
                });
            }

            return { ...state, products: [...state.products] };

        case types.DELETE_PRODUCT:
            index = state.products.findIndex(product => product.id === action.payload);

            if (index && index < 0) {
                return state;
            }

            state.products[index].deleted_at = new Date().toISOString();

            return {...state, products: [...state.products]};

        case types.RESTORE_PRODUCT:
            index = state.products.findIndex(product => product.id === action.payload);

            if (index && index < 0) {
                return state;
            }

            state.products[index].deleted_at = null;

            return {
                ...state,
                products: [...state.products]
            };

        default:
            return state;
    }
};

export default reducer;
