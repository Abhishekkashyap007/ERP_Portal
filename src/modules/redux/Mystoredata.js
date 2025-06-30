import { configureStore } from '@reduxjs/toolkit'
import myreducerfunction from './Myreduxfunction';

export const mystore = configureStore({
  reducer: {
    counter: myreducerfunction
  },
})