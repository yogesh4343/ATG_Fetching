import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";

const store = configureStore({
    reducer: {
      userDetails:UserSlice,
    },
  });
  
  export default store;
  