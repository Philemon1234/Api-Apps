const usercardTemplate = document.querySelector("[data-user-template]")

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    data.forEach(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.document.querySelector("[data-header]");
        const body = card.document.querySelector("[data-body]");
        header.textContent = user.name;
        body.textContent = user.email;
        userCardContainer.append(card);
        // console.log(user); 
    });
})