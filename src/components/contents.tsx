import styled from 'styled-components';

export const Main = styled.div `
  background: #fff;
  padding: 25px 50px;
  margin-bottom: 3em;
  text-align:left
`;

export const MainName = styled.h3 `
  margin: 1.25em 0;
  `;

export const MainText = styled.p `
  display: block;
  margin: 0 0 1.25em;
  line-height: 1.625;
`;

export const Flex = styled.div `
  display: flex;
  border-bottom: 2px dashed grey;
  margin: 0 0 1.25em;
`;

export const Month = styled.h4 `
  display: block;
  width:5em;
  margin: 0 2.5em 1.25em 0;
  line-height: 1.625;
`;

export const List = styled.li `
  line-height: 1.625;
`;

export const ProductImage = styled.img `
  width:100%;
  object-fit: cover;
  &:hover {
    opacity:0.5;
	  cursor: pointer;
  }
  &:active {
    position: relative;
	  top: 3px;
  }
  `;

export const Item = styled.div `
  border-bottom: 2px dashed grey;
  margin: 0 0 1.25em;
`;

export const SocialName = styled.span `
  margin-left:.5em;
`;

export const SocialLink = styled.a `
  text-decoration:none;
`;