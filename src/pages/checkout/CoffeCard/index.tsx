import { useContext } from 'react'
import { Trash } from 'phosphor-react'
import { Counter } from '../../../components/counter'
import { CartContext } from '../../../contexts/cartContext'
import {
  Action,
  Container,
  Details,
  Div,
  Divider,
  Price,
  TrashButton,
} from './styles'
import { priceFormatter } from '../../../utils/numberFormatter'

interface CoffeProps {
  coffeName: string
  image: string
  quantity: number
  unitCost: number
  totalCost: number
}

interface CoffeCardProps {
  coffe: CoffeProps
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const { addNewCoffeOnCart, removeCoffeCart } = useContext(CartContext)

  function handleAddNewQuantityOnCart() {
    addNewCoffeOnCart(coffe.coffeName, coffe.image, 1, coffe.unitCost)
  }

  function handleRemoveQuantityOnCart() {
    removeCoffeCart(coffe.coffeName, 1)
  }

  return (
    <>
      <Container>
        <img src={coffe.image} alt="" />
        <Div>
          <Details>
            <span>{coffe.coffeName}</span>
            <Action>
              <Counter
                height={32}
                iconSize={14}
                quantity={coffe.quantity}
                onAdd={handleAddNewQuantityOnCart}
                onRemove={handleRemoveQuantityOnCart}
              />
              <TrashButton
                onClick={() => removeCoffeCart(coffe.coffeName, coffe.quantity)}
              >
                <Trash size={16} color="#8047F8" />
                remover
              </TrashButton>
            </Action>
          </Details>
          <Price>{priceFormatter.format(coffe.totalCost)}</Price>
        </Div>
      </Container>
      <Divider />
    </>
  )
}
