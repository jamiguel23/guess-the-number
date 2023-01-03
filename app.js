'use strict'

// console.log('hello world')

// let num = Math.floor(Math.random() * 11);

let num = Math.floor(Math.random() * 10) +1;




function guessNum() {

  let tries = 3
  console.log(num)

  for (let i = 0; i < tries; i++) {
    let guess = prompt("guess a number between 1 and 10");
    let attempts = 1

    if (num == guess) {
      attempts++
      console.log(attempts)
      alert("Got it! It took you " + attempts + " attempts");
      break
    } else if( guess> num) {

    } else {
      alert("Sorry!  You guessed " + guess + " and the number was " + num);
    }
  }
}

guessNum()
