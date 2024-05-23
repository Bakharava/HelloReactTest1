import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../reducers/news';
import userReducer from '../reducers/user';
import todoReducer from '../store/reducers/TodoSlice';

const rootReducer = combineReducers({ news: newsReducer, users: userReducer, todos: todoReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
