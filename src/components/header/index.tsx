import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Actions, Cart, HeaderConteiner, Location } from './styles'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
  return (
    <HeaderConteiner>
      <img src={Logo} alt="" />
      <Actions>
        <Location>
          <MapPin size={22} color={defaultTheme.purple} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>
        <Cart>
          <ShoppingCart
            size={22}
            color={defaultTheme['yellow-dark']}
            weight="fill"
          />
        </Cart>
      </Actions>
    </HeaderConteiner>
  )
}
