import { useParams } from 'react-router-dom';
import { TodosSection } from '../TodosSection';

const TodoDetailsPage = () => {
  console.log(useParams());
  //  const params = useParams();
  const { id } = useParams();

  return (
    <>
      <div>Todo {id}</div>
      <TodosSection todoId={id} />
    </>
  );
};

export default TodoDetailsPage;
