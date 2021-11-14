import React from 'react';
import '../App.css';
import { Main } from './contents';
import { MainName } from './contents';
import { MainText } from './contents';
import { Flex } from './contents';
import { Month } from './contents';
import { List } from './contents';

function HistoryMain() {
  return (
    <Main>
      <MainName className="English">Biography</MainName>
      <Flex>
        <div>
        <Month>2015年3月
        </Month>
        </div>
        <div>
          <MainText>福岡県立春日高等学校卒業</MainText>
          <MainText>
            高校時代は野球部で、ポジションはキャッチャーでした。<br />
            理系選択で、陽キャでも陰キャでもなく過ごしました。
          </MainText>
        </div>
      </Flex>
      <Flex>
        <div>
        <Month>2015年4月<br/>
              〜<br />
              2017年3月
        </Month>
        </div>
        <div>
          <MainText>
            <a href="https://www.cab.mlit.go.jp/asc/" target="_blank" rel="noopener noreferrer">
              国土交通省航空保安大学校　航空電子科
            </a>
          </MainText>
          <MainText>
            主に電子工学や航空関連の知識を学びました。<br />
            C言語・JAVAの講義で初めてプログラミングを学びました。<br />
          </MainText>
        </div>
      </Flex>
      <Flex>
        <div>
        <Month>2017年4月<br/>
              〜
        </Month>
        </div>
        <div>
          <MainText>国土交通省航空局　航空管制技術官</MainText>
          <MainText>
            羽田空港・関西空港で空港施設の技術者として、無線機や航空情報処理サーバーの保守運用業務を行っています。<br />
          </MainText>
        </div>
      </Flex>
      <MainName><span className="English">Biography</span>〜目指せエンジニア編〜</MainName>
      <Flex>
        <div>
          <Month>2021年1月<br/>
                〜<br />
                2021年2月
          </Month>
        </div>
        <div>
          <MainText>プログラミング学習開始</MainText>
          <MainText>
            ProgateにてHTML・CSS・PHP・Javascriptなどの学習をはじめました。<br />
            １ヶ月半みっちりやりこみProgateのLV.350overでした。
          </MainText>
        </div>
      </Flex>
      <Flex>
        <div>
        <Month>2021年3月<br/>
              〜<br />
              2021年6月
        </Month>
        </div>
        <div>
          <MainText>オンラインスクール入校</MainText>
          <div>
            <MainText>
              <a href="https://codecamp.jp/gate?ccadid=gssep_401_gate&utm_source=google&utm_medium=cpc&utm_campaign=401&utm_term=code%20camp%20gate_e&utm_content=537629650469&gclid=EAIaIQobChMIjpn83OSU9AIVz6uWCh0Y2QphEAAYASAAEgK2r_D_BwE" target="_blank" rel="noopener noreferrer">
                CodeCampGATE
              </a>
              で学習をはじめました。
            </MainText>
            <MainText>
              前半はHTML/CSS, JavaScript, PHP, MySQLの作法の学習。<br />
              この期間で仮想通貨のECサイトを制作しました。
            </MainText>
            <MainText>
              後半はLocal開発環境構築やGitの使い方、Laravelの学習を行いました。<br />
              4ヶ月みっちり学習をすることができました。<br />
              <a href="https://drive.google.com/file/d/1azICZchqZtdrgaZD0ajSobejFg8ZoJY9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                CodeCamp推薦状
              </a>
              <br />
              <a href="https://drive.google.com/file/d/1EimNWLKTt8q75wKiNawYMiA2Mq_z88s3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                CodeCamp修了書
              </a>
            </MainText>
          </div>
        </div>
      </Flex>
      <Flex>
        <div>
          <Month>2021年7月<br/>
                〜<br />
                2021年8月
          </Month>
        </div>
        <div>
          <MainText>WEBアプリ開発</MainText>
          <MainText>
            Laravelで開発してみたいと思い、ゴルフ場検索サイトを制作しました。<br />
            運用してみようと考えています。Laravelが大好きになりました。
          </MainText>
        </div>
      </Flex>
      <Flex>
        <div>
          <Month>2021年9月<br/>
                〜<br />
          </Month>
        </div>
        <div>
          <MainText>React.js学習</MainText>
          <MainText>
            <a href="https://techbowl.co.jp/techtrain/" target="_blank" rel="noopener noreferrer">
              TechTrain
            </a>
            でReact.jsを無料で学べたので、学習開始。<br />
            React.jsでフロントを書く楽しさに感動して、React.jsが大好きになりました<br />
            React.jsの課題で書籍レビューサイトを制作しました。
          </MainText>
          <MainText>
            大好きなReact.jsと大好きなLaravelで開発できたら幸せすぎるなと考えて、ゴルフ場検索地図アプリを制作しました。<br />
          </MainText>
          <MainText>
            最近備忘録として、Qiitaへの投稿もはじめました。<br />
          </MainText>
        </div>
      </Flex>
      <MainName className="English">Next Action!</MainName>
      <ul>
        <List>エンジニア転職をして、実務の中で更にできることを増やす。</List>
        <List>ゴルフ関係の２サイトを運用してみる。</List>
        <List>Qiitaへの投稿を怠らない。</List>
        <List>
          <a href="https://www.techpit.jp/" target="_blank" rel="noopener noreferrer">
            Techpit
          </a>で「React☓Laravel」の初心者向けの教材を制作する。</List>
      </ul>
    </Main>
  );
}

export default HistoryMain;
