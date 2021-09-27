import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 750px;
  margin: 70px auto;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  padding-bottom: 20px;
  
  h2 {
    margin: 0;
    padding: 16px;
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    align-self: center;
    color: #57606a;
  }
`;

export const StyledLanguages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center ;
  margin: 0 25px;

  h3 {
    font-size: 18px;
    font-weight: 500;
  }
  
  ul {
    display: flex;
    flex-direction: row;
    
    li {
      margin-left: 10px;
    }
  }
`
export const StyledContributors = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
  align-items: center;
  
  h3 {
    font-size: 16px;
    font-weight: 500;
  }
  
  ul {
    display: flex;
    flex-direction: row;
    
    li {
      margin-left: 10px;
    }
  }
  
  img{
    border-radius: 50%;
  }
`