const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                displayResults(data.meals);
            })
            .catch(error => console.error('Error fetching data:', error));
    }
});

function displayResults(meals) {
    resultsDiv.innerHTML = '';

    for (let i = 0; i < Math.min(5, meals.length); i++) {
        const meal = meals[i];
    
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('meal');

    
        mealDiv.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        `;

        resultsDiv.appendChild(mealDiv);
    }
}