import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 2rem 10rem;
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 1.5625rem;

    padding: 0.375rem 0.75rem;

    border: 1px solid ${(props) => props.theme.yellow};
    border-radius: 100px;

    background: transparent;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;

    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 2rem;

  margin-top: 3.375rem;
`
