import styled from 'styled-components';
import { Input } from 'antd';
const { Search } = Input;

export const StyledHeadContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  background-color: #f6f8fa;
  border-bottom: 1px solid #d0d7de;
`;

export const StyledSearch = styled(Search)`
  width: 80%;
  margin: auto;
`;

export const StyledHeader = styled.h2`
  margin: 0;
  padding: 16px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  color: #57606a;
`;
