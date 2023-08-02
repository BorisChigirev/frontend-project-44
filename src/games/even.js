import runGame from '../index.js';
import { getRandom } from '../utils.js';

const purposeOfEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const taskForEvenGame = () => {
  const randomNumber = getRandom(100);
  const question = randomNumber;
  const result = isEven(randomNumber) ? 'yes' : 'no';

  return [question, result];
};

const evenGame = () => {
  runGame(purposeOfEvenGame, taskForEvenGame);
};
export default evenGame;
