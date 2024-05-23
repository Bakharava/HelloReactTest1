import { DELETE_NEWS, FETCH_NEWS_ERROR, SET_NEWS, START_FETCH_NEWS } from '../actions/actionType';

const initialState = {
  news: [],
  isNewsLoading: false,
  error: '',
};

const newsReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_NEWS: {
      return {
        ...state,
        isNewsLoading: false,
        news: [...state.news, ...action.payload],
      };
    }

    case START_FETCH_NEWS: {
      return {
        ...state,
        isNewsLoading: true,
      };
    }

    case FETCH_NEWS_ERROR: {
      return {
        ...state,
        isNewsLoading: false,
        error: action.payload,
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
