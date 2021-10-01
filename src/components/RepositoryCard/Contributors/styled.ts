import styled from 'styled-components';

export const StyledContributors = styled.ul`
  display: grid;
  grid-template-columns: auto 1fr;
  flex-direction: row;
  margin: 10px 20px;
  align-items: center;
  padding: 0;
`;

export const StyledTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  width: 150px;
  text-align: left;
  margin-left: 5px;
`;

export const StyledContributorsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
`;

export const StyledContributorItem = styled.li`
  margin-top: 10px;
  margin-left: 45px;
  list-style: none;
`;

export const StyledContributorAvatar = styled.img`
  border-radius: 50%;
`;
