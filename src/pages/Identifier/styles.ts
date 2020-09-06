import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const Content = styled.main`
  background: #fff;
  max-height: 40rem;
  width: 80%;

  padding: 0 2.4rem;

  margin: 1.6rem 2.4rem;

  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 17px -1px rgba(64, 61, 57, 0.2);
  border-radius: 0.4rem;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      height: 3.6rem;
      border: 0;

      background: #8338ec;
      padding: 0.8rem 3.2rem;
      margin-top: 0.8rem;

      color: #fff;
      font-weight: 500;
      border-radius: 0.4rem;

      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#8338ec')};
      }
    }
  }

  @media (max-width: 600px) {
    background-color: transparent;
    box-shadow: none;
    width: 90%;
  }
`;
