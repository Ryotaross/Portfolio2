import React from 'react';
import '../App.css';
import Head from '../components/head';
import PageName from '../components/pageName';
import SocialMain from '../components/socialMain';

function Social() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="App-contents">
          <Head />
          <PageName name="Social" subname="SNSアカウントです。御覧いただけると幸いです。" />
          <SocialMain />
        </main>
      </header>
    </div>
  );
}

export default Social;
