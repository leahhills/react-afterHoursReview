import axios from 'axios';

export function getProducts() {
    return axios.get('http://localhost:3030/api/products')
    .then(res => res.data)
}

