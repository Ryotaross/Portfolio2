import React from 'react';
import { Main } from './contents';
import { MainName } from './contents';
import { MainText } from './contents';
import { SiTwitter } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiQiita } from "react-icons/si";
import { FaCommentAlt } from "react-icons/fa";
import { SocialName } from './contents';
import { SocialLink } from './contents';

function SocialMain() {
  return (
    <Main>
      <MainName className="English"><SiTwitter /><SocialName>Twitter</SocialName></MainName>
      <MainText><SocialLink href="https://mobile.twitter.com/yoyo_unofficial" target="_blank" rel="noopener noreferrer">https://twitter.com/yoyo_unofficial</SocialLink></MainText>
      <MainName className="English"><SiGithub /><SocialName>Github</SocialName></MainName>
      <MainText><SocialLink href="https://github.com/Ryotaross" target="_blank" rel="noopener noreferrer">https://github.com/Ryotaross</SocialLink></MainText>
      <MainName className="English"><SiQiita /><SocialName>Qiita</SocialName></MainName>
      <MainText><SocialLink href="https://qiita.com/Ryotaross" target="_blank" rel="noopener noreferrer">https://qiita.com/Ryotaross</SocialLink></MainText>
      <MainName className="English"><FaCommentAlt /><SocialName>Wantedly</SocialName></MainName>
      <MainText><SocialLink href="https://www.wantedly.com/id/ryotaro_20" target="_blank" rel="noopener noreferrer">https://www.wantedly.com/id/ryotaro_20</SocialLink></MainText>
    </Main>
  );
}

export default SocialMain;
