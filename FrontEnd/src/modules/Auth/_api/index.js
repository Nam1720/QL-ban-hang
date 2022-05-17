import HttpService from 'utils/http'
import axios from 'axios';

export const login = (username, password) => {
  return axios.post('http://localhost:3000/api/admin/login', {
    username,
    password
  })
}

export const getProfile = () => {
  let apiEndpoint = '/profile';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {};
  }).catch(() => { return false });
}
