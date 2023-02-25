let quote  = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

//Api url
const url = "https://api.quotable.io/random";


let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
    });
};

//Adding click event on the get quote button and then calling line 7 function inside the button addEventListener
btn.addEventListener("click", getQuote);
