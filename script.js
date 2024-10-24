// Modal handling functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Translator functionality
const translationMap = {
    A: 'A', B: 'Ba', C: 'Ce', D: 'Da', E: 'E', F: 'Fa', G: 'G', H: 'H',
    I: 'I', J: 'J', K: 'K', L: 'L', M: 'M', N: 'N', O: 'Uo', P: 'P',
    Q: 'Q', R: 'R', S: 'S', T: 'T', U: 'U', V: 'Va', W: 'W', X: 'X',
    Y: 'Ya', Z: 'Zo'
};

function translateText() {
    const inputText = document.getElementById('inputText').value;
    let translatedText = inputText.split('').map(letter => {
        let upperLetter = letter.toUpperCase();
        return translationMap[upperLetter] || letter;
    }).join('');
    document.getElementById('outputText').innerText = translatedText;
}

// Test functionality
const englishWords = ['Cat', 'Dog', 'Bat', 'Education', 'At'];
let currentWord = '';
let score = 0;
let attempts = 0;

function translateToEH(word) {
    return word.split('').map(letter => translationMap[letter.toUpperCase()] || letter).join('');
}

function loadNewWord() {
    if (attempts >= 5) {
        alert('Test completed! Your score: ' + score);
        restartTest();
    } else {
        currentWord = englishWords[Math.floor(Math.random() * englishWords.length)];
        document.getElementById('wordToTranslate').innerText = `Translate: ${currentWord}`;
    }
}

function submitAnswer() {
    const userAnswer = document.getElementById('userAnswer').value;
    const correctTranslation = translateToEH(currentWord);
    if (userAnswer === correctTranslation) {
        score++;
    }
    attempts++;
    document.getElementById('score').innerText = score;
    loadNewWord();
}

function restartTest() {
    score = 0;
    attempts = 0;
    document.getElementById('score').innerText = score;
    loadNewWord();
}

// Initialize test on page load
window.onload = () => {
    loadNewWord();
};
