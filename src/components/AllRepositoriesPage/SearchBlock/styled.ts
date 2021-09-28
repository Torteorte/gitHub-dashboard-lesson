import styled from 'styled-components';

export const StyledHeadContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  background-color: #f6f8fa;
  border-bottom: 1px solid #d0d7de;

  > span {
    width: 80%;
    margin: auto;
  }

  h2 {
    margin: 0;
    padding: 16px;
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    color: #57606a;
  }
`;
