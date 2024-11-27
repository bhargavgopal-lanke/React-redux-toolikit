import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainCard: {
    fullName: "Test",
    middleName: "Test",
    suffix: "",
  },
  editCard: {
    fullName: "",
    middleName: "",
    suffix: "",
  },
};

const proveSlice = createSlice({
  name: "ProveMain",
  initialState,
  reducers: {
    setMainCard: (state, action) => {
      state.mainCard = action.payload;
    },
    setEditCard: (state, action) => {
      state.editCard = action.payload;
    },
    UpdateMainCard: (state) => {
      // for updating the edit info in main card
      state.mainCard = { ...state.editCard };
    },
  },
});

export const { setEditCard, setMainCard, UpdateMainCard } = proveSlice.actions;

export default proveSlice.reducer;
