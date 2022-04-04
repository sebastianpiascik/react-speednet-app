import React, { VFC } from 'react';

import { StyledLogo, StyledWrapper } from './Header.styled';

const Header: VFC = () => (
  <StyledWrapper>
    <StyledLogo src="/logo.svg" alt="logo" />
    <p>Speednet App</p>
  </StyledWrapper>
);

export default Header;
