import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #f6f8fa;
  border-bottom: 1px solid #d0d7de;
  display: grid;
  grid-template-columns: 2fr 1fr;

  div {
    text-align: right;
    margin: 0px 20px;
    color: #57606a;
    font-size: 14px;
  }

  svg {
    margin: -3px 0;
    fill: dimgrey;
  }
`;
