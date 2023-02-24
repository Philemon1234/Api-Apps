let memeResults = document.querySelector(".meme-results");
let memeBtn = document.getElementById("meme-btn");

memeBtn.addEventListener("click", getMemes);

async function getMemes() {
   await fetch("https://meme-api.com/gimme")
        .then(response => response.json())
        .then(data => {
            memeResults.innerHTML = `
            <img class="card-meme-img"
            src="${data.url}" alt="">
             <h2 id="meme-title">${data.title}</h2>
        `
        })
}