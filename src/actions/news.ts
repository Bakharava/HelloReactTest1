import { DELETE_NEWS, SET_NEWS } from './actionType';

export const setNews = (news: { [key: string]: string | number }[]) => {
  return {
    type: SET_NEWS,
    payload: news,
  };
};

export const deleteNews = () => {
  return {
    type: DELETE_NEWS,
  };
};
