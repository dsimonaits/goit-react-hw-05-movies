import styled from 'styled-components';

export const BtnStyled = styled.button`
  display: block;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: var(--primary-color);
    background-color: var(--secondary-color);
  }
`;
