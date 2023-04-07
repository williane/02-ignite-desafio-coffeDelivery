import { ReactNode, createContext, useState } from 'react'

interface CartProps {
  coffeName: string
  quantity: number
  unitCost: number
  totalCost: number
}

interface CartContextProps {
  cart: CartProps[]
  addNewCoffeOnCart: (
    coffeName: string,
    quantity: number,
    unitCost: number,
  ) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])

  console.log(cart)

  function addNewCoffeOnCart(
    coffeName: string,
    quantity: number,
    unitCost: number,
  ) {
    setCart((state) => [
      ...state,
      { coffeName, quantity, unitCost, totalCost: quantity * unitCost },
    ])
  }

  return (
    <CartContext.Provider value={{ cart, addNewCoffeOnCart }}>
      {children}
    </CartContext.Provider>
  )
}
