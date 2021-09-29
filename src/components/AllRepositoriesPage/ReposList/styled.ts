import styled from 'styled-components';

export const StyledList = styled.li`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #d0d7de;

  div:first-child {
    text-align: left;
  }
  div:last-child {
    color: #57606a;
    font-size: 14px;
    text-align: right;
    align-items: center;
  }

  h3 {
    font-weight: 500;
  }

  svg {
    fill: dimgrey;
    margin: -3px 2px;
  }
`;

export const StyledLink = styled.a`
  font-size: 1.05rem;
  color: rgb(9, 105, 218);
  font-weight: 400;
  letter-spacing: 0.25px;
  padding: 15px 0;

  :hover {
    text-decoration: underline;
  }

  span {
    letter-spacing: 0.5px;
    font-weight: 500;
  }
`;

export const StyledLoading = styled.li`
  margin: 20px;
`;

export const StyledNoResult = styled.li`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #d0d7de;
`;
