import axios from 'axios';
import cookie from 'js-cookie'

export const getListInvoice = () => {
  return axios.post('https://abclike.site/api/invoice/get-list', {
    tokenAdmin: cookie.get('ustkrohtodev')
  })
}

export const addInvoice = (data) => {
  return axios.post('https://abclike.site/api/invoice/register', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    ...data
  })
}

export const updateInvoice = (data) => {
  return axios.post('https://abclike.site/api/invoice/update', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    ...data
  })
}

export const removeInvoice = (codeInvoice) => {
  return axios.post('https://abclike.site/api/invoice/remove', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    codeInvoice
  })
}

export const findInvoice = (find) => {
  return axios.post('https://abclike.site/api/invoice/find', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    find
  })
}

export const findInvoiceDate = (find) => {
  return axios.post('https://abclike.site/api/invoice/findDate', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    find
  })
}