// Importando os estilos do Header
import React from 'react';
import { HeaderContainer, Logo, Navigation } from '../Header.styles'; 

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Meu Logo</Logo>
      <Navigation>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
