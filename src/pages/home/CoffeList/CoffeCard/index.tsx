import {
  Buy,
  CartButton,
  Container,
  Description,
  ListTags,
  Name,
  Tag,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/counter'
import { useState } from 'react'

type tag = 'tradicional' | 'especial' | 'com leite' | 'alcoólico' | 'gelado'

interface CoffeProps {
  name: string
  tag: tag[]
  description: string
  cost: number
  image: string
}

interface CoffeCardProps {
  coffe: CoffeProps
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const [quantity, setQuantity] = useState(0)

  function handleAddQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleRemoveQuantity() {
    setQuantity((state) => state - 1)
  }

  return (
    <Container>
      <img src={coffe.image} alt="" />
      <ListTags>
        {coffe.tag.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ListTags>
      <Name>{coffe.name}</Name>
      <Description>{coffe.description}</Description>
      <Buy>
        <span>R$</span>
        <span>{coffe.cost}</span>
        <Counter
          height={38}
          iconSize={14}
          quantity={quantity}
          onAdd={handleAddQuantity}
          onRemove={handleRemoveQuantity}
        />
        <CartButton onClick={() => console.log(coffe.name, quantity)}>
          <ShoppingCart size={22} color="#FFFFFF" weight="fill" />
        </CartButton>
      </Buy>
    </Container>
  )
}
