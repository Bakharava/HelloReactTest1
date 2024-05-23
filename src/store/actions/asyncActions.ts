import { fetchNewsError, setNews, startFetchNews } from '../../actions/news';
import { todoSlice } from '../reducers/TodoSlice';

export const fetchNews = () => {
  return (dispatch: any) => {
    const newsUrl = `https://newsapi.org/v2/top-headlines/sources?pageSize=${10}&apiKey=${process.env.REACT_APP_API_KEY}`;
    dispatch(startFetchNews());

    fetch(newsUrl)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setNews(data.sources));
      })
      .catch((err) => {
        dispatch(fetchNewsError(err.message));
      });
  };
};

export const fetchTodos = () => {
  return (dispatch: any) => {
    const todosUrl = 'https://jsonplaceholder.typicode.com/users/1/todos';
    dispatch(todoSlice.actions.todosFetching());

    fetch(todosUrl)
      .then((response) => response.json())
      .then((data) => {
        dispatch(todoSlice.actions.todosFetchingSuccess(data));
      })
      .catch((err) => {
        dispatch(todoSlice.actions.todosFetchingError(err));
      });
  };
};
