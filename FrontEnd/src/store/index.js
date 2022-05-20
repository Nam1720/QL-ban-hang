import { combineReducers } from 'redux';
import common from 'modules/Commons/_store/commonSlice';
import auth from 'modules/Auth/_store/authSlice';
import guest from '../modules/Guest/_store/guestSlice';
import staff from '../modules/Staff/_store/staffSlice';
import invoice from '../modules/Invoice/_store/invoiceSlice';

const rootReducer = combineReducers({
  common,
  auth,
  guest,
  staff,
  invoice,
  
});

export default rootReducer;
