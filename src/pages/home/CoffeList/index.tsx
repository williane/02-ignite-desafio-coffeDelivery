import { CoffeCard } from './CoffeCard'
import { Container, Filters, List, NavBar } from './styles'

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
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
      </List>
    </Container>
  )
}
