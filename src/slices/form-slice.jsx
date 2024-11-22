import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
  lastName: null,
  errors: {},
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
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setErrors } = userSlice.actions;

export default userSlice.reducer;
