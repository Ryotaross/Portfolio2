import React from 'react';
import { Main } from './contents';
import { MainName } from './contents';
import { MainText } from './contents';
import { ProductImage } from './contents';
import Book from '../book.png';
import { Item } from './contents';
import golf from '../shortCourse.png';
import coin from '../coin.png';

function ProductMain() {
  return (
    <Main>
      <Item>
        <MainName>Osaka Short Course-ゴルフ場マップアプリ</MainName>
        <a href="https://book-review-react.herokuapp.com/" target="_blank" rel="noopener noreferrer"><ProductImage src={Book} alt="book" /></a>
        <MainText>
          ゴルフ場のショートコースに特化した地図検索アプリです。<br />
          探すのに便利になると思い開発しました。
        </MainText>
        <MainText>Skills:HTML/CSS/React.js/Laravel</MainText>
      </Item>
      <Item>
        <MainName>Book!-書籍レビューアプリ</MainName>
        <a href="https://book-review-react.herokuapp.com/" target="_blank" rel="noopener noreferrer"><ProductImage src={Book} alt="book" /></a>
        <MainText>
          React.jsでのアプリ開発の練習として、書籍レビューアプリを制作しました。<br />
          User:BBB<br />
          Pass:CCC
        </MainText>
        <MainText>Skills:HTML/CSS/React.js</MainText>
      </Item>
      <Item>
        <MainName>ショートコース大全-ゴルフ場検索アプリ</MainName>
        <a href="http://the-twenty.tokyo:8000/" target="_blank" rel="noopener noreferrer"><ProductImage src={golf} alt="book" /></a>
        <MainText>
          ゴルフ場のショートコースに特化した情報のサイトです。
        </MainText>
        <MainText>Skills:HTML/CSS/Bootstrap/Vue.js/Laravel/MySQL</MainText>
      </Item>
      <Item>
        <MainName>Demo Coin Shop-仮想通貨シュミレーションアプリ</MainName>
        <a href="http://the-twenty.tokyo:8083/" target="_blank" rel="noopener noreferrer"><ProductImage src={coin} alt="book" /></a>
        <MainText>
          仮想通貨販売のシュミレーションアプリを作成しました。<br />
          仮想通貨価格はリアルタイムに更新され、売買ができます。<br />
          User:testtest <br />
          Pass:testtest
        </MainText>
        <MainText>Skills:HTML/CSS/Bootstrap/PHP/MySQL</MainText>
      </Item>
    </Main>
  );
}

export default ProductMain;
