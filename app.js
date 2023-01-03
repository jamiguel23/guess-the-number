'use strict'

// console.log('hello world')

let num = Math.floor(Math.random() * 11);



function guessNum(){
  
  let tries = 3
  console.log(num)
  
  for(let i = 0; i < tries; i++){
    let guess = prompt("guess a number between 1 and 10");

    if (num == guess) {
      alert("Got it!");
    } else {
      alert("Sorry!  You guessed " + guess + " and the number was " + num);
    }
  }
}

guessNum()
