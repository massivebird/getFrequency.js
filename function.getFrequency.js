// This function takes a string and returns the frequency of each letter that appears within said string
// • Does not return anything in the case of letters that do not appear within string (I'm proud of that one)

function getFrequency(string) {
  console.log(`In the string "${string.toUpperCase()}:"`)
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < 26; i++) { // Runs next loop for each letter of alphabet
    let letterAlpha = alphabet.charAt(i);
    let letterFrequency = 0; // Resets letterFrequency
    for (let j = 0; j <= string.length; j++) { // Searches string for same letter as i
      let letterString = string.charAt(j);
      if (letterAlpha === letterString) { // If letters match
        letterFrequency++ // ... add 1 to the frequency
      } else if (j === string.length) { // If the last letter in string has been searched
        if (letterFrequency > 0) { // ... and letterFrequency is greater than zero
          console.log(`The letter ${letterAlpha} appears ${letterFrequency} times.`) // print frequency
        } else {
          break; // Go back to first 'for' loop
        }
      }
    }
  }
}

getFrequency('I want taco bell')

    /* RETURNS ...

    In the string "I WANT TACO BELL:"
    The letter a appears 2 times.
    The letter b appears 1 times.
    The letter c appears 1 times.
    The letter e appears 1 times.
    The letter l appears 2 times.
    The letter n appears 1 times.
    The letter o appears 1 times.
    The letter t appears 2 times.
    The letter w appears 1 times.

    ... */