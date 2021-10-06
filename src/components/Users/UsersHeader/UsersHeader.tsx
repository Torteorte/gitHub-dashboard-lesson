import React from 'react';
import { Radio } from 'antd';
import { StyledHeader, StyledNavbar, StyledTitle } from './styled';

export const UsersHeader: React.FC = () => {
  const [sort, setSort] = React.useState('username');

  const handleSizeChange = (e: any) => {
    setSort(e.target.value);
  };

  return (
    <StyledHeader>
      <StyledTitle>Users</StyledTitle>
      <StyledNavbar>
        <Radio.Group value={sort} onChange={handleSizeChange}>
          <Radio.Button value="username">User name</Radio.Button>
          <Radio.Button value="lastlogin">Last seen</Radio.Button>
          <Radio.Button value="isactive">Online</Radio.Button>
        </Radio.Group>
      </StyledNavbar>
    </StyledHeader>
  );
};
