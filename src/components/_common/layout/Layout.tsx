import NavBar from './NavBar';
import Footer from './Footer';
import React from 'react';

type MyComponentProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: MyComponentProps) => {
  return (
    <div>
      <NavBar />
      {children}
      안녕하세요
      <Footer />
    </div>
  );
};

export default Layout;
