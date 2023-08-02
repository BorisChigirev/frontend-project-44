import runGame from '../index.js';
import { getRandom } from '../utils.js';

const gcdGame = () => {
  const purposeOfGcdGame = 'Find the greatest common divisor of given numbers.';

  const taskForGcdGame = () => {
    const randomNumber1 = getRandom(100);
    const randomNumber2 = getRandom(100);

    const question = `${randomNumber1} ${randomNumber2}`;

    const getGcd = (num1, num2) => {
      if (num1 % num2 === 0) {
        return num2;
      }

      return getGcd(num2, num1 % num2);
    };

    const result = getGcd(randomNumber1, randomNumber2).toString();

    return [question, result];
  };
  runGame(purposeOfGcdGame, taskForGcdGame);
};
export default gcdGame;
