import { createSlice } from '@reduxjs/toolkit';

const sellSlice = createSlice({
  name: 'sell',
  initialState: {
    activeModal: true,
    productsBuying: [],
    customer: '',
    listGuest: [],
    guest: {
      nameGuest: '',
      addressGuest: '',
      phoneGuest: '',
    },
    product: [],
  },
  reducers: {
    setProductsBuying(state, action) {
      state.productsBuying = action.payload;
    },
    setActiveModal(state, action) {
      state.activeModal = action.payload;
    },
    setCustomer(state, action) {
      state.customer = action.payload;
    },
    addListGust(state, action) {
      state.listGuest = [...state.listGuest, action.payload];
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
  },
});

export const {
  setProductsBuying,
  setActiveModal,
  setCustomer,
  addListGust,
  setValueSelect,
  setProduct,
} = sellSlice.actions;

export default sellSlice.reducer;
