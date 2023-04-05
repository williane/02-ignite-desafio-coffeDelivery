import { Minus, Plus } from 'phosphor-react'
import { CounterWrapper } from './style'

interface CounterProps {
  iconSize: number
  height: number
}

export function Counter({ iconSize, height }: CounterProps) {
  return (
    <CounterWrapper buttonHeigth={height}>
      <button>
        <Minus size={iconSize} />
      </button>
      <span>1</span>
      <button>
        <Plus size={iconSize} />
      </button>
    </CounterWrapper>
  )
}
