import {
  Buy,
  CartButton,
  Container,
  Counter,
  Description,
  ListTags,
  Name,
  Tag,
} from './styles'

import Coffe from '../../../../assets/coffes/expresso_tradicional.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

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
        <Counter>
          <button>
            <Minus size={14} />
          </button>
          <span>1</span>
          <button>
            <Plus size={14} />
          </button>
        </Counter>
        <CartButton>
          <ShoppingCart size={22} color="#FFFFFF" weight="fill" />
        </CartButton>
      </Buy>
    </Container>
  )
}
