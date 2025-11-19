import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    getUsers: (state, action) => {
      return action.payload
    },
  },
});

export const { getUsers } = usersSlice.actions;
export default usersSlice.reducer;