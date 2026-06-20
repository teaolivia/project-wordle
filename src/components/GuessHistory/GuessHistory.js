import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';
import { range } from '../../utils';

function GuessHistory({ guessHistory }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guessHistory[num]} />
      ))}
    </div>
  );
}

export default GuessHistory;