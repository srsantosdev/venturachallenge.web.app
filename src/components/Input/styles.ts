import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 40rem;

  background-color: #f3f3f2;
  border-radius: 0.4rem;
  padding: 0.8rem 1.6rem;
  border: 0.15rem solid #f3f3f2;

  display: flex;
  align-items: center;

  transition: 0.2s;
  color: #b1a7a6;

  ${props =>
    props.hasError &&
    css`
      border-color: #c43331;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #5a189a;
      color: #5a189a;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #5a189a;
    `}

  input {
    width: 100%;
    border: 0;
    background-color: transparent;

    font-weight: 400;
    color: #5a189a;

    &::placeholder {
      color: #b1a7a6;
    }
  }

  svg {
    margin-left: 1.6rem;
  }
`;
