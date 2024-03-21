document.addEventListener('DOMContentLoaded', function() {
    const wordDisplay = document.getElementById('wordDisplay');
    const polishFirstBtn = document.getElementById('polishFirst');
    const spanishFirstBtn = document.getElementById('spanishFirst');
    const randomOrderBtn = document.getElementById('randomOrder');

    const vocabulary = [
        { polish: "kot", spanish: "gato" },
        { polish: "pies", spanish: "perro" },
        // Add more pairs here
    ];

    let currentWordIndex = 0;
    let displayPolishFirst = true;
    let randomOrder = false;

    const showWord = () => {
        if (randomOrder) displayPolishFirst = Math.random() < 0.5;
        const wordPair = vocabulary[currentWordIndex];
        wordDisplay.textContent = displayPolishFirst ? wordPair.polish : wordPair.spanish;
    };

    const toggleWord = () => {
        const wordPair = vocabulary[currentWordIndex];
        wordDisplay.textContent = wordDisplay.textContent === wordPair.polish ? wordPair.spanish : wordPair.polish;
    };

    polishFirstBtn.addEventListener('click', () => {
        displayPolishFirst = true;
        randomOrder = false;
        showWord();
    });

    spanishFirstBtn.addEventListener('click', () => {
        displayPolishFirst = false;
        randomOrder = false;
        showWord();
    });

    randomOrderBtn.addEventListener('click', () => {
        randomOrder = true;
        showWord();
    });

    wordDisplay.addEventListener('click', () => {
        if (vocabulary.length === 0) return;
        toggleWord();
        currentWordIndex = (currentWordIndex + 1) % vocabulary.length;
    });

    // Initialize the first word
    showWord();
});
