import { Colors } from '../Colors';
import logo from '../../assets/black-king.png';
import { Cell } from '../Cell';

export enum FigureNames {
  "FIGURE" = 'figure',
  "KING" = 'king',
  "KNIGHT" = 'knight',
  "PAWN" = 'pawn',
  "QUEEN" = 'queen',
  "ROOK" = 'rook',
  "BISHOP" = 'bishop',
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.floor(Math.random() * 1000);
  }

  canMove(target: Cell): boolean {
    return true;
  }

  moveFigure(target: Cell) {

  }
}
