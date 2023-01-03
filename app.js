'use strict'

// console.log('hello world')

// let num = Math.floor(Math.random() * 11);

let num = Math.floor(Math.random() * 10) +1;




function guessNum() {

  let tries = 3
  let count = 3
  // console.log(num)
  let attempts = 0

  for (let i = 0; i < tries; i++) {
    let guess = prompt("guess a number between 1 and 10, you have 3 tries");

    if (num == guess) {
      attempts++
      // console.log(attempts)
      alert("Got it! It took you " + attempts + " attempts");
      break

    } else if(guess> num) {

      if(count == 2){
        attempts++
        count--
        // console.log(attempts)
        alert('guess is too HIGH. you have ' + count + ' try remaining')
      } else{

        attempts++
        count--
        // console.log(attempts)
        alert('guess is too HIGH. you have ' + count + ' tries remaining')
      }

    }else if(guess< num) {
      if(count == 2){

        attempts++
        count--
        // console.log(attempts)
        alert('guess is too LOW. you have ' + count + ' try remaining')

      } else{

        attempts++
        count--
        // console.log(attempts)
        alert('guess is too HIGH. you have ' + count + ' tries remaining')

      }

    } 
    
    if(attempts === tries) {
      alert("Sorry! Ran out of tries.  You guessed " + guess + " and the number was " + num);
    }
  }
}

guessNum()
