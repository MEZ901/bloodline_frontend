import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: {
    isOpen: false,
    type: null,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modal.isOpen = true;
      state.modal.type = action.payload.type;
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.type = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
