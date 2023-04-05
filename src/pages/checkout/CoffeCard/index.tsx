import { Action, Container, Details, Divider, TrashButton } from './styles'
import { Counter } from '../../../components/counter'
import Coffe from '../../../assets/coffes/expresso_tradicional.svg'
import { Trash } from 'phosphor-react'

export function CoffeCard() {
  return (
    <>
      <Container>
        <img src={Coffe} alt="" />
        <Details>
          <span>Expresso Tradicional</span>
          <Action>
            <Counter height={32} iconSize={14} />
            <TrashButton>
              <Trash size={16} color="#8047F8" />
              remover
            </TrashButton>
          </Action>
        </Details>
        <span>R$ 9,90</span>
      </Container>
      <Divider />
    </>
  )
}
