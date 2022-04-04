import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    margin-bottom: 24px;
  }

  @media (max-width: 600px) {
    padding: 40px 12px;
  }
`;

export { StyledWrapper };
