import { Minus, Plus } from 'phosphor-react'
import { CounterWrapper } from './style'

interface CounterProps {
  iconSize: number
  height: number
  CoffeQuantity: number
  coffeName: string
  onRemove: (name: string) => void
  onAdd: (name: string) => void
}

export function Counter({
  iconSize,
  height,
  CoffeQuantity,
  coffeName,
  onRemove,
  onAdd,
}: CounterProps) {
  return (
    <CounterWrapper buttonHeigth={height}>
      <button onClick={() => onRemove(coffeName)}>
        <Minus size={iconSize} />
      </button>
      <span>{CoffeQuantity || 0}</span>
      <button onClick={() => onAdd(coffeName)}>
        <Plus size={iconSize} />
      </button>
    </CounterWrapper>
  )
}
