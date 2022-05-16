import axios from 'axios';

export const addGuest = (data) => {
  return axios.post('http://localhost:3000/api/gust/create', {
    tokenAdmin: data.tokenAdmin,
    nameGust: data.nameGust,
    phone: data.phone,
    address: data.address
  })
}

export const getListGuest = (tokenAdmin) => {
  return axios.post('http://localhost:3000/api/gust/get-list', {
    tokenAdmin: tokenAdmin
  })
}