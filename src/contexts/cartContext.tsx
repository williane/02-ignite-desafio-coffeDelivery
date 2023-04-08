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
        coffe.totalCost = coffe.unitCost * coffe.quantity
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
    const existOnCart =
      cart.filter((coffe) => coffe.coffeName === coffeName).length > 0

    if (existOnCart) {
      setCart(updateCartQuantity(cart, coffeName, quantity))
    } else {
      setCart([
        ...cart,
        {
          coffeName,
          image,
          quantity,
          unitCost,
          totalCost: quantity * unitCost,
        },
      ])
    }
  }

  return (
    <CartContext.Provider value={{ cart, addNewCoffeOnCart }}>
      {children}
    </CartContext.Provider>
  )
}
