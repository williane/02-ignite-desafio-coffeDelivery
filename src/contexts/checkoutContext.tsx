import { ReactNode, createContext, useState } from 'react'

interface AddressProps {
  zip: number
  street: string
  number: string
  complement: string
  district: string
  state: string
  city: string
}

interface CheckoutContextProps {
  address: AddressProps
  paymentMethod: string
  getAddress: (address: AddressProps) => void
  getPaymentMethod: (paymentMethod: string) => void
}

export const CheckoutContext = createContext({} as CheckoutContextProps)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [address, setAddress] = useState<AddressProps>()
  const [paymentMethod, setPaymentMethod] = useState('Cartão de Crédito')

  console.log(address)

  function getAddress(address: AddressProps) {
    setAddress(address)
  }

  function getPaymentMethod(paymentMethod: string) {
    setPaymentMethod(paymentMethod)
  }

  return (
    <CheckoutContext.Provider
      value={{ address, paymentMethod, getAddress, getPaymentMethod }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
