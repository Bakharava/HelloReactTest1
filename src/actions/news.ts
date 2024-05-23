import { DELETE_NEWS, FETCH_NEWS_ERROR, SET_NEWS, START_FETCH_NEWS } from './actionType';

export const setNews = (news: { [key: string]: string | number }[]) => {
  return {
    type: SET_NEWS,
    payload: news,
  };
};

export const startFetchNews = () => {
  return {
    type: START_FETCH_NEWS,
  };
};

export const fetchNewsError = (err: string) => {
  return {
    type: FETCH_NEWS_ERROR,
    payload: err,
  };
};

export const deleteNews = () => {
  return {
    type: DELETE_NEWS,
  };
};
