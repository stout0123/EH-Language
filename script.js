const translationMap = {
    A: 'A', B: 'Ba', C: 'Ce', D: 'Da', E: 'E', F: 'Fa',
    G: 'G', H: 'H', I: 'I', J: 'J', K: 'K', L: 'L', M: 'M',
    N: 'N', O: 'Uo', P: 'P', Q: 'Q', R: 'R', S: 'S', T: 'T',
    U: 'U', V: 'Va', W: 'W', X: 'X', Y: 'Ya', Z: 'Zo'
};

const englishWords = [
    'Cat', 'Dog', 'Bat', 'Education', 'At', 'Apple', 'Banana', 'Orange', 'Grape', 'Peach',
    'Watermelon', 'Pineapple', 'Strawberry', 'Blueberry', 'Raspberry', 'Kiwi', 'Mango', 'Papaya', 
    'Lemon', 'Lime', 'Cherry', 'Coconut', 'Apricot', 'Melon', 'Berry', 'Nut', 'Peanut', 
    'Carrot', 'Potato', 'Onion', 'Garlic', 'Tomato', 'Cucumber', 'Lettuce', 'Spinach', 'Kale', 
    'Broccoli', 'Cauliflower', 'Eggplant', 'Bell Pepper', 'Zucchini', 'Pumpkin', 'Radish', 
    'Beetroot', 'Celery', 'Asparagus', 'Artichoke', 'Turnip', 'Squash', 'Mushroom', 
    'Corn', 'Rice', 'Wheat', 'Oats', 'Barley', 'Pasta', 'Bread', 'Cake', 'Cookie', 
    'Chocolate', 'Candy', 'Ice Cream', 'Cheese', 'Butter', 'Yogurt', 'Milk', 
    'Juice', 'Coffee', 'Tea', 'Beer', 'Wine', 'Whiskey', 'Vodka', 'Rum', 
    'Gin', 'Soda', 'Water', 'Breadstick', 'Biscuit', 'Cracker', 'Cereal', 
    'Pudding', 'Pie', 'Tart', 'Doughnut', 'Muffin', 'Scone', 'Brownie', 
    'Cupcake', 'Fudge', 'Pasta Salad', 'Potato Salad', 'Coleslaw', 
    'Chicken', 'Beef', 'Pork', 'Fish', 'Shrimp', 'Lobster', 'Crab', 
    'Sausage', 'Bacon', 'Ham', 'Turkey', 'Duck', 'Goose', 'Quail', 
    'Egg', 'Tofu', 'Nut Butter', 'Protein Bar', 'Chickpea', 
    'Lentil', 'Pea', 'Bean', 'Tofu', 'Seitan', 'Tempeh', 
    'Noodle', 'Spaghetti', 'Fettuccine', 'Ravioli', 'Lasagna', 
    'Sushi', 'Taco', 'Burrito', 'Nacho', 'Quesadilla', 
    'Sandwich', 'Wrap', 'Hot Dog', 'Hamburger', 'Pizza', 
    'Salad', 'Soup', 'Stew', 'Casserole', 'Stir Fry', 
    'Fried Rice', 'Queso', 'Chili', 'Salsa', 'Guacamole', 
    'Hummus', 'Dip', 'Dressing', 'Sauce', 'Gravy', 
    'Marinade', 'Relish', 'Chutney', 'Pickle', 'Jelly', 
    'Jam', 'Syrup', 'Honey', 'Mustard', 'Ketchup', 
    'Vinegar', 'Olive Oil', 'Vegetable Oil', 'Coconut Oil', 
    'Sesame Oil', 'Butter', 'Lard', 'Shortening', 'Margarine', 
    'Flour', 'Sugar', 'Salt', 'Pepper', 'Spice', 
    'Herb', 'Chili Flake', 'Garlic Powder', 'Onion Powder', 
    'Cinnamon', 'Nutmeg', 'Vanilla', 'Ginger', 'Curry', 
    'Basil', 'Oregano', 'Thyme', 'Rosemary', 'Parsley', 
    'Chives', 'Dill', 'Sage', 'Tarragon', 'Cilantro'
];

let currentWord = '';
let currentTranslation = '';
let score = 0;
let attempts = 0;

function showSection(section) {
    document.getElementById('translator').style.display = section === 'translator' ? 'block' : 'none';
    document.getElementById('testing').style.display = section === 'testing' ? 'block' : 'none';
    document.querySelectorAll('.section').forEach((sec) => {
        if (sec.id !== section) {
            sec.style.display = 'none';
        }
    });
}

function translateText() {
    let inputText = document.getElementById('inputText').value;
    let words = inputText.split(' ');
    let translatedText = words.map(word => {
        return word.split('').map(letter => {
            return translationMap[letter.toUpperCase()] || letter;
        }).join('');
    }).join(' ');

    document.getElementById('outputText').innerText = translatedText;
}

function translateToEH(word) {
    return word.split('').map(letter => translationMap[letter.toUpperCase()] || letter).join('');
}

function loadNewWord() {
    if (attempts >= 5) {
        document.getElementById('testArea').style.display = 'none';
        document.getElementById('scoreArea').style.display = 'block';
    } else {
        currentWord = englishWords[Math.floor(Math.random() * englishWords.length)];
        currentTranslation = translateToEH(currentWord);  
        document.getElementById('wordToTranslate').innerText = `Translate this word: ${currentWord}`;
        document.getElementById('userAnswer').value = '';
        document.getElementById('userAnswer').focus();
    }
}

function submitAnswer() {
    const userAnswer = document.getElementById('userAnswer').value;
    if (userAnswer === currentTranslation) {
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
    document.getElementById('testArea').style.display = 'block';
    document.getElementById('scoreArea').style.display = 'none';
    loadNewWord();
}

window.onload = loadNewWord;
