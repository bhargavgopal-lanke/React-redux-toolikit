import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/form-slice';
import ProveMain from "./Components/ProveMain";


const store = configureStore({
    reducer: {
        userSliceInfo: userSlice,
        ProveMainInfo: ProveMain
    }
});

export default store;