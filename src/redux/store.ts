import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./loginReducer";
import { mainScreenReducer } from "./mainScreenReducer";

export default configureStore({
  reducer: {
    loginReducer,
    mainScreenReducer,
  },
});
