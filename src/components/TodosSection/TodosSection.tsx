import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { useEffect } from 'react';
import { AppDispatch } from '../../rootReducer';
import { fetchTodos } from '../../store/actions/asyncActions';
import { TitleContext } from '../Layout/Layout';

const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const TodosSection = ({ todoId }: { todoId?: any }) => {
  console.log(useSelector((state: any) => state));
  const todos = useSelector((state: any) => state.todos).todos;
  const isLoading = useSelector((state: any) => state.todos).isNewsFetching;
  const isFetchError = useSelector((state: any) => state.todos).error;

  const dispatch = useDispatch() as AppDispatch;
  useEffect(() => {
    dispatch(fetchTodos(todoId));
  }, []);

  return (
    <div>
      <h1>Todos section</h1>
      <TitleContext.Consumer>
        {({ title, description }) => (
          <div>
            {title} + {description}
          </div>
        )}
      </TitleContext.Consumer>
      {isLoading && !isFetchError && <Loader className="loader" />}
      {todos.length > 0 ? (
        todos.map((item: any) => {
          return <div key={item.title}>{item.title}</div>;
        })
      ) : (
        <div>No todos</div>
      )}
      {isFetchError && <div>{isFetchError.message}</div>}
    </div>
  );
};

export default TodosSection;
