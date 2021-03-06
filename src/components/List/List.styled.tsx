import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 40px 12px;
  }
`;

const StyledParagraph = styled.p`
  width: 600px;
  max-width: 100%;
  margin: 0 auto 32px;
  font-weight: 600;
  text-transform: uppercase;
`;

export { StyledWrapper, StyledParagraph };
