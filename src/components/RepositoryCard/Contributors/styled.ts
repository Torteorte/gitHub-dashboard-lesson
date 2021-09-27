import styled from 'styled-components';

export const StyledContributors = styled.ul`
  display: grid;
  grid-template-columns: auto 1fr;
  flex-direction: row;
  margin: 10px 20px;
  align-items: center;

  h3 {
    font-size: 16px;
    font-weight: 500;
    width: 150px;
    text-align: left;
    margin-left: 5px;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      margin-top: 10px;
      margin-left: 45px;
    }
  }

  img {
    border-radius: 50%;
  }
`;
