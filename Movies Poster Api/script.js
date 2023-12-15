let pic_result = document.getElementById('pic_result');
let pic_btn = document.getElementById('pic_btn');
let btn = document.querySelector('.btn');


pic_btn.addEventListener("click", generateImage);

async function generateImage() {
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '32153c7436msh8bdc8652a95fa82p185d07jsn3725db48b493',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

await fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
.then(response => response.json())
.then(response => {
    const list = response;
    list.map((item) => {
    pic_result.innerHTML += `<img src="${item.image}"/>`
    // console.log(item.image);
    })
})

btn.classList.add("disabled");

// .catch(err => console.log.error(err));
}




























