import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/logo.svg'
import { defaultTheme } from '../../styles/themes/default'
import {
  Actions,
  Cart,
  CartQuantity,
  HeaderConteiner,
  Location,
} from './styles'
import { CartContext } from '../../contexts/cartContext'

export function Header() {
  const { cart } = useContext(CartContext)
  const totalCart = cart.length
  const isCartDisabled = totalCart <= 0

  function handleDisableCart(event) {
    if (isCartDisabled) {
      event.preventDefault()
    }
  }

  return (
    <HeaderConteiner>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <Actions>
        <Location>
          <MapPin size={22} color={defaultTheme.purple} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>
        <NavLink to="/checkout" onClick={handleDisableCart}>
          <Cart disabled={isCartDisabled}>
            <ShoppingCart
              size={22}
              color={defaultTheme['yellow-dark']}
              weight="fill"
            />
            {totalCart ? <CartQuantity>{totalCart}</CartQuantity> : undefined}
          </Cart>
        </NavLink>
      </Actions>
    </HeaderConteiner>
  )
}
