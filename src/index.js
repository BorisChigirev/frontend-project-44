import readlineSync from 'readline-sync';

const runGame = (purposeOfGame, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(purposeOfGame);

  for (let i = 0; i < 3; i += 1) {
    const [questionAndResult, rightAnswer] = task();

    console.log(`Question: ${questionAndResult}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${name}!`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
};
export default runGame;
