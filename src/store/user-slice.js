import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  googleCredential: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setGoogleCredential: (state, action) => {
      state.googleCredential = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
