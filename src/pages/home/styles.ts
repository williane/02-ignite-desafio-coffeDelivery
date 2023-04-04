import styled from 'styled-components'

export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1440px;
  height: 6.5rem;

  margin: 0 auto;
  padding: 2rem 10rem;
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

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;

  padding: 0.5rem;

  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
`
