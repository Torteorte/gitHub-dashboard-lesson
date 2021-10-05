import React from 'react';
import { Radio } from 'antd';
import { StyledHeader, StyledNavbar, StyledTitle } from './styled';

export const UsersHeader: React.FC = () => {
  const [size, setSize] = React.useState('username');

  const handleSizeChange = (e: any) => {
    setSize(e.target.value);
  };

  // console.log(size);

  return (
    <StyledHeader>
      <StyledTitle>Users</StyledTitle>
      <StyledNavbar>
        <Radio.Group onChange={handleSizeChange}>
          <Radio.Button value="username">User name</Radio.Button>
          <Radio.Button value="lastlogin">Last seen</Radio.Button>
          <Radio.Button value="isactive">Online</Radio.Button>
        </Radio.Group>
      </StyledNavbar>
    </StyledHeader>
  );
};
