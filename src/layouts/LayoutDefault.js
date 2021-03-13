import React from 'react';
import Header from '../components/layout/Header';
import FooterReal from '../components/layout/FooterReal.js'

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <FooterReal />
  </>
);

export default LayoutDefault;  