import runGame from '../index.js';
import { getRandom, getRandomRange } from '../utils.js';

const purposeOfProgressionGame = 'What number is missing in the progression?';

const getProgression = (randomInitialNumber, randomStepNumber, randomLengthFromRange) => {
  const progression = [];
  let nextNumber = randomInitialNumber + randomStepNumber;
  for (let i = 1; i < randomLengthFromRange - 1; i += 1) {
    nextNumber += randomStepNumber;
    progression.push(nextNumber);
  }
  return progression;
};

const taskForProgressionGame = () => {
  const randomInitialNumber = getRandom(100);
  const randomStepNumber = getRandomRange(1, 10);
  const randomLengthFromRange = getRandomRange(5, 10);

  const progression = getProgression(randomInitialNumber, randomStepNumber, randomLengthFromRange);

  const lastIndexOfProgression = progression.length - 1;
  const randomNumberFromArr = getRandomRange(0, lastIndexOfProgression);
  const removedNumber = progression[randomNumberFromArr];
  progression[randomNumberFromArr] = '..';

  const question = progression.join(' ');
  const result = removedNumber.toString();

  return [question, result];
};

const progressionGame = () => {
  runGame(purposeOfProgressionGame, taskForProgressionGame);
};
export default progressionGame;
