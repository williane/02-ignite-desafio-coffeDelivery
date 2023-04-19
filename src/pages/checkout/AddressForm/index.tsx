import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { MapPinLine, SpeakerNone } from 'phosphor-react'
import { CardTitle, Form, Input, InputError, InputWrapper } from './styles'
import { MutableRefObject, useContext } from 'react'
import { CheckoutContext } from '../../../contexts/checkoutContext'
import { CartContext } from '../../../contexts/cartContext'

const AddressFormSchema = z.object({
  zip: z
    .string()
    .min(8, {
      message: 'É obrigatório informar o CEP com 8 digitos sem o hífen (-)',
    })
    .max(9, {
      message: 'Campo CEP deve ter no máximo 9 digitos com o hífen (-)',
    }),
  street: z.string().nonempty({ message: 'Campo Rua é obrigátorio' }),
  number: z.string().nonempty({ message: 'Campo Número é obrigátorio' }),
  complement: z.string().optional(),
  district: z.string().nonempty({ message: 'Campo Bairro é obrigátorio' }),
  state: z.string().nonempty({ message: 'Campo UF é obrigátorio' }),
  city: z.string().nonempty({ message: 'Campo Cidade é obrigátorio' }),
})

interface AddressFormProps {
  formRef: MutableRefObject<HTMLFormElement | null>
}
type AddressProps = z.infer<typeof AddressFormSchema>

export function AddressForm({ formRef }: AddressFormProps) {
  const { removeCart } = useContext(CartContext)
  const { getAddress } = useContext(CheckoutContext)
  const { register, handleSubmit, reset, formState } = useForm<AddressProps>({
    resolver: zodResolver(AddressFormSchema),
  })
  const navigate = useNavigate()
  const onSubmit = (data: AddressProps) => {
    getAddress(data)
    reset()
    removeCart()
    navigate('/success')
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
        <InputError>
          <Input
            type="text"
            inputType="zip"
            placeholder="CEP"
            {...register('zip')}
          />
          {formState.errors.zip?.message && (
            <span>{formState.errors.zip?.message}</span>
          )}
        </InputError>

        <Input
          type="text"
          inputType="street"
          placeholder="Rua"
          required
          {...register('street')}
        />

        <Input
          type="text"
          inputType="number"
          placeholder="Número"
          required
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
          required
          {...register('district')}
        />

        <Input
          type="text"
          inputType="city"
          placeholder="Cidade"
          required
          {...register('city')}
        />

        <Input
          type="text"
          inputType="state"
          placeholder="UF"
          required
          {...register('state')}
        />
      </InputWrapper>
    </Form>
  )
}
