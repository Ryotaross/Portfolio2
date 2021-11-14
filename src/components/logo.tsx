import React from 'react';
import logo from '../me.jpg';
import styled from 'styled-components';
import '../App.css';

function Logo() {
  const Header = styled.div `
    text-align:center;
  `;

  const Image = styled.img `
    border: 5px solid #fff;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
    &:hover {
      border: 5px solid #b3424a;
    }
  `;

  const Name = styled.h1 `
    font-size: 2em;
    margin: 0.5em 0;
  `;

  return (
    <Header>
      <Image src={logo} alt="logo" />
      <Name className="English">Ryotaro Shimizu</Name>
    </Header>
  );
}

export default Logo;
