import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";

import ConnectedProducts from './Products';

configure({
    adapter: new Adapter()
});

const initialState = {
    products: [],
    toggle: 'grid',
    status: 'active',
    fetching_all_products: true,
};

const mockStore = configureMockStore();
let store, container;

beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<ConnectedProducts store={store} />)
});

test('Products container is mounted', () => {
    expect(container.length).toEqual(1);
});
