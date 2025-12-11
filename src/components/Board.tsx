import { useEffect, useState, type FunctionComponent } from "react";
import Square from "./Square";

const Board: FunctionComponent = () => {
  const [board, setBoard] = useState(Array(8).fill(Array(8).fill(null)))

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
                    key={colIdx} />
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
