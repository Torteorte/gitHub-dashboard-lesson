import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #d0d7de;
`;

export const StyledLoading = styled.li`
  margin: 20px;
`;

export const StyledNoResult = styled.li`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #d0d7de;
`;
