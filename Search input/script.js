const usercardTemplate = document.querySelector("[data-user-template]")

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    data.forEach(user => {
        // const card = usercardTemplate.content.cloneNode(true).children[0]
        console.log(user); 
    });
})