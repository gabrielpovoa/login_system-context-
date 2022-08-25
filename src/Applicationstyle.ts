import styled from 'styled-components';

export const Container = styled.div`
  margin: 3rem auto;
  text-align: center;
  width: 80vw;

  & header {
    border-bottom: .2rem solid #778 ;
  }
  & h1 {
    font-size: 4rem;
    font-weight: 900;
  }
  nav {
    margin-block: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem;

    & a {
      text-decoration: underline;
      color: #454545;
      font-weight: 700;
    }
    & a:hover {
      color: #778;
    } 
  }
`;
