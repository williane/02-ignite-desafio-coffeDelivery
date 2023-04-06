import { CoffeCard } from './CoffeCard'
import { Container, Filters, List, NavBar } from './styles'

import { coffes } from '../../../mock/coffes'

export function CoffeList() {
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
          <CoffeCard key={coffe.name} coffe={coffe} />
        ))}
      </List>
    </Container>
  )
}
