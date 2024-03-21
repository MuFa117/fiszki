document.addEventListener('DOMContentLoaded', function() {
    const wordDisplay = document.getElementById('wordDisplay');
    const translateButton = document.getElementById('translateButton');
    const modeRadios = document.querySelectorAll('input[name="mode"]');

    const vocabulary = [
        { polish: "kot", spanish: "gato" },
        { polish: "pies", spanish: "perro" },
        { polish: "pies", spanish: "perro" },
        { polish: "podrozowac", spanish: "viajar" },
        { polish: "spiewac", spanish: "cantar" },
        { polish: "dzwonic", spanish: "llamar" },
        { polish: "kolacjowac", spanish: "centar" },
        { polish: "pracowac", spanish: "trabajar" },
        { polish: "malowac", spanish: "pintar" },
        { polish: "gotowac", spanish: "cocinar" },
        { polish: "uczyc sie", spanish: "estudiar" },
        { polish: "tanczyc", spanish: "bailar" },
        { polish: "sniadaniowac", spanish: "desayunar" },
        { polish: "rozmawiac", spanish: "hablar" },
        { polish: "sluchac", spanish: "escuchar" },
        { polish: "czytac", spanish: "leer" },
        { polish: "ogladac", spanish: "ver" },
        { polish: "jesc", spanish: "comer" },
        { polish: "pic", spanish: "beber" },
        { polish: "biegac", spanish: "correr" },
        { polish: "sprzedawac", spanish: "vender" },
        { polish: "nabywac umiejetnosci", spanish: "aprender" },
        { polish: "miec powinnosc", spanish: "deber" },
        { polish: "zyc/mieszkac", spanish: "vivir" },
        { polish: "pisac", spanish: "escriber" },
        { polish: "uczeszczac/asystowac", spanish: "asistir" },
        { polish: "otwierac", spanish: "abrir" },
        { polish: "jak?", spanish: "¿Como ... ?" },
        { polish: "co?", spanish: "¿Qué ... ?" },
        { polish: "kto?", spanish: "¿Quién/es ... ?" },
        { polish: "kiedy?", spanish: "Cuándo ... ?" },
        { polish: "skad?", spanish: "¿De dónde ... ?" },
        { polish: "gdzie?", spanish: "¿Dónde ... ?" },
        { polish: "ktore?", spanish: "Cual/es ... ?" },
        { polish: "ile?", spanish: "¿Cuánto/a-s ... ?" },
        { polish: "dlaczego?", spanish: "¿Porque ... ?" },
        { polish: "data", spanish: "fecha" },
        { polish: "nazwisko", spanish: "apellido" },
        { polish: "imie", spanish: "nombre" },
        { polish: "pa/czesc", spanish: "adios" },
        { polish: "pozniej", spanish: "luego" },
        { polish: "biuro", spanish: "officina" },
        { polish: "restauracja", spanish: "restaurante" },
        { polish: "dom", spanish: "casa" },
        { polish: "dni", spanish: "dias" },
        { polish: "tydzien", spanish: "semana" },
        { polish: "minutos", spanish: "minuty" },
        { polish: "co tam", spanish: "que tal?" },
        { polish: "kazdy/a", spanish: "cada" },
        { polish: "chor", spanish: "coro" },
        { polish: "ale", spanish: "pero" },
        { polish: "ksiazka", spanish: "el libro" },
        { polish: "bulka z maslem / zjedzony chleb", spanish: "pan comido" },
        { polish: "samochod", spanish: "el coche" },
        { polish: "decyzja", spanish: "el decision" },
        { polish: "praca", spanish: "el trabajo" },
        { polish: "jedzenie", spanish: "la comida" },
        { polish: "dziadki", spanish: "abuelos" },
        { polish: "weekend", spanish: "el finde" },
        { polish: "szkolda", spanish: "la escuela" },
        { polish: "w lecie", spanish: "en verano" },
        { polish: "sasiad", spanish: "vecino" },
        { polish: "sprzatac", spanish: "limpia" },
        { polish: "z czegos / skads", spanish: "de" },
        { polish: "do", spanish: "a" },
        { polish: "w", spanish: "en" },
        { polish: "z kims/za pomoc", spanish: "con" },
        { polish: "dla/na/w-strone", spanish: "para" },
        { polish: "przez/z-winy", spanish: "por" },
        { polish: "i", spanish: "y" },
        { polish: "lub", spanish: "o" },
        { polish: "z kim?", spanish: "¿Con quién?" },
        { polish: "do kogo/czyj?", spanish: "¿De quién?" },
        { polish: "do kogo/czyj?", spanish: "¿A quién?" },
        { polish: "Dla kogo?", spanish: "¿Para quién?" },
        { polish: "Przez kogo?", spanish: "Por quién?" },
        { polish: "Z nikim", spanish: "Con nadie" },
        { polish: "gram", spanish: "juego" },
        { polish: "wolny czas", spanish: "tiempo libre" },
        { polish: "wolny czas", spanish: "tiempo libre" },
        { polish: "jest trudny", spanish: "es difcil" },
        { polish: "jest latwy", spanish: "es fácil" },
        { polish: "dzieci", spanish: "hijos" },
        { polish: "corka", spanish: "hija" },
        { polish: "syn", spanish: "hijo" },
        { polish: "rodzice", spanish: "los padres" },
        { polish: "mama", spanish: "la madre" },
        { polish: "tata", spanish: "el padre" },
        { polish: "jesc i pic", spanish: "tomar algo" },
        { polish: "sport", spanish: "el deporte" },
        { polish: "siatkowka", spanish: "el voleibol" },
        { polish: "czarny", spanish: "negro" },
        { polish: "niebieski", spanish: "azul" },
        { polish: "pomidor", spanish: "el tomate" },
        { polish: "usmazony", spanish: "frito" },
        { polish: "frytki", spanish: "patatas firtas" },
        { polish: "ziemniak", spanish: "la patata" },
        { polish: "winogrona", spanish: "las uvas" },
        { polish: "arbuz", spanish: "la sandia" },
        { polish: "jakie jeszcze?", spanish: "que mas?" },
        { polish: "mandarynka", spanish: "la mandarina" },
        { polish: "warzywo", spanish: "la verdura" },
        { polish: "owoce morza", spanish: "los mariscos" },
        { polish: "owoc", spanish: "la fruta" },
        { polish: "ryby", spanish: "el pescado" },
        { polish: "mieso", spanish: "la carne" },
        { polish: "bardzo smieszne", spanish: "mucha gracia" },
        { polish: "bardzo dziekuje", spanish: "muchas gracias" },
        { polish: "dzisiaj w nocy", spanish: "esta noche" },
        { polish: "dzisiaj popoludniu", spanish: "esta tarde" },
        { polish: "dzisiaj", spanish: "hoy" },
        { polish: "w tym roku", spanish: "este ano" },
        { polish: "w tym miesiacu", spanish: "este mes" },
        { polish: "w tym tygodniu", spanish: "esta semana" },
        // Add more pairs here
    ];
    
    let currentWordIndex = -1;
    let currentLanguage = 'polish';

    function getRandomWordIndex() {
        return Math.floor(Math.random() * vocabulary.length);
    }

    function updateWordDisplay() {
        currentWordIndex = getRandomWordIndex();
        let mode = document.querySelector('input[name="mode"]:checked').value;
        if (mode === 'random') {
            currentLanguage = Math.random() < 0.5 ? 'polish' : 'spanish';
        } else {
            currentLanguage = mode === 'plToEs' ? 'polish' : 'spanish';
        }
        wordDisplay.textContent = vocabulary[currentWordIndex][currentLanguage];
    }

    function translateWord() {
        const targetLanguage = currentLanguage === 'polish' ? 'spanish' : 'polish';
        wordDisplay.textContent = vocabulary[currentWordIndex][targetLanguage];
        currentLanguage = targetLanguage; // Update current language after translation
    }

    wordDisplay.addEventListener('click', updateWordDisplay);
    translateButton.addEventListener('click', translateWord);

    modeRadios.forEach(radio => radio.addEventListener('change', updateWordDisplay));

    // Initialize the app with a word
    updateWordDisplay();
});
