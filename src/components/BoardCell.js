import React from 'react';
import './BoardCell.css';

function BoardCell({cell}) {
  return (
    <div className={`BoardCell ${cell.className}`}>
        <div className='Sparkle'>

        </div>
    </div>
  );
}

export default BoardCell;