import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  padding: 5rem 10rem;

  width: 100%;
  height: 100%;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  & > strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};
  }

  & > p {
    font-size: 1.25rem;
    line-height: 130%;

    color: #403937;
  }
`

export const Wrapper = styled.div`
  display: flex;

  gap: 6.375rem;

  width: 100%;

  margin-top: 1.75rem;

  & > img {
    width: 30.75rem;
    height: 18.3125rem;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  width: 32.875rem;
  height: 16.875rem;

  padding: 2.5rem;
  margin-top: 0.75rem;

  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    radial-gradient(
        circle at top left,
        ${(props) => props.theme['yellow-dark']},
        ${(props) => props.theme.purple}
      )
      border-box;
  border: 1px solid transparent;
  border-radius: 50px;
  border-radius: 6px 36px;
`

export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.75rem;
`

interface IconProps {
  iconColor: keyof typeof defaultTheme
}

export const Icon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  background-color: ${(props) => props.theme[props.iconColor]};
`

export const Detail = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 130%;
`
