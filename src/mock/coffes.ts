import expressoTradicional from '../assets/coffes/expresso_tradicional.svg'
import expressoAmericano from '../assets/coffes/expresso_americano.svg'
import expressoCremoso from '../assets/coffes/expresso_cremoso.svg'
import expressoGelado from '../assets/coffes/expresso_gelado.svg'
import cafeComLeite from '../assets/coffes/cafe_com_leite.svg'
import latte from '../assets/coffes/latte.svg'
import capuccino from '../assets/coffes/capuccino.svg'
import macchiato from '../assets/coffes/macchiato.svg'
import mocaccino from '../assets/coffes/mocaccino.svg'
import chocolateQuente from '../assets/coffes/chocolate_quente.svg'
import cubano from '../assets/coffes/cubano.svg'
import havaiano from '../assets/coffes/havaiano.svg'
import arabe from '../assets/coffes/arabe.svg'
import irlandes from '../assets/coffes/irlandes.svg'

type tag = 'tradicional' | 'especial' | 'com leite' | 'alcoólico' | 'gelado'

interface CoffeProps {
  name: string
  tag: tag[]
  description: string
  cost: number
  image: string
}

export const coffes: CoffeProps[] = [
  {
    name: 'Expresso Tradicional',
    tag: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    cost: 9.9,
    image: expressoTradicional,
  },
  {
    name: 'Expresso Americano',
    tag: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    cost: 9.9,
    image: expressoAmericano,
  },
  {
    name: 'Expresso Cremoso',
    tag: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    cost: 9.9,
    image: expressoCremoso,
  },
  {
    name: 'Expresso Gelado',
    tag: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    cost: 9.9,
    image: expressoGelado,
  },
  {
    name: 'Café com Leite',
    tag: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    cost: 9.9,
    image: cafeComLeite,
  },
  {
    name: 'Latte',
    tag: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    cost: 9.9,
    image: latte,
  },
  {
    name: 'Capuccino',
    tag: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    cost: 9.9,
    image: capuccino,
  },
  {
    name: 'Macchiato',
    tag: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    cost: 9.9,
    image: macchiato,
  },
  {
    name: 'Mocaccino',
    tag: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    cost: 9.9,
    image: mocaccino,
  },
  {
    name: 'Chocolate Quente',
    tag: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    cost: 9.9,
    image: chocolateQuente,
  },
  {
    name: 'Cubano',
    tag: ['especial', 'alcoólico', 'gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    cost: 9.9,
    image: cubano,
  },
  {
    name: 'Havaiano',
    tag: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    cost: 9.9,
    image: havaiano,
  },
  {
    name: 'Árabe',
    tag: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    cost: 9.9,
    image: arabe,
  },
  {
    name: 'Irlandês',
    tag: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    cost: 9.9,
    image: irlandes,
  },
]
