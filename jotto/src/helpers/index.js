export function getLetterMatchCount(guessWord, secretWord) {
  const secretLetters = secretWord.split("");

  //using set because we want to iterate through all of these letters and see how many are actually in this Set
  const guessedLetterSet = new Set(guessWord);

  //gives an array where any letter from secretWord matches the letter in the set
  //want length of array to give number of letters that match
  return secretLetters.filter((letter) => guessedLetterSet.has(letter)).length;
}
