import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    modalAdd: false,
  },
  reducers: {
    setModalAdd(state, action) {
      state.modalAdd = action.payload;
    },
  },
});

export const { setModalAdd } = categorySlice.actions;

export default categorySlice.reducer;
