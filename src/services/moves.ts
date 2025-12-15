import type { Cord } from "../@types/square";

abstract class Moves {
  static rook = (pos: Cord, target: Cord): boolean => {
    console.log(pos, target)
    return true
  }

  static knight = (pos: Cord, target: Cord): boolean => {
    console.log(pos, target)
    return true
  }

  static bishop = (pos: Cord, target: Cord): boolean => {
    console.log(pos, target)
    return true
  }

  static king = (pos: Cord, target: Cord): boolean => {
    console.log(pos, target)
    return true
  }

  static queen = (pos: Cord, target: Cord): boolean => {
    console.log(pos, target)
    return true
  }
}

export abstract class WhiteMoves extends Moves {

  static pawn = (pos: Cord, target: Cord) => {
    console.log(pos, target)
    return true
  }

  static rook = super.rook
  static knight = super.knight
  static bishop = super.bishop
  static king = super.king
  static queen = super.queen

}

export abstract class BlackMoves extends Moves {

  static pawn = (pos: Cord, target: Cord) => {
    console.log(pos, target)
    return true
  }

  static rook = super.rook
  static knight = super.knight
  static bishop = super.bishop
  static king = super.king
  static queen = super.queen
}
