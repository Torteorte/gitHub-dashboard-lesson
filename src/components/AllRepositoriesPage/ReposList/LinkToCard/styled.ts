import styled from 'styled-components';

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
