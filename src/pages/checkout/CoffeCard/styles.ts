import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  width: 23rem;
  height: 5rem;

  & > img {
    width: 4rem;
    height: 4rem;
  }

  & > span {
    font-weight: 700;
    line-height: 130%
    color: ${(props) => props.theme['base-text']};
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  width: 10.6875rem;
  height: 3.8125rem;

  margin-left: 1.25rem;
  margin-right: 3.125rem;

  & > span {
    line-height: 130%
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Action = styled.div`
  display: flex;

  gap: 0.5rem;
`
export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;

  padding: 0 0.5rem;

  width: 5.6875rem;
  height: 2rem;

  background-color: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
`

export const Divider = styled.hr`
  width: 23rem;

  border: 1px solid ${(props) => props.theme['base-button']};

  margin-top: 1.5rem;
`
