const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c037e12da8630f7d8f8d8911c49349dd";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=c037e12da8630f7d8f8d8911c49349dd&query=";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

//Get Movies
getMovies(API_URL)
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
displayMovies(data.results);
    console.log(data.results);
}

function displayMovies(movies){
    main.innerHTML = ''
    movies.forEach((movie) => {
        const {title, poster_path, vote_average, overview} = movie
        const movieElement = document.createElement("div")
        movieElement.classList.add("movie")
        movieElement.innerHTML = `
            <img src="${IMAGE_PATH + poster_path}" alt="${title}"/>

            <div class="movie-info">
                <h3>${title}<h3>
                <span class="${getClassesByRating}">${vote_average}</span>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
            </div>
        `
        main.appendChild(movieElement);
    });
}

function getClassesByRating(rating) {
    if(rating >= 8) {
        return 'green'
    } else if(rating >= 5) {
        return 'orange'
    } else{
        return 'red'
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const searchValue = search.value;
    console.log(searchValue);
    if(searchValue && searchValue !==''){
        getMovies(SEARCH_URL+searchValue)
        searchValue = ''
    } else{
        window.location.reload();
    }
})