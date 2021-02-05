import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://www.mocky.io/v2/5c3e15e63500006e003e9795',

    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});

export default axios;
