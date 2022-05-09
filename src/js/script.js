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

  const screenContainer = document.querySelector('.screen-container');

  generateHelloScreen(screenContainer);
});