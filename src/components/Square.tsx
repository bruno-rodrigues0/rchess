import { useLayoutEffect, useState } from "react";
import type { SquareProps } from '../@types/props'
import whiteRook from '../assets/img/wrook.png'
import whitePawn from '../assets/img/wpawn.png'
import whiteKnight from '../assets/img/wknight.png'
import whiteBishop from '../assets/img/wbishop.png'
import whiteKing from '../assets/img/wking.png'
import whiteQueen from '../assets/img/wqueen.png'
import blackRook from '../assets/img/brook.png'
import blackPawn from '../assets/img/bpawn.png'
import blackKnight from '../assets/img/bknight.png'
import blackBishop from '../assets/img/bbishop.png'
import blackKing from '../assets/img/bking.png'
import blackQueen from '../assets/img/bqueen.png'

const whiteOutline: React.CSSProperties = {
  filter: `
    drop-shadow(2px 0 0 white)
    drop-shadow(-2px 0 0 white)
    drop-shadow(0 2px 0 white)
    drop-shadow(0 -2px 0 white)
  `
}

const Square = ({ color, col, row, value, isSelected, onClick }: SquareProps) => {
  const [piece, setPiece] = useState<string | null>('')
  const bgClass = isSelected
    ? "bg-emerald-400"
    : color === "white"
      ? "bg-white"
      : "bg-black"

  useLayoutEffect(() => {

    switch (value) {
      case 'wr':
        setPiece(whiteRook)
        break;
      case 'wp':
        setPiece(whitePawn)
        break;
      case 'wk':
        setPiece(whiteKnight)
        break;
      case 'wb':
        setPiece(whiteBishop)
        break;
      case 'wki':
        setPiece(whiteKing)
        break;
      case 'wq':
        setPiece(whiteQueen)
        break;
      case 'br':
        setPiece(blackRook)
        break;
      case 'bp':
        setPiece(blackPawn)
        break;
      case 'bk':
        setPiece(blackKnight)
        break;
      case 'bb':
        setPiece(blackBishop)
        break;
      case 'bki':
        setPiece(blackKing)
        break;
      case 'bq':
        setPiece(blackQueen)
        break;
      default:
        setPiece(null)
    }

  }, [value])

  return (
    <div className={`${bgClass} w-[11vw] h-[11vw] md:w-[6vw] md:h-[6vw]`} onClick={() => onClick([row, col])}>
      {piece !== null ? <img
        src={piece}
        alt={value || ""}
        className="object-contain"
        style={whiteOutline}
        draggable='false' /> : null}
    </div>
  )
}

export default Square;
