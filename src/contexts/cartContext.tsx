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
  removeCoffeCart: (coffeName: string, quantity: number) => void
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
    type: 'add' | 'remove',
  ) {
    const newState = state.map((coffe) => {
      if (coffe.coffeName === coffeName) {
        if (type === 'add') {
          coffe.quantity += quantity
        } else {
          coffe.quantity >= 1 && (coffe.quantity -= quantity)
        }
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
      setCart(updateCartQuantity(cart, coffeName, quantity, 'add'))
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

  function removeCoffeCart(coffeName: string, quantity: number) {
    const coffeQuantity = cart.filter(
      (coffe) => coffe.coffeName === coffeName,
    )[0].quantity

    if (quantity === coffeQuantity) {
      const newCart = cart.filter((coffe) => coffe.coffeName !== coffeName)

      setCart(newCart)
    } else {
      setCart(updateCartQuantity(cart, coffeName, quantity, 'remove'))
    }
  }

  return (
    <CartContext.Provider value={{ cart, addNewCoffeOnCart, removeCoffeCart }}>
      {children}
    </CartContext.Provider>
  )
}
