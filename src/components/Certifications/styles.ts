import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding-bottom: 8rem;
  border-bottom: 3px solid ${({ theme }) => theme.primary};

  section {
    margin-top: 4rem;
    article {
      margin-bottom: 2rem;

      h3 {
        font-size: 2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.text};
      }

      p {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.text};
      }
    }
  }
`;
