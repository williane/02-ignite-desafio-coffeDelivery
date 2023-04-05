import {
  Buy,
  CartButton,
  Container,
  Description,
  ListTags,
  Name,
  Tag,
} from './styles'

import Coffe from '../../../../assets/coffes/expresso_tradicional.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/counter'

export function CoffeCard() {
  return (
    <Container>
      <img src={Coffe} alt="" />
      <ListTags>
        <Tag>Tradicional</Tag>
        <Tag>Quente</Tag>
      </ListTags>
      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <Buy>
        <span>R$</span>
        <span>9,90</span>
        <Counter height={38} iconSize={14} />
        <CartButton>
          <ShoppingCart size={22} color="#FFFFFF" weight="fill" />
        </CartButton>
      </Buy>
    </Container>
  )
}
