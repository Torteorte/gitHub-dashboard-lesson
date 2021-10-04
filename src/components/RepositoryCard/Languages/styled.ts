import styled from 'styled-components';

export const StyledLanguages = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin: 25px 25px 10px;
`;

export const StyledTitle = styled.h3`
  width: 150px;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
`;

export const StyledListLanguages = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 35px;
  margin-bottom: 0;
  padding: 0;
`;

export const StyledLanguageItem = styled.li`
  margin-left: 10px;
  font-size: 16px;
  list-style: none;
`;
