import styled from 'styled-components'

export const Container = styled.main`
  display: flex;

  gap: 2rem;

  padding: 2.5rem 10rem;

  width: 100%;
  height: 100%;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  width: 100%;
  height: 23.25rem;

  padding: 2.5rem;
  margin-top: 0.9375rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
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
const INPUT_TYPE = {
  street: '35rem',
  zip: '12.5rem',
  number: '12.5rem',
  complement: '21.75rem',
  city: '17.25rem',
  state: '3.75rem',
  district: '12.5rem',
}

interface InputProps {
  inputType: keyof typeof INPUT_TYPE
}

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.75rem;
`

export const Input = styled.input<InputProps>`
  display: flex;
  width: ${(props) => INPUT_TYPE[props.inputType]};
  max-height: 2.625rem;

  padding: 0.75rem;

  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;
  line-height: 1.125rem;
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

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.75rem;

    background: ${(props) => props.theme['base-button']};
    border: none;
    border-radius: 6px;
    padding: 1rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
`

export const RightWrapper = styled(BaseWrapper)``

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
