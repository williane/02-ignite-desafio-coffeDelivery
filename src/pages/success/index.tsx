import { useContext } from 'react'
import {
  Container,
  Detail,
  Icon,
  Information,
  OrderInfo,
  Title,
  Wrapper,
} from './styles'
import SuccessImage from '../../assets/successImage.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { CheckoutContext } from '../../contexts/checkoutContext'

export function Success() {
  const { address, paymentMethod } = useContext(CheckoutContext)
  return (
    <Container>
      <Title>
        <strong>Uhu! Pedido confirmado</strong>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <Wrapper>
        <OrderInfo>
          <Information>
            <Icon iconColor="purple-dark">
              <MapPin size={16} weight="fill" color="#ffffff" />
            </Icon>
            <Detail>
              <p>
                Entrega em{' '}
                <strong>{`${address.street}, ${address.number}`}</strong>
              </p>
              <p>{`${address.district} - ${address.city}, ${address.state}`}</p>
            </Detail>
          </Information>
          <Information>
            <Icon iconColor="yellow">
              <Timer size={16} weight="fill" color="#ffffff" />
            </Icon>
            <Detail>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </Detail>
          </Information>
          <Information>
            <Icon iconColor="yellow-dark">
              <CurrencyDollar size={16} weight="fill" color="#ffffff" />
            </Icon>
            <Detail>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{paymentMethod}</strong>
              </p>
            </Detail>
          </Information>
        </OrderInfo>
        <img src={SuccessImage} alt="" />
      </Wrapper>
    </Container>
  )
}
