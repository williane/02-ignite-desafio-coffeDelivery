import styled, { css } from 'styled-components'

export const Container = styled.main`
  display: flex;

  gap: 2rem;

  padding: 2.5rem 10rem;

  width: 100%;
  height: 100%;
`
export const CardTitle = styled.div`
  display: flex;

  gap: 0.5rem;

  margin-bottom: 1rem;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
  }

  p:nth-child(1) {
    font-size: 1rem;
  }
`

export const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;
  height: 39.3125rem;
`

export const LeftWrapper = styled(BaseWrapper)``

export const Title = styled.span`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`

export const PayCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  height: 12.9375rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  padding: 2.5rem;
  margin-top: 0.75rem;
`

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 0.75rem;

  width: 100%;
  height: 3.1875rem;
`
interface PayTypeButtonProps {
  option: string
  payType: string
}

export const PayTypeButton = styled.button<PayTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  background: ${(props) =>
    props.option === props.payType
      ? props.theme['purple-light']
      : props.theme['base-button']};
  border: none;
  border-radius: 6px;
  padding: 1rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};

  ${(props) =>
    props.option === props.payType &&
    css`
      border: 1px solid ${(props) => props.theme.purple};
    `}
`

export const RightWrapper = styled(BaseWrapper)``

export const CoffeCardList = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 14.25rem;
  overflow: auto;
`

export const TotalsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 31.125rem;

  padding: 2.5rem;
  margin-top: 0.9375rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const Totals = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme['base-text']};

    & > span:nth-child(1) {
      font-size: 0.875rem;
    }
  }

  & > div:nth-child(3) {
    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['base-subtitle']};

    & > span:nth-child(1) {
      font-size: 1.25rem;
    }
  }
`

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 2.875rem;

  padding: 0.75rem 0.5rem;
  margin-top: 1.5rem;

  background-color: ${(props) => props.theme.yellow};
  border: none;
  border-radius: 6px;

  text-transform: uppercase;
  font-size: 0.875rem;
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }
`
