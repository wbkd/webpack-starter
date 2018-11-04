import '../styles/index.scss';
import words from './words';

const secret = words[Math.floor((words.length-1)*Math.random())];

document.addEventListener('DOMContentLoaded', function() {
    captureInput();
    repaint();
    setFocus()
}, false);

const placeholder = '_';
const guesses = {};
const chances = 6;

function setFocus() {
    document.getElementById('guess').focus();
}

function captureInput() {
    document.getElementById('hangman').addEventListener('submit', function(e) {
        e.preventDefault();
        const guess = document.getElementById('guess');
        tryGuess(guess.value);
        guess.value = '';
    }, false);
}

const tryGuess = function(guess) {
    if (guess === undefined || guess.length !== 1) {
        return;
    }
    guesses[guess] = true;
    repaint();
}

function repaint() {
    const progress_ele = document.getElementById('progress');
    const progress = getProgress();
    const misses = getMisses();
    const chances_left = (chances - misses.length);
    const gallow_ascii = document.getElementById('gallow-' + chances_left).innerHTML;

    progress_ele.innerHTML = progress.join(' ');

    progress_ele.innerHTML += '\n\nMisses: ' + misses.join(', ');
    progress_ele.innerHTML += '\n\n' + gallow_ascii;

    if (progress.indexOf(placeholder) === -1) {
        finish('You won!');
    } else if (misses.length >= chances) {
        finish('You lost!');
    }
}

function getProgress() {
    const result = [];

    for (let i = 0; i < secret.length; i++) {
    const char = secret.charAt(i);
        result.push(char in guesses ? char : placeholder);
    }

    return result;
};

function getMisses() {
    const result = [];

    for (const guess in guesses) {
      if (guesses.hasOwnProperty(guess) && secret.indexOf(guess) === -1) {
        result.push(guess);
      }
    }
    return result;
};

function finish(msg) {
    document.getElementById('hangman').innerHTML = msg;
}
