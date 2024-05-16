import { DELETE_NEWS, SET_NEWS } from '../actions/actionType';

const initialState = {
  news: [],
};

const newsReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_NEWS: {
      return {
        ...state,
        news: [...state.news, ...action.payload],
      };
    }
    case DELETE_NEWS: {
      return {
        ...state,
        news: [],
      };
    }

    default:
      return state;
  }
};

export default newsReducer;
