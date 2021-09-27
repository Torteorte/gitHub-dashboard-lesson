import styled from 'styled-components';

export const StyledMain = styled.main`
  max-width: 800px;
  margin: 70px auto;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  
  h2 {
    margin: 0;
    padding: 16px;
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    color: #57606a;
    background-color: #f6f8fa;
    border-bottom: 1px solid #d0d7de;
  }

  svg {
    fill: dimgrey;
    margin: -3px 2px;
  }
  
  ul {
    
    li {
      display: grid;
      grid-template-columns: 3fr 1fr;
      align-items: center;
      padding: 10px 20px;
      border-bottom: 1px solid #d0d7de;
      
      div:first-child  {
        text-align: left;
      }
      div:last-child  {
        color: #57606a;
        font-size: 14px;
        text-align: right;
        align-items: center;
        
      }
      
      h3 {
        font-weight: 500;
      }
      
      a {
        font-size: 1.2rem;
        color: rgb(9, 105, 218);
        
        span {
          font-weight: 600;
        }
      }
    }
  }
`;