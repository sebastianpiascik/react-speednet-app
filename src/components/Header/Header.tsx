import React, { VFC } from 'react';
import { Link } from 'react-router-dom';

import { StyledLogo, StyledWrapper } from './Header.styled';

const Header: VFC = () => (
  <Link to="/">
    <StyledWrapper>
      <StyledLogo src="/logo.svg" alt="logo" />
      <p>Speednet App</p>
    </StyledWrapper>
  </Link>
);

export default Header;
