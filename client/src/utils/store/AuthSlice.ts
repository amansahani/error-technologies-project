import { createSlice } from "@reduxjs/toolkit";
import businessData from "./addressData";
const initialState = {
  emailValue: '',
  secureValue: '',
  isAuthenticated: false,
  businessData: businessData,
  currentData : businessData["Jesses's Juice Bar"]
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.emailValue = action.payload; 
    },
    setPassword: (state, action) => {
      state.secureValue = action.payload; 
    },
    allFormClear: (state) => {
      state.emailValue = "";
      state.secureValue = "";
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    }
  }
});

export const { setEmail, setPassword, allFormClear, setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;
