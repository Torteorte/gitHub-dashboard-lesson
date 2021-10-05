import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin: 0;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  -webkit-box-shadow: 0 5px 10px 5px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 5px 10px 5px rgba(34, 60, 80, 0.2);
  box-shadow: 0 5px 10px 5px rgba(34, 60, 80, 0.2);
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  margin: 5px 0 5px 20px;
  text-align: left;
  color: slategrey;
`;

export const StyledContainer = styled.div`
  margin-left: auto;
`;
