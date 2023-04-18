import { useContext, useRef, useState } from 'react'

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { CoffeCard } from './CoffeCard'

import { CartContext } from '../../contexts/cartContext'
import {
  ButtonWrapper,
  CardTitle,
  CoffeCardList,
  ConfirmButton,
  Container,
  LeftWrapper,
  PayCard,
  PayTypeButton,
  RightWrapper,
  Title,
  Totals,
  TotalsWrapper,
} from './styles'
import { priceFormatter } from '../../utils/numberFormatter'
import { AddressForm } from './AddressForm'
import { CheckoutContext } from '../../contexts/checkoutContext'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const { cart } = useContext(CartContext)
  const { getPaymentMethod } = useContext(CheckoutContext)
  const navigate = useNavigate()
  const [paymentType, setPaymentType] = useState('credit')

  const formRef = useRef<HTMLFormElement | null>(null)

  const submit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      )
      navigate('/success')
    }
  }

  const totalItemsCost = cart.reduce((acc, cart) => {
    return (acc += cart.totalCost)
  }, 0)
  const deliveryCost = 3.5
  const totalCost = totalItemsCost + deliveryCost

  const paymentTypes = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    money: 'Dinheiro',
  }

  function handlePaymentType(payType: keyof typeof paymentTypes) {
    getPaymentMethod(paymentTypes[payType])
    setPaymentType(payType)
  }

  return (
    <Container>
      <LeftWrapper>
        <Title>Complete seu pedido</Title>
        <AddressForm formRef={formRef} />
        <PayCard>
          <CardTitle>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </CardTitle>
          <ButtonWrapper>
            <PayTypeButton
              onClick={() => handlePaymentType('credit')}
              option="credit"
              payType={paymentType}
            >
              <CreditCard size={16} color="#8047F8" />
              cartão de crédito
            </PayTypeButton>
            <PayTypeButton
              onClick={() => handlePaymentType('debit')}
              option="debit"
              payType={paymentType}
            >
              <Bank size={16} color="#8047F8" />
              cartão de débito
            </PayTypeButton>
            <PayTypeButton
              onClick={() => handlePaymentType('money')}
              option="money"
              payType={paymentType}
            >
              <Money size={16} color="#8047F8" />
              dinheiro
            </PayTypeButton>
          </ButtonWrapper>
        </PayCard>
      </LeftWrapper>
      <RightWrapper>
        <Title>Cafés selecionados</Title>
        <TotalsWrapper>
          <CoffeCardList>
            {cart.map((coffe) => (
              <CoffeCard key={coffe.coffeName} coffe={coffe} />
            ))}
          </CoffeCardList>
          <Totals>
            <div>
              <span>Total de Itens</span>
              <span>{priceFormatter.format(totalItemsCost)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>{priceFormatter.format(deliveryCost)}</span>
            </div>
            <div>
              <span>Total</span>
              <span>{priceFormatter.format(totalCost)}</span>
            </div>
          </Totals>
          <ConfirmButton onClick={submit}>Confirmar Pedido</ConfirmButton>
        </TotalsWrapper>
      </RightWrapper>
    </Container>
  )
}
