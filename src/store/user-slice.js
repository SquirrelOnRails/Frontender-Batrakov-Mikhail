import { createSlice } from "@reduxjs/toolkit";
import { googleLogout } from "@react-oauth/google";

const userInitialState = {
  googleCredential: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setGoogleCredential: (state, action) => {
      let credential = action.payload;
      credential.provider = "GOOGLE";
      state.googleCredential = credential;
      localStorage.setItem("credential", JSON.stringify(credential));
    },
    logout: (state) => {
      googleLogout();
      localStorage.removeItem("credential");
      state.googleCredential = userInitialState.googleCredential;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
