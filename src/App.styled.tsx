import styled from 'styled-components';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

export { StyledWrapper };
