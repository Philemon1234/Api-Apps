const cardWrapper = document.querySelector(".cards-wrapper");


async function getGames() {

   await fetch("https://www.freetogame.com/api/games")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}


getGames();