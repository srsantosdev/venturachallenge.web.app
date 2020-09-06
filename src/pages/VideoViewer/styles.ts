import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 98%;
  }
`;

export const Content = styled.main`
  max-height: 40rem;
  width: 80%;

  padding: 0 2.4rem;

  margin: 1.6rem 2.4rem;

  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.4rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
