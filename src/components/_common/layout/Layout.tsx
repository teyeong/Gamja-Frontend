import Footer from './Footer';
import React from 'react';
import Header from './Header';

type MyComponentProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: MyComponentProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
