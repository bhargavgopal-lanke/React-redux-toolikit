import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
  lastName: null,
  erros: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const { setFirstName, setLastName } = userSlice.actions;

export default userSlice.reducer;
