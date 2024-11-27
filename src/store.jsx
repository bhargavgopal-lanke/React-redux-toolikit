import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/form-slice";
import proveSlice from "./slices/prove-slice";

const store = configureStore({
  reducer: {
    userSliceInfo: userSlice,
    ProveMainInfo: proveSlice,
  },
});

export default store;
