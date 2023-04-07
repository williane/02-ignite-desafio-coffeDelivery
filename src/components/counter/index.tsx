import { Minus, Plus } from 'phosphor-react'
import { CounterWrapper } from './style'

interface CounterProps {
  iconSize: number
  height: number
  quantity: number
  onRemove: () => void
  onAdd: () => void
}

export function Counter({
  iconSize,
  height,
  quantity,
  onRemove,
  onAdd,
}: CounterProps) {
  return (
    <CounterWrapper buttonHeigth={height}>
      <button onClick={() => onRemove()}>
        <Minus size={iconSize} />
      </button>
      <span>{quantity}</span>
      <button onClick={() => onAdd()}>
        <Plus size={iconSize} />
      </button>
    </CounterWrapper>
  )
}
