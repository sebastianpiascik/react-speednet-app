import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
  color: #00bfff;
  transition: 0.3s;

  &:hover {
    color: #0083af;
  }
`;

export { StyledLink };
