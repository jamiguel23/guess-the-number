'use strict'

console.log('hello world')

let num = Math.floor(Math.random() * 11);

let guess = prompt("guess a number between 1 and 10");

if (num == guess) {
  alert("Got it!");
} else {
  alert("Sorry!  You guessed " + guess + " and the number was " + num);
}
