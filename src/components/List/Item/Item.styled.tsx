import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  width: 600px;
  max-width: 100%;
  margin: 0 auto 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    padding-right: 32px;
  }
`;

export { StyledWrapper };
