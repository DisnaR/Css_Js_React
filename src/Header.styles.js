// Header.styles.js

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

export const Logo = styled.div`
  font-size: 2rem;
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
  }

  li {
    margin-left: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;
