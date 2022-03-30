import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../components/header/headerSlice';
import listReducer from '../components/list/listSlice';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    list: listReducer
  },
});

