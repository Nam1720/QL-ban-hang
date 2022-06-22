import axios from 'axios';
import cookie from 'js-cookie'

export const GetInvoiceToday = (find) => {
  return axios.post('https://abclike.site/api/invoice/findDate', {
    tokenAdmin: cookie.get('ustkrohtodev'),
    find
  })
}

export const GetInvoiceChart = () => {
  return axios.post('https://abclike.site/api/invoice/findChart', {
    tokenAdmin: cookie.get('ustkrohtodev'),
  })
}

