import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInput from '../GameInput/GameInput';
import GuessHistory from '../GuessHistory/GuessHistory';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(false);
  const [isLose, setIsLose] = React.useState(false);

  function isGuessCorrect(guess) {
    return guess === answer;
  }

  function handleSubmitGuess(guess) {
    if (hasWon || isLose) {
      return;
    }

    const nextHistory = [...guessHistory, guess];
    setGuessHistory(nextHistory);

    if (isGuessCorrect(guess)) {
      setHasWon(true);
      return;
    }

    if (nextHistory.length >= 6) {
      setIsLose(true);
    }
  }

  return (
    <>
      {hasWon ? (
        <WinBanner numGuesses={guessHistory.length} />
      ) : isLose ? (
        <LoseBanner answer={answer} />
      ) : (
        <GameInput handleSubmitGuess={handleSubmitGuess} />
      )}
      <GuessHistory guessHistory={guessHistory} />
    </>
  );
}

export default Game;
