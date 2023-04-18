import { useForm } from 'react-hook-form'
import { MapPinLine } from 'phosphor-react'
import { CardTitle, Form, Input, InputWrapper } from './styles'
import { MutableRefObject, useContext } from 'react'
import { CheckoutContext } from '../../../contexts/checkoutContext'

interface AddressFormProps {
  formRef: MutableRefObject<HTMLFormElement | null>
}

interface AddressProps {
  zip: number
  street: string
  number: string
  complement: string
  district: string
  state: string
  city: string
}

export function AddressForm({ formRef }: AddressFormProps) {
  const { getAddress } = useContext(CheckoutContext)
  const { register, handleSubmit } = useForm<AddressProps>()
  const onSubmit = (data: AddressProps) => {
    getAddress(data)
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <CardTitle>
        <MapPinLine size={22} color="#C47F17" />
        <div>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </CardTitle>
      <InputWrapper>
        <Input
          type="text"
          inputType="zip"
          placeholder="CEP"
          {...register('zip')}
        />
        <Input
          type="text"
          inputType="street"
          placeholder="Rua"
          {...register('street')}
        />
        <Input
          type="text"
          inputType="number"
          placeholder="Número"
          {...register('number')}
        />
        <Input
          type="text"
          inputType="complement"
          placeholder="Complemento"
          {...register('complement')}
        />
        <Input
          type="text"
          inputType="district"
          placeholder="Bairro"
          {...register('district')}
        />
        <Input
          type="text"
          inputType="city"
          placeholder="Cidade"
          {...register('city')}
        />
        <Input
          type="text"
          inputType="state"
          placeholder="UF"
          {...register('state')}
        />
      </InputWrapper>
    </Form>
  )
}
