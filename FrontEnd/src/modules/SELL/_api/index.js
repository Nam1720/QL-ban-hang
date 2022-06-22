import axios from 'axios';
import cookie from 'js-cookie';

export const findGuest = (find) => {
  return axios.post('https://abclike.site/api/gust/find', {
    tokenUser: cookie.get('ustkrohtodev'),
    find,
  });
};

export const getProduct = () => {
  return axios.post('https://abclike.site/api/good/get-list');
};

export const addGuest = (nameGust, phoneGust, addressGust) => {
  return axios.post('https://abclike.site/api/gust/create', {
    tokenUser: cookie.get('ustkrohtodev'),
    nameGust,
    phoneGust,
    addressGust,
  });
};

// api find customer
export const findCustomer = (find) => {
  return axios.post('https://abclike.site/api/gust/findOne', {
    find,
    tokenUser: cookie.get('ustkrohtodev'),
  });
};

// api invoice
export const createInvoice = (payload) => {
  return axios.post('https://abclike.site/api/invoice/create', {
    ...payload,
    tokenUser: cookie.get('ustkrohtodev'),
    paymentType: 'Tiền mặt',
  });
};

//invoi list
export const getListInvoice = () => {
  return axios.post('http://localhost:3000/api/invoice/get-list', {
    tokenAdmin: cookie.get('ustkrohtodev')
  })
}
