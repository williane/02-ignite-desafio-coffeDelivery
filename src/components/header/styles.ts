import styled from 'styled-components'

export const HeaderConteiner = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1440px;
  height: 6.5rem;

  margin: 0 auto;
  padding: 2rem 10rem;

  background-color: ${(props) => props.theme.background};
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;

  width: 8.9375rem;
  height: 2.375rem;

  padding: 0.5rem;

  background-color: ${(props) => props.theme['purple-light']};

  border-radius: 6px;

  span {
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const Cart = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;

  padding: 0.5rem;

  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`

export const CartQuantity = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.25rem;
  height: 1.25rem;

  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-dark']};
  font-weight: 700;
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
`
