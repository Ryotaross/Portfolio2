import React from 'react';
import '../App.css';
import Head from '../components/head';
import PageName from '../components/pageName';
import ProductMain from '../components/productMain';

function Product() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="App-contents">
          <Head />
          <PageName name="Product" subname="これまでに個人開発を行ったプロダクトです。" />
          <ProductMain />
        </main>
      </header>
    </div>
  );
}

export default Product;
