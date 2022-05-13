import { createSlice } from '@reduxjs/toolkit'

const guestSlice = createSlice({
  name: 'guest',
  initialState: { modalAdd: false , modalUpdate : false, listGuest: [] },
  reducers: {
    setModalAdd(state, action) {
      state.modalAdd = action.payload
    },
    setModalUpdate(state, action) {
      state.modalUpdate = action.payload
    },
    setListGuest(state, action) {
      state.listGuest = action.payload
    },
    updateListGuest(state, action) {
      state.listGuest = [...state.listGuest, action.payload]
    }
  }
})

export const { setModalAdd , setModalUpdate, setListGuest, updateListGuest } = guestSlice.actions

export default guestSlice.reducer