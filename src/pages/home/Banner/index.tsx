import { Container, Item, Items, Title } from './styles'

import BackgroundBanner from '../../../assets/bannerBackground.svg'
import bannerImage from '../../../assets/bannerImage.svg'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { defaultTheme } from '../../../styles/themes/default'

export function Banner() {
  return (
    <Container backgroudBanner={BackgroundBanner}>
      <div>
        <Title>
          <p>Encontre o café perfeito para qualquer hora do dia</p>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>
        <Items>
          <Item colorBackgroud={defaultTheme['yellow-dark']}>
            <div>
              <ShoppingCart size={16} color="#ffffff" weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </Item>
          <Item colorBackgroud={defaultTheme['base-text']}>
            <div>
              <Package size={16} color="#ffffff" weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </Item>
          <Item colorBackgroud={defaultTheme.yellow}>
            <div>
              <Timer size={16} color="#ffffff" weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item colorBackgroud={defaultTheme.purple}>
            <div>
              <Coffee size={16} color="#ffffff" weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </Item>
        </Items>
      </div>
      <img src={bannerImage} alt="" />
    </Container>
  )
}
