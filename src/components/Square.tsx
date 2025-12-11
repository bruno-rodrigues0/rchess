import React, { useEffect, useState, type FunctionComponent } from "react";
import whiteRook from '../assets/img/wrook.png'
import whitePawn from '../assets/img/wpawn.png'
import whiteKnight from '../assets/img/wknight.png'
import whiteBishop from '../assets/img/wbishop.png'
import whiteQueen from '../assets/img/wqueen.png'
import whiteKing from '../assets/img/wking.png'
import blackRook from '../assets/img/brook.png'
import blackPawn from '../assets/img/bpawn.png'
import blackKnight from '../assets/img/bknight.png'
import blackBishop from '../assets/img/bbishop.png'
import blackQueen from '../assets/img/bqueen.png'
import blackKing from '../assets/img/bking.png'

interface SquareProps {
  color: 'white' | 'black';
  col: number;
  row: number;
  value: 'wp' | 'wr' | 'wk' | 'wb' | 'wki' | 'wq' | 'bp' | 'br' | 'bk' | 'bb' | 'bki' | 'bq' | null;
}
const whiteOutline: React.CSSProperties = {
  filter: `
    drop-shadow(3px 0 0 white)
    drop-shadow(-3px 0 0 white)
    drop-shadow(0 3px 0 white)
    drop-shadow(0 -3px 0 white)
  `
}

const Square: FunctionComponent<SquareProps> = ({ color, col, row, value }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [piece, setPiece] = useState<string | null>('')
  const bgClass = isClicked
    ? "bg-emerald-400"
    : color === "white"
      ? "bg-white"
      : "bg-neutral-900"

  useEffect(() => {
    if (value === 'wr') {
      setPiece(whiteRook)
    } else if (value === 'wp') {
      setPiece(whitePawn)
    } else if (value === 'wk') {
      setPiece(whiteKnight)
    } else if (value === 'wb') {
      setPiece(whiteBishop)
    } else if (value === 'wq') {
      setPiece(whiteQueen)
    } else if (value === 'wki') {
      setPiece(whiteKing)
    } else if (value === 'br') {
      setPiece(blackRook)
    } else if (value === 'bp') {
      setPiece(blackPawn)
    } else if (value === 'bk') {
      setPiece(blackKnight)
    } else if (value === 'bb') {
      setPiece(blackBishop)
    } else if (value === 'bq') {
      setPiece(blackQueen)
    } else if (value === 'bki') {
      setPiece(blackKing)
    } else {
      setPiece(null)
    }
  }, [value])

  const handleClick = () => {
    if (value) {
      setIsClicked((prev) => !prev)
    }
  }

  return (
    <div className={`${bgClass} w-[100px] h-[100px]`} onClick={handleClick}>
      {piece !== null ? <img src={piece} alt={value || ""} className="object-contain" draggable='false' style={whiteOutline} /> : ""}
    </div>
  )
}

export default Square;
