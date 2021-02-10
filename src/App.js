import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Store from './store/store';
import {Loader, NotFound} from './components';
import Products from './containers/Products/pages/Products';

const { store, persistor } = Store();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<Loader />} persistor={persistor}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/products" />
                        </Route>
                        <Route path="/products" exact component={Products} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;

