document.addEventListener('DOMContentLoaded', () => {
  window.app = {
    userTimeSekMin: [0, 0],
    cardsForCurrentGame: [],
    userCards: [],
    userTargets: [],
    guessedPairs: [],
    attempts: 0,
  };

  const screenContainer = document.querySelector('.screen-container');

  generateHelloScreen(screenContainer);
});
