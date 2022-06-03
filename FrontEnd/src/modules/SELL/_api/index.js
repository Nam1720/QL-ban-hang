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

export const addGuest = (payload) => {
  return axios.post('http://localhost:3000/api/user/login', {
    ...payload,
    tokenUser: cookie.get('ustkrohtodev'),
  });
};
