import axios from 'axios';
import Cookies from 'js-cookie';

export const addProduct = (payload) => {
  return axios.post('http://localhost:3000/api/good/add', {
    ...payload,
    tokenAdmin: Cookies.get('ustkrohtodev'),
  });
};

export const getListProduct = () => {
  return axios.post('http://localhost:3000/api/good/get-list');
};

export const removeProduct = (codeProduct) => {
  return axios.post('http://localhost:3000/api/good/remove', {
    codeProduct,
    tokenAdmin: Cookies.get('ustkrohtodev'),
  });
};