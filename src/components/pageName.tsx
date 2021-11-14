import React from 'react';
import '../App.css';
import styled from 'styled-components';

function PageName(props : any) {
  const Flex = styled.div `
    display: flex;
    align-items: center;
  `;

  const Name = styled.h2 `
    border-right: 2px solid #333;
    padding: 8px 20px 8px 0;
  `;

  const SubName = styled.p `
    display: block;
    margin-left: 20px;
  `;

  return (
    <Flex>
      <Name className="English">{props.name}</Name>
      <SubName>{props.subname}</SubName>
    </Flex>
  );
}

export default PageName;
