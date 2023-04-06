import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Actions, Cart, HeaderConteiner, Location } from './styles'
import { defaultTheme } from '../../styles/themes/default'
import { NavLink } from 'react-router-dom'

export function Header() {
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
        <NavLink to="/checkout">
          <Cart>
            <ShoppingCart
              size={22}
              color={defaultTheme['yellow-dark']}
              weight="fill"
            />
          </Cart>
        </NavLink>
      </Actions>
    </HeaderConteiner>
  )
}
