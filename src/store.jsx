import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/form-slice';


const store = configureStore({
    reducer: {
        userSliceInfo: userSlice
    }
});

export default store;