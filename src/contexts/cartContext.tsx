import { ReactNode, createContext, useState } from 'react'

interface CartProps {
  coffeName: string
  image: string
  quantity: number
  unitCost: number
  totalCost: number
}

interface CartContextProps {
  cart: CartProps[]
  addNewCoffeOnCart: (
    coffeName: string,
    image: string,
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

  function updateCartQuantity(
    state: CartProps[],
    coffeName: string,
    quantity: number,
  ) {
    const newState = state.map((coffe) => {
      if (coffe.coffeName === coffeName) {
        coffe.quantity += quantity
        coffe.totalCost = coffe.unitCost * quantity
      }

      return coffe
    })

    return newState
  }

  function addNewCoffeOnCart(
    coffeName: string,
    image: string,
    quantity: number,
    unitCost: number,
  ) {
    setCart((state) => {
      const existCoffeOnCart =
        state.filter((coffe) => coffe.coffeName === coffeName).length > 0
      if (existCoffeOnCart) {
        return updateCartQuantity(state, coffeName, quantity)
      }
      return [
        ...state,
        {
          coffeName,
          image,
          quantity,
          unitCost,
          totalCost: quantity * unitCost,
        },
      ]
    })
  }

  return (
    <CartContext.Provider value={{ cart, addNewCoffeOnCart }}>
      {children}
    </CartContext.Provider>
  )
}
