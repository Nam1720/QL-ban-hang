import axios from 'axios';
import cookie from 'js-cookie'

export const addGuest = (nameGust, phoneGust, addressGust) => {
  return axios.post('https://abclike.site/api/gust/create', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    nameGust,
    phoneGust,
    addressGust
  })
}

export const getListGuest = () => {
  return axios.post('https://abclike.site/api/gust/get-list', {
    tokenAdmin: cookie.get('ustkrohtodev')
  })
}

export const updateGuest = (data) => {
  return axios.post('https://abclike.site/api/gust/update', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    ...data
  })
}

export const removeGuest = (codeGust) => {
  return axios.post('https://abclike.site/api/gust/remove', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    codeGust
  })
}

export const findGuest = (find) => {
  return axios.post('https://abclike.site/api/gust/find', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    find
  })
}