import styled from "styled-components";

export const UserContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid #d0d7de;
  
  div {
    display: flex;
    flex-direction: row;
    margin: 20px;
    font-size: 18px;
    align-items: center;
  }
      
    img {
      margin-right: 20px;
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }  
`
export const StyledParagraphUser = styled.p`
  font-size: 14px;
  margin-left: auto;
`