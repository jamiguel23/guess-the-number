'use strict'

// console.log('hello world')

// let num = Math.floor(Math.random() * 11);

let num = Math.floor(Math.random() * 10) + 1;
// let num = 2




function guessNum() {


  let guess = prompt("guess a number between 1 and 10");
  let counter = 0
  let gotIt = false

  while (!gotIt) {
    if (num == guess) {
      if (counter == 0) {
        counter++
        alert("Got it! it took you " + counter + " time to get it right");
        gotIt = true
      } else {

        counter++
        alert("Got it! it took you " + counter + " times to get it right");
        gotIt = true
      }
    } else if (guess > num) {
      counter++
      // alert('Too high! Guess again.')
      guess = prompt("Too high. Guess again.");
    } else if (guess < num) {
      counter++
      // alert('Too low! Guess again.')
      guess = prompt("Too low! Guess again.");
    }

  }



  // Commented out code using a for loop

  // console.log(num)

  // let tries = Infinity
  // let count = Infinity
  // let attempts = 0

  // for (let i = 0; i < tries; i++) {
  //   let guess = prompt("guess a number between 1 and 10");

  //   if (num == guess) {
  //     attempts++
  //     // console.log(attempts)
  //     alert("Got it! It took you " + attempts + " attempts");
  //     break

  //   } else if(guess> num) {

  //     if(count == 2){
  //       attempts++
  //       count--
  //       // console.log(attempts)
  //       alert('guess is too HIGH. you have ' + count + ' try remaining')
  //     } else{

  //       attempts++
  //       count--
  //       // console.log(attempts)
  //       alert('guess is too HIGH. you have ' + count + ' tries remaining')
  //     }

  //   }else if(guess< num) {
  //     if(count == 2){

  //       attempts++
  //       count--
  //       // console.log(attempts)
  //       alert('guess is too LOW. you have ' + count + ' try remaining')

  //     } else{

  //       attempts++
  //       count--
  //       // console.log(attempts)
  //       alert('guess is too HIGH. you have ' + count + ' tries remaining')

  //     }

  //   } 

  // if(attempts === tries) {
  //   alert("Sorry! Ran out of tries.  You guessed " + guess + " and the number was " + num);
  // }
  // }
}

guessNum()
