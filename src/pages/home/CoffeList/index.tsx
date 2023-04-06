import { useState } from 'react'
import { CoffeCard } from './CoffeCard'
import { Container, Filters, List, NavBar } from './styles'

import { coffes } from '../../../mock/coffes'

export interface CoffeQuantityProps {
  name: string
  quantity: number
}

export function CoffeList() {
  const [coffeQuantity, setCoffeQuantity] = useState<CoffeQuantityProps[]>(
    () => {
      return coffes.map((coffe) => {
        return {
          name: coffe.name,
          quantity: 0,
        }
      })
    },
  )

  function handleRemoveCoffeQuantity(name: string) {
    const newCoffeQuantity = coffeQuantity.map((coffe) => {
      if (coffe.name === name) {
        if (coffe.quantity >= 1) {
          coffe.quantity = coffe.quantity - 1
        }
      }
      return coffe
    })

    setCoffeQuantity(newCoffeQuantity)
  }

  function handleAddCoffeQuantity(name: string) {
    const newCoffeQuantity = coffeQuantity.map((coffe) => {
      if (coffe.name === name) {
        coffe.quantity = coffe.quantity + 1
      }

      return coffe
    })

    setCoffeQuantity(newCoffeQuantity)
  }

  return (
    <Container>
      <NavBar>
        <h1>Nossos cafés</h1>
        <Filters>
          <button>TRADICIONAL</button>
          <button>ESPECIAL</button>
          <button>COM LEITE</button>
          <button>ALCOÓLICO</button>
          <button>GELADO</button>
        </Filters>
      </NavBar>
      <List>
        {coffes.map((coffe) => (
          <CoffeCard
            key={coffe.name}
            coffe={coffe}
            onAdd={handleAddCoffeQuantity}
            onRemove={handleRemoveCoffeQuantity}
            quantity={
              coffeQuantity.filter((c) => c.name === coffe.name)[0].quantity
            }
          />
        ))}
      </List>
    </Container>
  )
}
