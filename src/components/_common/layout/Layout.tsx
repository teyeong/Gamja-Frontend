import Footer from './Footer';
import React from 'react';
import Header from './Header';
import { ChildrenProps } from 'props-type';

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
