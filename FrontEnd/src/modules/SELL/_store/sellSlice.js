import { createSlice } from '@reduxjs/toolkit';

const sellSlice = createSlice({
  name: 'sell',
  initialState: {
    activeModal: true,
    productsBuying: [],
    customer: '',
    guest: {
      nameGuest: '',
      addressGuest: '',
      phoneGuest: '',
    },
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
  },
});

export const { setProductsBuying, setActiveModal, setCustomer } =
  sellSlice.actions;

export default sellSlice.reducer;
