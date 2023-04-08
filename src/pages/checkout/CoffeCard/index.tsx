import { useContext } from 'react'
import { Trash } from 'phosphor-react'
import { Counter } from '../../../components/counter'
import { CartContext } from '../../../contexts/cartContext'
import { Action, Container, Details, Divider, TrashButton } from './styles'

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
  const { addNewCoffeOnCart } = useContext(CartContext)

  function handleAddNewQuantityOnCart() {
    addNewCoffeOnCart(coffe.coffeName, coffe.image, 1, coffe.unitCost)
  }

  function handleRemoveQuantityOnCart() {}

  return (
    <>
      <Container>
        <img src={coffe.image} alt="" />
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
            <TrashButton>
              <Trash size={16} color="#8047F8" />
              remover
            </TrashButton>
          </Action>
        </Details>
        <span>R$ {coffe.totalCost}</span>
      </Container>
      <Divider />
    </>
  )
}
