const questions = [
    "Какова температура на улице? (в градусах Цельсия)",
    "Какой уровень осадков? (0 - нет, 1 - немного, 2 - много)",
    "Какова скорость ветра? (в метрах в секунду)",
];

let temperature;
let precipitation;
let windSpeed;

let currentQuestion = 0;

document.getElementById("question").innerText = questions[currentQuestion];

document.getElementById("next-button").addEventListener("click", () => {
    const answer = parseInt(document.getElementById("answer").value);
    document.getElementById("answer").value = '';

    if (currentQuestion === 0) {
        temperature = answer;
        currentQuestion++;
    } else if (currentQuestion === 1) {
        precipitation = answer;
        currentQuestion++;
    } else if (currentQuestion === 2) {
        windSpeed = answer;
        currentQuestion++;
    }

    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion];
    } else {
        displayRecommendations();
    }
});

function displayRecommendations() {
    document.getElementById("question-container").classList.add("hidden");
    const clothingList = document.getElementById("clothing-list");
    clothingList.innerHTML = ''; // Очистка предыдущих результатов

    // Рекомендации по одежде
    if (temperature < 0) {
        clothingList.innerHTML += "<li>Теплая зимняя куртка</li>";
        clothingList.innerHTML += "<li>Теплые перчатки</li>";
        clothingList.innerHTML += "<li>Шарф</li>";
        clothingList.innerHTML += "<li>Теплые брюки</li>";
        clothingList.innerHTML += "<li>Шапка</li>";
    } else if (temperature >= 0 && temperature < 10) {
        clothingList.innerHTML += "<li>Демисезонная куртка</li>";
        clothingList.innerHTML += "<li>Теплые перчатки</li>";
        clothingList.innerHTML += "<li>Шарф</li>";
        clothingList.innerHTML += "<li>Джинсы или теплые брюки</li>";
        clothingList.innerHTML += "<li>Шапка</li>";
    } else if (temperature >= 10 && temperature < 20) {
        clothingList.innerHTML += "<li>Легкая куртка или свитер</li>";
        clothingList.innerHTML += "<li>Легкие перчатки (по желанию)</li>";
        clothingList.innerHTML += "<li>Легкий шарф (по желанию)</li>";
        clothingList.innerHTML += "<li>Джинсы или легкие брюки</li>";
        clothingList.innerHTML += "<li>Бейсболка или панама</li>";
    } else {
        clothingList.innerHTML += "<li>Футболка или рубашка</li>";
        clothingList.innerHTML += "<li>Шорты или легкие брюки</li>";
        clothingList.innerHTML += "<li>Панама или кепка</li>";
    }

    if (precipitation > 0) {
        clothingList.innerHTML += "<li>Зонтик</li>";
        if (precipitation === 2) {
            clothingList.innerHTML += "<li>Лучше водонепроницаемая куртка</li>";
        }
    }

    if (windSpeed > 10) {
        clothingList.innerHTML += "<li>Ветровка или куртка с капюшоном</li>";
    }

    document.getElementById("result-container").classList.remove("hidden");
}

