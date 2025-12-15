import { useEffect, useState } from "react";
import Square from "./Square";
import type { Cord, SquareValue } from "../@types/square";
import { BlackMoves, WhiteMoves } from "../services/moves";
import MoveAudio from "../assets/audio/move-self.mp3"

const Board = () => {
  const [board, setBoard] = useState(Array(8).fill(Array(8).fill(null)))
  const [selected, setSelected] = useState<Cord | null>(null)
  const [isWhiteTurn, setIsWhiteTurn] = useState<boolean>(true)

  useEffect(() => {
    const newBoard = board.map((row, rowIdx) => {

      if (rowIdx === 6) {
        const newRow = row.map((square: any) => square = 'wp')
        return newRow;
      } else if (rowIdx === 7) {
        const piece = ['wr', 'wk', 'wb', 'wq', 'wki', 'wb', 'wk', 'wr'];
        const newRow = row.map((square: any, index: number) => square = piece[index])
        return newRow;
      } else if (rowIdx === 1) {
        const newRow = row.map((square: any) => square = 'bp')
        return newRow;
      } else if (rowIdx === 0) {
        const piece = ['br', 'bk', 'bb', 'bq', 'bki', 'bb', 'bk', 'br'];
        const newRow = row.map((square: any, index: number) => square = piece[index])
        return newRow;
      }

      return row;
    })

    setBoard(newBoard)
  }, [])

  const handleSquareClick = (square: Cord) => {
    const clickedSquareValue: SquareValue = board[square[0]][square[1]]
    const selectedValue: SquareValue = selected ? board[selected?.[0]][selected?.[1]] : null

    const move = (value: SquareValue) => {
      const audio = new Audio(MoveAudio)
      const newBoard = board.map((row, rowIdx) => {
        const newRow = row.map((col: SquareValue, colIdx: number) => {
          if (selected?.[0] === rowIdx && selected?.[1] === colIdx) {
            col = null
          }

          if (square[0] === rowIdx && square[1] === colIdx) {
            col = value
          }

          return col
        })

        return newRow
      })

      setBoard(newBoard)
      audio.play()
      setSelected(null)
    }

    if (selected && clickedSquareValue === null) {
      if (selectedValue?.[0] === 'w') {

        switch (selectedValue) {
          case 'wp':
            if (WhiteMoves.pawn(selected, square)) move('wp')
            break;

          case 'wr':
            if (WhiteMoves.rook(selected, square)) move('wr')
            break;

          case 'wk':
            if (WhiteMoves.knight(selected, square)) move('wk')
            break;

          case 'wb':
            if (WhiteMoves.bishop(selected, square)) move('wb')
            break;

          case 'wki':
            if (WhiteMoves.king(selected, square)) move('wki')
            break;

          case 'wq':
            if (WhiteMoves.queen(selected, square)) move('wq')
            break;

          default:
            return
        }
      } else if (selectedValue?.[0] === "b") {

        switch (selectedValue) {
          case 'bp':
            if (BlackMoves.pawn(selected, square)) move('bp')
            break;

          case 'br':
            if (BlackMoves.rook(selected, square)) move('br')
            break;

          case 'bk':
            if (BlackMoves.knight(selected, square)) move('bk')
            break;

          case 'bb':
            if (BlackMoves.bishop(selected, square)) move('bb')
            break;

          case 'bki':
            if (BlackMoves.king(selected, square)) move('bki')
            break;

          case 'bq':
            if (BlackMoves.queen(selected, square)) move('bq')
            break;

          default:
            return
        }
      }

    } else if (
      clickedSquareValue === null
      || (selected !== null && selected[0] === square[0] && selected[1] === square[1])
    ) {

      setSelected(null)

    } else {
      if (clickedSquareValue[0] === 'w' && isWhiteTurn) {
        setSelected(square)
        setIsWhiteTurn((prev: boolean) => !prev)

      } else if (clickedSquareValue[0] === 'b' && !isWhiteTurn) {
        setSelected(square)
        setIsWhiteTurn((prev: boolean) => !prev)
      }
    }
  }

  return (
    <div>
      <div id='deathsw'></div>
      <div>
        {board.map((row, rowIdx: number) => {
          return (
            <div className="flex" key={rowIdx}>
              {row.map((square: any, colIdx: number) => {
                return (
                  <Square
                    color={(rowIdx + colIdx) % 2 === 1 ? 'black' : 'white'}
                    value={square}
                    col={colIdx}
                    row={rowIdx}
                    key={colIdx}
                    isSelected={rowIdx === selected?.[0] && colIdx === selected?.[1]}
                    onClick={handleSquareClick}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
      <div id='deathsb'></div>
    </div>
  )
}

export default Board;
