import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border: none;
  background: #FFF;
  border: 2px solid #FFF;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color:  ${theme.colors.danger.main} !important;
  `}
`;
