import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { NewsPage } from './components/NewsPage';
import { TodoPage } from './components/TodoPage';
import { Layout } from './components/Layout';
import { TodoDetailsPage } from './components/TodoDetailsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { RequireAuth } from './components/RequireAuth';
import { LoginPage } from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<NewsPage />} path="/news" />
          <Route
            element={
              <RequireAuth>
                <TodoPage />
              </RequireAuth>
            }
            path="/todos"
          />
          <Route element={<TodoDetailsPage />} path="/todos/:id" />
          <Route element={<NotFoundPage />} path="*" />
          <Route element={<LoginPage />} path="login" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
