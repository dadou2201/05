'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//we can refract the repet code with the function like this
//const displayMessage=function(message){
//   document.querySelector('.message').textContent=message;
//} And replace "document.querySelector('.message').textContent = 'No number!';
//with the function" displayMessage('No number!');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when its no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }

  //when its the correct number
  else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number !!!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When its wrong (less and high together for no duplicate code)
  else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'To high!' : 'To low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game !';
      document.querySelector('.score').textContent = 0;
    }
  }

  //   //when the guess is high than the number
  //   else if (guess > number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High !';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the Game !';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //   //when the guess is low than the number
  //   else if (guess < number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low !';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the Game !';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
