let searchInput = document.querySelector(".search_input");
let searchForm = document.querySelector(".search_form");
let container = document.querySelector(".container");
let errorMessageBox = document.querySelector(".error_message");
let errorMessageBtn = document.querySelector(".close_error");
let errorText = document.querySelector(".error_text");

// getFood();




searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let word = searchInput.value;
    searchInput.value = "";
    // console.log(word);

    getFood(word);
})

errorMessageBtn.addEventListener("click", function() {
    errorMessageBox.classList.remove("active");
})

async function getFood(searchedWord) {
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedWord}`);

    let data = await res.json();

    // console.log(data.meals);

    container.innerHTML = `
    <h2 class="food_title">${searchedWord}</h2>
    <div class="wrapper">
        <div class="food_image">
            <img src=${data.meals[0].strMealThumb} alt="Food image">
        </div>
        <div class="text_container">
            <p>
                <span>Category: <small>${data.meals[0].strMeal}</small></span>
            </p>

            <p>
                <span>Category: <small>${data.meals[0].strCategory}</small></span>
            </p>

            <p>
                <span>Area: <small>${data.meals[0].strArea}</small></span>
            </p>
            <p>
                <span>Instructions:
                    <small>${data.meals[0].strInstructions}</small>
                </span>
            </p>

            <p>
            <span><a class="more_link" target="_blank"
                            href=${data.meals[0].strSource}>Read more...</a></span>
        </p>
            <p>
                <span>YouTube: <small><a target="_blank"
                            href=${data.meals[0].strYoutube}>${data.meals[0].strYoutube}</a></small></span>
            </p>
        </div>
    </div>
    `
    } catch(err) {
        // alert (`Sorry, ${searchedWord} not found!, try another one`);
        errorMessageBox.classList.add("active");
        errorText.innerHTML = `Sorry, ${searchedWord} not found, try another one!`;
    }
}