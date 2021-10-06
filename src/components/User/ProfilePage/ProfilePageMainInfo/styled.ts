import styled from 'styled-components';

export const StyledSuperscript = styled.sup`
  position: absolute;
  top: 0;
  font-weight: 300;
  font-size: 12.5px;
  color: limegreen;
`;

export const StyledMainInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  margin: 10px;
  padding: 10px 20px 30px;
  border-bottom: 1px solid #9ad3f6;
`;

export const StyledParagraph = styled.p`
  margin: 10px;
`;

export const StyledUserIcon = styled.img`
  display: block;
  width: 100px;
  margin: auto;
  font-weight: 500;
`;

export const StyledNamesContainer = styled.div`
  margin: auto;
  text-align: right;
`;
