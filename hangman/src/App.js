import './index.css';
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import Confetti from "react-confetti"

export default function App() {
  // State values
  const [word, setWord] = useState("");
  const [guessedWords, setGuessedWords] = useState([]);
  const [numGame, setNumGame] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch a random noun, adjective, or animal from the API whenever a new game starts
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      fetch(`https://hangman-api-nine.vercel.app/word`)
        .then((res) => res.json())
        .then((data) => {
          setWord(data[0])
          setLoading(false)
        });
    }, 500)
  }, [numGame]);

  // Derived values
  const wrongCount = guessedWords.filter((letter) => !word.includes(letter)).length;
  const isGameLost = wrongCount > 8;
  const isGameWon = word !== "" && word.split("").every((letter) => guessedWords.includes(letter));
  const isGameOver = isGameLost || isGameWon;

  // Static values 
  const letters = "abcdefghijklmnopqrstuvwxyz-";

  // Displays letters if correctly guessed and displays letters not guessed when the game is over
  const wordElements = word.split("").map((letter, index) => (
    <span 
      className={guessedWords.includes(letter) ? "letter" : "letter-red"} 
      key={index}
    >
      {guessedWords.includes(letter) ? letter.toUpperCase() : isGameOver && letter.toUpperCase()}
    </span>
  ));

  // Diplays buttons that change color if the letter is or is not in the word and disable
  // when game is over
  const letterElements = letters.split("").map((letter) => {
    const inWord = clsx("keyboard", {
      correct: guessedWords.includes(letter) && word.includes(letter),
      incorrect: guessedWords.includes(letter) && !word.includes(letter),
    });

    return (
      <button 
        className={inWord} 
        key={letter} 
        onClick={() => getWord(letter)} 
        disabled={isGameOver}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  // Keeps count of how many gusses the user has made in total
  const count = guessedWords.length;

  // Changes className depending on whether the use won or lost the game
  const gameStatus = clsx("game-status", {
    won: isGameWon,
    lose: isGameLost,
  });

  // Updates the array of guessed words using state
  function getWord(letter) {
    setGuessedWords((prevGuessedWords) =>
      prevGuessedWords.includes(letter)
        ? [...prevGuessedWords]
        : [...prevGuessedWords, letter]
    );
  }

  // Resets the game for the user if they want to play again
  function newGame() {
    setWord("")
    setNumGame((prevNum) => prevNum + 1);
    setGuessedWords([]);
  }

  return (
    <main>
      {
        isGameWon ? 
          <Confetti
            recycle={false}
            numberOfPieces={1000}
            gravity={.5}
          />
        : null
      }

      <h1 className="title">Hangman</h1>

      {count > 0 || numGame > 0 ? null : (
        <p className="instructions">
            Hangman is a word-guessing game where one player thinks of a word,
            and the other tries to guess it letter by letter. Each incorrect guess
            adds a part to a drawing of a "hangman." The goal is to guess the word
            before the drawing is completed.
        </p>
      )}

      {(count > 0 || numGame > 0) && !isGameOver ? (
        <p className="wrong-guesses">
          Number of wrong guesses remaining: {9 - wrongCount}
        </p>
      ) : null}

      {isGameOver ? (
        <p className={gameStatus}>
          {isGameWon ? "You win!! Congratulations 🎉" : "You lost 😔"}
        </p>
      ) : null}

      <section className="word">
        {loading ? (<p className="word-placeholder">Loading new word...</p>) : (wordElements)}
      </section>

      <section className="letters">{letterElements}</section>

      {isGameOver ? (
        <button className="new-game" onClick={() => newGame()}>
          New Game
        </button>
      ) : null}
      
    </main>
  );
}