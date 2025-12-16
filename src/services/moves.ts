import type { Cord } from "../@types/square";

abstract class Moves {
  static rook = (pos: Cord, target: Cord): boolean => {
    console.log(pos, target)
    return true
  }

  static knight = (pos: Cord, target: Cord): boolean => {
    const canMove = (() => {
      return (
        (target[0] === pos[0] + 2 && (target[1] === pos[1] + 1 || target[1] === pos[1] - 1))
        || (target[0] === pos[0] - 2 && (target[1] === pos[1] + 1 || target[1] === pos[1] - 1))
        || (target[1] === pos[1] - 2 && (target[0] === pos[0] + 1 || target[0] === pos[0] - 1))
        || (target[1] === pos[1] + 2 && (target[0] === pos[0] + 1 || target[0] === pos[0] - 1))
      )
    })()
    return canMove
  }

  static bishop = (pos: Cord, target: Cord): boolean => {
    console.log(pos, target)
    return true
  }

  static king = (pos: Cord, target: Cord): boolean => {
    const canMove = (() => {
      return (
        ((target[0] <= pos[0] + 1 && target[0] >= pos[0] - 1) && (target[1] <= pos[1] + 1 && target[1] >= pos[1] - 1))
      )
    })()
    return canMove
  }

  static queen = (pos: Cord, target: Cord): boolean => {
    console.log(pos, target)
    return true
  }
}

export abstract class WhiteMoves extends Moves {

  static pawn = (pos: Cord, target: Cord) => {
    const canMove = (() => {
      return (
        (pos[0] === 6 && (target[0] === pos[0] - 1 || target[0] === pos[0] - 2) && target[1] === pos[1])
        || (pos[1] === target[1]) && ((target[0] === pos[0] - 1) && target[1] === pos[1])
        || (pos[1] !== target[1] && false)
      )
    })()

    return canMove
  }

  static rook = super.rook
  static knight = super.knight
  static bishop = super.bishop
  static king = super.king
  static queen = super.queen

}

export abstract class BlackMoves extends Moves {

  static pawn = (pos: Cord, target: Cord) => {
    const canMove = (() => {
      return (
        (pos[0] === 1 && (target[0] === pos[0] + 1 || target[0] === pos[0] + 2) && target[1] === pos[1])
        || (pos[1] === target[1]) && ((target[0] === pos[0] + 1) && target[1] === pos[1])
        || (pos[1] !== target[1] && false)
      )
    })()

    return canMove
  }

  static rook = super.rook
  static knight = super.knight
  static bishop = super.bishop
  static king = super.king
  static queen = super.queen
}
