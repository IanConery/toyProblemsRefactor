/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/


var rockPaperScissors = function (rounds) {
  var rounds = rounds || 3;
  var throws = ['rock', 'paper', 'scissors'];
  var result = [];
  var round = [];
  var resultBuilder = function(rds){
    if(rds === 0){
      result.push(round.slice());
      return;
    }
    throws.forEach(function(item){
      round.push(item);
      resultBuilder(rds - 1);
      round.pop();
    });
  };
  resultBuilder(rounds);
  return result;
};


console.log(rockPaperScissors());
