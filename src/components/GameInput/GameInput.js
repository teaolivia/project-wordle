import React from 'react';


function GameInput({ handleSubmitGuess }) {
  const [guess, setGuess] = React.useState('');

  function handleChange(event) {
    const nextGuess = event.target.value
      .toUpperCase()
      .replace(/[^A-Z]/g, '')
      .slice(0, 5);

    setGuess(nextGuess);
  }

  return (
    <form className="game-input-tight" onSubmit={(e) => {
      e.preventDefault();
      handleSubmitGuess(guess);
      setGuess('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        autoComplete="off"
        autoCapitalize="characters"
      />
    </form>
  );
}

export default GameInput;