import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  ButtonWrapper,
  CardTitle,
  Container,
  Form,
  Input,
  InputWrapper,
  LeftWrapper,
  PayCard,
  RightWrapper,
  Title,
} from './styles'

export function Checkout() {
  return (
    <Container>
      <LeftWrapper>
        <Title>Complete seu pedido</Title>
        <Form>
          <CardTitle>
            <MapPinLine size={22} color="#C47F17" />
            <div>
              <p>Endereço de entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CardTitle>
          <InputWrapper>
            <Input type="text" inputType="zip" placeholder="CEP" />
            <Input type="text" inputType="street" placeholder="Rua" />
            <Input type="text" inputType="number" placeholder="Número" />
            <Input
              type="text"
              inputType="complement"
              placeholder="Complemento"
            />
            <Input type="text" inputType="district" placeholder="Bairro" />
            <Input type="text" inputType="city" placeholder="Cidade" />
            <Input type="text" inputType="state" placeholder="UF" />
          </InputWrapper>
        </Form>
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
            <button>
              <CreditCard size={16} color="#8047F8" />
              cartão de crédito
            </button>
            <button>
              <Bank size={16} color="#8047F8" />
              cartão de débito
            </button>
            <button>
              <Money size={16} color="#8047F8" />
              dinheiro
            </button>
          </ButtonWrapper>
        </PayCard>
      </LeftWrapper>
      <RightWrapper>
        <Title>Cafés selecionados</Title>
      </RightWrapper>
    </Container>
  )
}
