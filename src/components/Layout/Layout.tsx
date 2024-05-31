import React from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';

type LayoutProps = {
  children?: string | string[] | React.ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {/*<Content>{children}</Content>*/}
      <Outlet />
      <footer>news.org</footer>
    </>
  );
};

export default Layout;
