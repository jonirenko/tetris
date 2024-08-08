import React from 'react';
import Board from './Board';
import './Tetris.css';
import { useBoard } from '../hooks/useBoard';
import { useGameStats } from '../hooks/useGameStats';
import { usePlayer } from '../hooks/usePlayer';
import GameStats from './GameStats';
import Previews from './Previews';

function Tetris({rows, columns, setGameOver}) {
    const [gameStats, addLinesCleared] = useGameStats();
    const [board, setBoard] = useBoard({rows, columns});
    const [player, setPlayer, resetPlayer] = usePlayer();
    
  return (
    <div className='Tetris'>
        <Board board={board}/>
        <Previews tetrominoes={player.tetrominoes}/>
        <GameStats gameStats={gameStats}/>
    </div>

  );
}

export default Tetris;