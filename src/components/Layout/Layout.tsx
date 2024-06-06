import React, { createContext } from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import { AppProvider } from '../context/AppContext';

type LayoutProps = {
  children?: string | string[] | React.ReactElement;
};

const defaultState = {
  title: '',
  description: '',
};
export const TitleContext = createContext(defaultState);
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppProvider>
        <Header />
        {/*<Content>{children}</Content>*/}

        <Outlet />

        <footer>news.org</footer>
      </AppProvider>
    </>
  );
};

export default Layout;
