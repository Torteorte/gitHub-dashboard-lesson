import React from 'react';

import styled from 'styled-components';

const StyledHeader = styled.header`
  margin: 0;
  padding: 10px;
  background-color: aliceblue;
  -webkit-box-shadow: 0 5px 10px 5px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 5px 10px 5px rgba(34, 60, 80, 0.2);
  box-shadow: 0 5px 10px 5px rgba(34, 60, 80, 0.2);
  h1 {
    font-size: 30px;
    margin-left: 20px;
    text-align: left;
    color: slategrey;
  }
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <h1>GitHub Dashboard</h1>
        </StyledHeader>
    );
};

export default Header;