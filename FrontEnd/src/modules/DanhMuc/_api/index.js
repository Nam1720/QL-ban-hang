import axios from 'axios';
import Cookies from 'js-cookie';

export const addProduct = (payload) => {
  return axios.post('https://abclike.site/api/good/add', {
    ...payload,
    tokenAdmin: Cookies.get('ustkrohtodev'),
  });
};

export const getListProduct = () => {
  return axios.post('https://abclike.site/api/good/get-list');
};

export const removeProduct = (codeProduct) => {
  return axios.post('https://abclike.site/api/good/remove', {
    codeProduct,
    tokenAdmin: Cookies.get('ustkrohtodev'),
  });
};

export const updateProduct = (payload) => {
  return axios.post('https://abclike.site/api/good/update', {
    ...payload,
    tokenAdmin: Cookies.get('ustkrohtodev'),
  });
};

export const updatePriceSell = (payload) => {
  return axios.post('https://abclike.site/api/good/update-priceSell', {
    ...payload,
    tokenAdmin: Cookies.get('ustkrohtodev'),
  });
};

export const find = (find) => {
  return axios.post('https://abclike.site/api/good/find', {
    find,
    tokenAdmin: Cookies.get('ustkrohtodev'),
  });
};
