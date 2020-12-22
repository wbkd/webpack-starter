import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

///структура данных

let questions = [
  {
    category: 'Охота и рыбалка',
    question: 'Карась или щука?',
    imgage: 'some image',
		responses: [
			{id: 'asd', text: 'str2', correct: false},
			{id: 'sdf', text: 'str1', correct: true},
			{id: 'wer', text: 'str3', correct: false},
		]
  },
  {
    category: 'Фотография',
    question: 'Плёнка или цифра',
    imgage: 'some image',
		responses: [
			{id: 'asd', text: 'sertr2', correct: false},
			{id: 'sdf', text: 'stref1', correct: true},
			{id: 'wer', text: 'sewftr3', correct: false},
		]
  },
];


function getAllquestions() {
  return qustions.map(question => getQuestionHtml(question)).join('');
}

function getQuestionHtml(question) {
    return `<div class="qustion__container">
    <div class="question__title">${question.category}</div>     
  </div>`;
}

const app = document.querySelector('.app');

function render() {
  app.innerHTML = getQuestionHtml(questions[1]);
}

render();