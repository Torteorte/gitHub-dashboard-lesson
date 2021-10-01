import styled from 'styled-components';

export const UserContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid #d0d7de;
`;

export const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0 20px 20px;
  font-size: 18px;
  align-items: center;
`;

export const StyledUserName = styled.p`
  margin-bottom: 0;
`;

export const StyledUserAvatar = styled.img`
  margin-right: 20px;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const StyledParagraphUser = styled.p`
  font-size: 14px;
  margin: 0 20px 0 auto;
  align-self: center;
  text-align: left;
`;
