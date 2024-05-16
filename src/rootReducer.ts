import { combineReducers } from 'redux';
import newsReducer from './reducers/news';
import userReducer from './reducers/user';

const rootReducer = combineReducers({ news: newsReducer, users: userReducer });

export default rootReducer;
