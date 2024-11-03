import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding-bottom: 8rem;
  border-bottom: 3px solid ${({ theme }) => theme.primary};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 5rem;
`;

export const ExpertiseItem = styled.li`
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background: ${({ theme }) => theme.gradient};

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.primary};
    font-size: 1rem;
  }
`;
