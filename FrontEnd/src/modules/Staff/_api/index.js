import axios from 'axios';
import cookie from 'js-cookie'

export const getListStaff = () => {
  return axios.post('https://abclike.site/api/user/getList', {
    tokenAdmin: cookie.get('ustkrohtodev')
  })
}

export const addStaff = (data) => {
  return axios.post('https://abclike.site/api/user/register', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    ...data
  })
}

export const updateStaff = (data) => {
  return axios.post('https://abclike.site/api/user/update', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    ...data
  })
}

export const removeStaff = (username) => {
  return axios.post('https://abclike.site/api/user/remove', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    username
  })
}

export const findStaff = (find) => {
  return axios.post('https://abclike.site/api/user/find', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    find
  })
}