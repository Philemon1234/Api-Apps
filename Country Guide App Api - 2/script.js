let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://www.omdbapi.com/?s=${countryName}&page=1&apikey=db934a93`;
    // console.log(finalURL);
    fetch(finalURL)
    .then(response => response.json())
    .then(data => {


            let list = data.Search;

            for(let i = 0; i < list.length; i++) {
                console.log(list[i]);

                result.innerHTML = `
                <img src="${list[i].Poster}" class="flag-img">
                <h2>${list[i].Title}</h2>
            `
            }

           

        

    }).catch(() =>{})
    countryInp.value = "";
});