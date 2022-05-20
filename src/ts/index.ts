import '../style.scss';
import { generateHelloScreen } from './generate-hello-screen';

type cardObj = {
  name: string;
  text: string;
  img: string;
  suit: string;
};

type gameApp = {
  userTimeSekMin: number[];
  cardsForCurrentGame: (cardObj | string)[];
  userCards: string[];
  userTargets: number[];
  guessedPairs: string[];
  attempts: number;
  commonDelay: number;
  cardDisplayTime: number;
  cardDisplayTimeDelay: number;
  level?: string;
  delay?: number;
  stopwatch?: number;
  age?: string;
};

declare global {
  interface Window {
    app: gameApp;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = {
    userTimeSekMin: [0, 0],
    cardsForCurrentGame: [],
    userCards: [],
    userTargets: [],
    guessedPairs: [],
    attempts: 0,
    commonDelay: 400,
    cardDisplayTime: 5000,
    cardDisplayTimeDelay: 1000,
  };

  const screenContainer = document.querySelector(
    '.screen-container'
  ) as HTMLDivElement;
  generateHelloScreen(screenContainer);
});
