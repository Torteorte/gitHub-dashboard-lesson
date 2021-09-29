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

export const StyledLoading = styled.li`
  margin: 20px;
`;

export const StyledNoResult = styled.li`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #d0d7de;
`;
