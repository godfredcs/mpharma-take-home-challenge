import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import productReducer from './../containers/Products/store/reducer';

const persistConfig = {
    storage,
    key: 'root',
    whitelist: ['products'],
};

const rootReducer = combineReducers({
    products: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const applicationStore = () => {
    let store = createStore(
        persistedReducer,
        {},
        compose(
            applyMiddleware(thunk)
        )
    );

    let persistor = persistStore(store);
    return { store, persistor };
};

export default applicationStore;
