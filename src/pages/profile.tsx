import React from 'react';
import '../App.css';
import Head from '../components/head';
import PageName from '../components/pageName';
import ProfileMain from '../components/profileMain';

function Profile() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="App-contents">
          <Head />
          <PageName name="Profile" subname="Webエンジニアを目指して転職活動中です。" />
          <ProfileMain />
        </main>
      </header>
    </div>
  );
}

export default Profile;
