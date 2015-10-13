let rockPaperScissors = (rounds) => {
  let rounds = rounds || 3;
  let throws = ['rock', 'paper', 'scissors'];
  let result = [];
  let round = [];
  let resultBuilder = (rds) => {
    if(rds === 0){
      result.push(round.slice());
      return;
    }
    throws.forEach( item => {
      round.push(item);
      resultBuilder(rds - 1);
      round.pop();
    });
  };
  resultBuilder(rounds);
  return result;
};