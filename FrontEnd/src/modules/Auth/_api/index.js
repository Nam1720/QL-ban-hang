import HttpService from 'utils/http'
import axios from 'axios';

export const login = (username, password, type) => {
  return axios.post('https://abclike.site/api/admin/login', {
    username,
    password,
    type
  })
}

export const getProfile = () => {
  let apiEndpoint = '/profile';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {};
  }).catch(() => { return false });
}
