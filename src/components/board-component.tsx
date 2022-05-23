import React, { FC, useState } from 'react';
import CellComponent from './cell-component';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>( null);

  const click = (cell: Cell) => {
    setSelectedCell(cell);
  }

  return (
    <div className="board">
      { board.cells.map((row, index) =>
        <React.Fragment key={index}>
          { row.map((cell) =>
            <CellComponent
              click={click}
              key={cell.id}
              cell={ cell }
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
            />)}
        </React.Fragment>
      )}
    </div>
  );
};

export default BoardComponent;
