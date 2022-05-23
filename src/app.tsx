import React, { useEffect, useState } from 'react';
import './app.css';
import BoardComponent from './components/board-component';
import { Board } from './models/Board';

const App = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const board = new Board();
    board.initCells();
    board.addFigures();
    setBoard(board);
  }

  return (
    <div className="app">
      <BoardComponent board={ board } setBoard={ setBoard }/>
    </div>
  );
};

export default App;
