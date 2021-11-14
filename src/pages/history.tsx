import React from 'react';
import '../App.css';
import Head from '../components/head';
import PageName from '../components/pageName';
import HistoryMain from '../components/historyMain';

function History() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="App-contents">
          <Head />
          <PageName name="History" subname="これまでやってきたことをまとめております" />
          <HistoryMain />
        </main>
      </header>
    </div>
  );
}

export default History;
