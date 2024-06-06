import { TodosSection } from '../TodosSection';
import { TitleContext } from '../Layout/Layout';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const TodoPage = () => {
  const { language } = useContext(AppContext);

  return (
    <>
      <h2>Todo for: {language} language</h2>
      <TitleContext.Provider value={{ title: 'Page title', description: 'Test description' }}>
        <TodosSection />
      </TitleContext.Provider>
    </>
  );
};

export default TodoPage;
