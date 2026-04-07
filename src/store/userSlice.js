import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  token: "",
  refreshToken: "",
  expiresIn: "",
  name: "",
  email: "",
  phone: "",
  type: "",
  auctions: [],
  bids: []
}

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => { return { ...initialState } }
  }
});

export const {setUser, clearUser} = UserSlice.actions;
export default UserSlice.reducer;