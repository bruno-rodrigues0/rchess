import { type SquareValue } from "./square"

export type SquareProps = {
  color: 'white' | 'black'
  col: number
  row: number
  value: SquareValue
  isSelected: boolean
  onClick: (square: [number, number]) => void
}
