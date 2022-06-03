import { createSlice } from '@reduxjs/toolkit';

const sellSlice = createSlice({
  name: 'sell',
  initialState: {
    productsBuying: [],
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
  },
});

export const { setProductsBuying } = sellSlice.actions;

export default sellSlice.reducer;
