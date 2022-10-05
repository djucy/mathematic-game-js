import '../sass/main.scss';
import image from '../images/win.jpg';
import { refs } from './refs';
import numbers from '../numbers.json';
import toggleHidden from './toggleHidden';

refs.heroButton.addEventListener('click', startChalenge);
refs.warningButton.addEventListener('click', backToChallenge);
refs.resultButton.addEventListener('click', checkAnswer);

const bodyStyle = document.body.style;
let currentQuestion = 0;

function startChalenge() {
  toggleHidden(refs.heroContainer, refs.chalengeBox);
  challengeQuestion();
}

function challengeQuestion() {
  refs.question.textContent = `How much is ${numbers[currentQuestion].numberA} + ${numbers[currentQuestion].numberB}?`;
  refs.answer.focus();
}

function checkAnswer() {
  if (refs.answer.value === numbers[currentQuestion].result) {
    refs.answer.value = '';

    if (numbers.length === currentQuestion + 1) {
      currentQuestion = 0;
      bodyStyle.backgroundImage = `url(${image})`;
      bodyStyle.backgroundPosition = 'center';
      bodyStyle.backgroundSize = 'cover';
      bodyStyle.backgroundRepeat = 'no-repeat';
      refs.chalengeBox.classList.add('hidden');
    }

    currentQuestion = currentQuestion + 1;
    challengeQuestion();
  } else {
    toggleHidden(refs.chalengeBox, refs.warningBox);
  }
}
function backToChallenge() {
  toggleHidden(refs.warningBox, refs.chalengeBox);
  refs.answer.value = '';
  refs.answer.focus();
}
