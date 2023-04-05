import { Banner } from './Banner'
import { CoffeList } from './CoffeList'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Banner />
      <CoffeList />
    </Container>
  )
}
