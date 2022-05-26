import React, { FC, useEffect, useState } from 'react';
import CellComponent from './cell-component';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>( null);

  const click = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
      updateBoard();
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  useEffect(() => {
    highLightCells();
  }, [selectedCell]);

  const highLightCells = () => {
    board.highLightCells(selectedCell);
    updateBoard();
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div>
      <h3>Current Player: { currentPlayer?.color }</h3>
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
    </div>
  );
};

export default BoardComponent;
