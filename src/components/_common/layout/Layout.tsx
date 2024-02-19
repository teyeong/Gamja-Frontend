import Footer from './Footer';
import React from 'react';
import Header from './Header';

type MyComponentProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: MyComponentProps) => {
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
