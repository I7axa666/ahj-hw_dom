import GoblinPosition from './goblinPosition';

document.addEventListener('DOMContentLoaded', () => {
  const goblinPosition = new GoblinPosition(document.querySelector('.table'));
  goblinPosition.setPosition();
  setInterval(() => {
    goblinPosition.changePosition();
  }, 1000);
});
