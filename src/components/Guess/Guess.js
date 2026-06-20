import React from 'react';
import { range } from '../../utils';

function Guess({ key, value }) {
  return (
    <p key={key} className="guess">
      {range(5).map((cellIndex) => (
        <span key={cellIndex} className="cell">
          {value ? value[cellIndex] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;