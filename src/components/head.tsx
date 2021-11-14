import React from 'react';
import styled from 'styled-components';
import Logo from './logo';
import Menu from './menu';

function Head() {
  const Flex = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center
  `;

  return (
    <Flex>
      <Logo />
      <Menu />
    </Flex>
  );
}

export default Head;
