import styled from 'styled-components'

interface CounterProps {
  buttonHeigth: number
}

export const CounterWrapper = styled.div<CounterProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;

  width: 4.5rem;
  height: ${(props) => props.buttonHeigth / 16}rem;

  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  padding: 0.5rem;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 0.875rem;
    height: 0.875rem;

    background: transparent;
    border: none;
    color: ${(props) => props.theme.purple};
  }

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    width: 1.25rem;

    color: ${(props) => props.theme['base-title']};
  }
`
