import runGame from '../index.js';
import { getRandom } from '../utils.js';

const purposeOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

const taskForPrimeGame = () => {
  const randomNumber = getRandom(100);
  const question = randomNumber;
  const result = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, result];
};

const primeGame = () => {
  runGame(purposeOfPrimeGame, taskForPrimeGame);
};
export default primeGame;
