import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  & > img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem;
  }
`

export const ListTags = styled.div`
  display: flex;

  gap: 0.25rem;
`
export const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 1.3125rem;

  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;

  padding: 0.25rem 0.5rem;

  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.625rem;
  line-height: 130%;
  text-transform: uppercase;

  margin-top: 0.75rem;
`

export const Name = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};

  margin-top: 1rem;
`

export const Description = styled.p`
  width: calc(100% - 2.5rem);

  text-align: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-label']};

  margin-top: 0.5rem;
`

export const Buy = styled.div`
  display: Flex;
  align-items: center;

  width: 13rem;
  height: 2.375rem;

  margin-top: 2.0625rem;

  & > span:nth-child(1) {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;

    color: ${(props) => props.theme['base-text']};

    margin-right: 0.25rem;
  }

  & > span:nth-child(2) {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 2rem;

    color: ${(props) => props.theme['base-text']};

    margin-right: 1.4375rem;
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;

  background: ${(props) => props.theme['purple-dark']};
  border: none;
  border-radius: 6px;

  margin-left: 0.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`
