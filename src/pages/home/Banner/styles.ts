import styled from 'styled-components'

interface ContainerProps {
  backgroudBanner: string
}

interface ItemProps {
  colorBackgroud: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  width: 90rem;
  height: 34rem;

  padding: 5.75rem 10rem;

  background: url(${(props) => props.backgroudBanner});

  & > div {
    display: flex;
    flex-direction: column;
  }

  & > img {
    margin-left: 3.5rem;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;

  width: 36.75rem;
  height: 12rem;

  & > p:nth-child(1) {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.875rem;

    color: ${(props) => props.theme['base-title']};
  }

  & > p:nth-child(2) {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.625rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: 14.4375rem 18.375rem;
  grid-template-rows: 1fr 1fr;

  grid-column-gap: 2.5rem;

  width: 35.4375rem;
  height: 5.25rem;

  margin-top: 4.125rem;
`

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;

    padding: 0.5rem;
    border-radius: 50%;

    background: ${(props) => props.colorBackgroud};
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
`
