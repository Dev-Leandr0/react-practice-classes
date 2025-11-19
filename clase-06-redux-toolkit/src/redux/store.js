import { configureStore } from '@reduxjs/toolkit'
import userReduce from './usersSlice'
import postsReduce from './postSlice'

const store = configureStore({
  reducer: {
    users: userReduce,
    posts: postsReduce,
  },
});

export default store;