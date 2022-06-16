import axios from 'axios';
import cookie from 'js-cookie';

export const findGuest = (find) => {
  return axios.post('http://localhost:3000/api/gust/find', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    find,
  });
};

export const getProduct = () => {
  return axios.post('http://localhost:3000/api/good/get-list');
};

export const addGuest = (nameGust, phoneGust, addressGust) => {
  return axios.post('http://localhost:3000/api/gust/create', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    nameGust,
    phoneGust,
    addressGust,
  });
};

export const createInvoice = (payload) => {
  return axios.post('http://localhost:3000/api/invoice/create', {
    ...payload,
    tokenAdmin: cookie.get('ustkrohtodev'),
  });
};
