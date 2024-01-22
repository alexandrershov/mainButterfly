import { createSlice } from "@reduxjs/toolkit";
import { userSliceTypeState } from "./userSlice.type";
import { getFromLocalStorage } from "../../hooks/getFromLocalStorage";
import { setToLocalStorage } from "../../hooks/setToLocalStorage";

const initialState: userSliceTypeState = {
  token: getFromLocalStorage("userToken") || null,
  data: getFromLocalStorage("userData") || {
    email: null,
    id: null,
  },
  state: {
    isLoaded: false,
    isError: false,
    isPending: false,
  },
  currentChat: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.data.id = payload.uid;
      state.token = payload.accessToken;
      state.data.email = payload.email;
      setToLocalStorage("userData", {
        email: payload.email,
        id: payload.uid,
      });
      setToLocalStorage("userToken", payload.accessToken);
    },

    removeUser: (state) => {
      state.data = {
        email: null,
        id: null,
      };
      state.token = null;
    },
     
    setCurrentChat: (state, { payload }) => {
      state.currentChat = payload;
    },
  },
});

export const { setUser, removeUser, setCurrentChat } = userSlice.actions;

export default userSlice.reducer;
