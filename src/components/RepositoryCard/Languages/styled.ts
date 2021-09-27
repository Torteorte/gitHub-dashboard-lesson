import styled from 'styled-components';

export const StyledLanguages = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin: 25px 25px 0;

  h3 {
    font-size: 16px;
    font-weight: 500;
    width: 150px;
    text-align: left;
  }

  ul {
    display: flex;
    flex-direction: row;
    margin-left: 35px;

    li {
      margin-left: 10px;
    }
  }
`;
