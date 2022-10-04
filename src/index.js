import './sass/main.scss';
import image from './images/win.jpg';

const refs = {
  heroContainer: document.querySelector('.hero_container'),
  heroButton: document.querySelector('.hero_button'),
  chalengeBox: document.querySelector('.challenge_container'),
  question: document.querySelector('.challenge_question'),
  answer: document.querySelector('.challenge_answer'),
  warningBox: document.querySelector('.warning_container'),
  warningButton: document.querySelector('.warning_button'),
  resultButton: document.querySelector('.challenge_button'),
};
const bodyStyle = document.body.style;
const numbers = {
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
};
let result = '';
refs.heroButton.addEventListener('click', startChalenge);
refs.resultButton.addEventListener('click', checkAnswer);
refs.warningButton.addEventListener('click', backToChallenge);

function startChalenge() {
  console.log('click');

  toggleHidden(refs.heroContainer, refs.chalengeBox);
  refs.question.textContent = `How much is ${numbers['3']} + ${numbers['4']}?`;
  refs.answer.focus();
}

function checkAnswer() {
  result = refs.answer.value;
  if (numbers['3'] && numbers['4'] && result === '7') {
    nextQuestion(numbers['5'], numbers['7']);
  } else if (numbers['5'] && numbers['7'] && result === '12') {
    nextQuestion(numbers['6'], numbers['8']);
  } else if (numbers['6'] && numbers['8'] && result === '14') {
    bodyStyle.backgroundImage = `url(${image})`;
    bodyStyle.backgroundPosition = 'center';
    bodyStyle.backgroundSize = 'cover';
    bodyStyle.backgroundRepeat = 'no-repeat';
    refs.chalengeBox.classList.add('hidden');
  } else {
    toggleHidden(refs.chalengeBox, refs.warningBox);
  }
}
function backToChallenge() {
  toggleHidden(refs.warningBox, refs.chalengeBox);
  refs.answer.value = '';
}
function nextQuestion(numberA, numberB) {
  refs.answer.value = '';
  refs.answer.focus();
  refs.question.textContent = `How much is ${numberA} + ${numberB}?`;
}
function toggleHidden(hidden, visible) {
  hidden.classList.add('hidden');
  visible.classList.remove('hidden');
}
