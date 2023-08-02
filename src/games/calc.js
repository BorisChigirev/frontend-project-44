import runGame from '../index.js';
import { getRandom } from '../utils.js';

const purposeOfCalcGame = 'What is the result of the expression?';
const signs = ['+', '-', '*'];

const calculatingNumbers = (randomNumber1, randomSign, randomNumber2) => {
  let answer;
  if (randomSign === signs[0]) {
    answer = randomNumber1 + randomNumber2;
  } else if (randomSign === signs[1]) {
    answer = randomNumber1 - randomNumber2;
  } else {
    answer = randomNumber1 * randomNumber2;
  }
  return answer;
};

const taskForCalcGame = () => {
  const randomNumber1 = getRandom(10);
  const randomNumber2 = getRandom(10);
  const randomSign = signs[getRandom(signs.length - 1)];
  const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;
  const answer = calculatingNumbers(randomNumber1, randomSign, randomNumber2);
  return [question, String(answer)];
};

export default () => {
  runGame(purposeOfCalcGame, taskForCalcGame);
};
