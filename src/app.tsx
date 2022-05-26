import React, { useEffect, useState } from 'react';
import './app.css';
import BoardComponent from './components/board-component';
import { Board } from './models/Board';
import { Player } from './models/Player';
import { Colors } from './models/Colors';
import LostFiguresComponent from './components/lost-figures-component';

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePayer);
  }, []);

  function restart() {
    const board = new Board();
    board.initCells();
    board.addFigures();
    setBoard(board);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPayer : whitePayer);
  }

  return (
    <div className="app">
      <BoardComponent
        board={ board }
        setBoard={ setBoard }
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFiguresComponent title="Black Figures" figures={board.lostBlackFigures} />
        <LostFiguresComponent title="White Figures" figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
};

export default App;
