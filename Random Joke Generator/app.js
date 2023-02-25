//selecting elements from html
let btn = document.getElementById("btn");
let joke = document.getElementById("joke");
let result = document.getElementById("result")


//listening button click event
btn.addEventListener("click", getJoke);


function getJoke() {
      result.style.opacity = "0";
        // alert("Hello World");
        // // fetching api
        fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then(response => response.json())
        .then(data => {

        //       // Adding api response to result container which is in html
              result.innerHTML = `
              <p class="joke" id="joke">${data.joke}</p>
              `;
              result.style.opacity = "1";
        })
}
