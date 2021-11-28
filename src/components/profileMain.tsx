import React from 'react';
import '../App.css';
import { Main } from './contents';
import { MainName } from './contents';
import { MainText } from './contents';
import { List } from './contents';

function ProfileMain() {
  return (
    <Main>
      <MainName className="English">About me</MainName>
      <MainText>こんにちは。サイトに来ていただいてありがとうございます。</MainText>
      <MainText>
        自己紹介します。名前は、清水凌太郎。福岡県出身の1996年生の25歳。蟹座。AB型。身長は169cm。体重59kg。趣味は野球観戦、ゴルフ、サウナ、プレミアリーグ。
      </MainText>
      <MainText>
        １８歳まで福岡で過ごし、大学進学で大阪に、その後就職し東京、現在は転勤で大阪在住です。<br />
        職業は、空港施設の技術者として無線機や管制情報処理サーバーの運用・保守を行っています。<br />
        <a href="https://ja.wikipedia.org/wiki/航空管制技術官" target="_blank" rel="noopener noreferrer">
          職業の紹介
        </a>
      </MainText>
      <MainText>
        業務を行っていく中で自分がやりたいことは運用・保守より、開発の方ではないかと思い、今年の１月からプログラミングの勉強を始めました。
        見事に大ハマリして、時間があるときはプログラムを書いています。
      </MainText>
      <MainText>
        現在、エンジニアを目指して絶賛転職活動中です。よろしくお願い致します。<br />
        少しでもおもしろいと思っていただけると嬉しいです。
      </MainText>
      <MainName className="English">Experience</MainName>
        <ul>
          <List>HTML/CSS</List>
          <List>Bootstrap</List>
          <List>JavaScript</List>
          <List>SQL</List>
          <List>PHP</List>
          <List>Laravel</List>
          <List>React.js(このサイトはReact.jsで作りました)</List>
          <List>TypeScript(現在学習中)</List>
        </ul>
    </Main>
  );
}

export default ProfileMain;
