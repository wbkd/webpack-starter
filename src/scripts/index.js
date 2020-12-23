import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

///структура данных

let questions = [{
    category: 'Охота и рыбалка',
    question: 'Карась или щука?',
    image: 'some image',
    responses: [{
        id: 'asd',
        text: 'str2',
        correct: false
      },
      {
        id: 'sdf',
        text: 'str1',
        correct: true
      },
      {
        id: 'wer',
        text: 'str3',
        correct: false
      },
    ]
  },
  {
    category: 'Фотография',
    question: 'Плёнка или цифра?',
    image: 'some image',
    responses: [{
        id: 'asd',
        text: 'sertr2',
        correct: false
      },
      {
        id: 'sdf',
        text: 'stref1',
        correct: true
      },
      {
        id: 'wer',
        text: 'sewftr3',
        correct: false
      },
    ]
  },
];

// Version 1

// function getAllquestions() {
//   return qustions.map(question => getQuestionHtml(question)).join('');
// }

// function getQuestionHtml(question) {
//   return `<div class="qustion__container">
//     <div class="question__title">${question.category}</div>     
//   </div>`;
// }

// const app = document.querySelector('.app');

// function render() {
//   app.innerHTML = getQuestionHtml(questions[1]);
// }

// render();

// console.log(questions.join());

//Version 2
function getQuestionHtml(q) {
  return `<div class="questions">
    <div class="question__category"> Категория: ${q.category}</div>
    <div class="question__title">${q.question}</div>
    <div class="question__answer"">
      <div class="answerA">A</div>
      <div class="answerB">B</div>
      <div class="answerC">C</div>
      <div class="answerD">D</div>
    </div>     
  </div>`;
}

function getAllQuestions() {
  return questions.map(q => getQuestionHtml(q)).join('');
}
const APP_ELEMENT = document.querySelector('.app');

function main() {
  APP_ELEMENT.innerHTML = getAllQuestions();
}

main();