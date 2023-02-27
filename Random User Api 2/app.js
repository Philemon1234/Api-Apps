let resultsContainer = document.getElementById("results");
let getUserBtn = document.getElementById("btn");

let apiUrl = "https://randomuser.me/api/";

async function getRandomUser() {

    await fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let list = data.results;

            for (let i = 0; i < list.length; i++) {
                // console.log(list[i]);


                // console.log(list[i].dob.age);
                // console.log(list[i].name.first);
                // console.log(list[i].name.last);
                // console.log(list[i].location.street.name);
                // console.log(list[i].location.coordinates.latitude);
                // console.log(list[i].location.coordinates.longitude);
                // console.log(list[i].location.street.number);
                // console.log(list[i].location.postcode);
                // console.log(list[i].location.country);
                // console.log(list[i].location.state);
                // console.log(list[i].location.city);
                // console.log(list[i].picture.large);
                // console.log(list[i].gender);
                // console.log(list[i].phone);
                // console.log(list[i].cell);

                resultsContainer.innerHTML = `
        <div class="imgBx">
        <img src="${list[i].picture.large}" alt="">
        </div>
            <div class="content">
              <div class="details">
              <h2>${list[i].name.first} ${list[i].name.last}, ${list[i].dob.age}years ${list[i].gender}</h2>
            <div class="info-container">
                <div class="info">
                    <div class="sub-info">
                        <h4>Street Address</h4>
                        <h5>${list[i].location.street.number}</h5>
                    </div>

                    <div class="sub-info">
                        <h4>Postcode</h4>
                        <h5>${list[i].location.postcode}</h5>
                    </div>

                    <div class="sub-info">
                        <h4>Street Name</h4>
                        <h5>${list[i].location.street.name}</h5>
                    </div>
                </div>

                <div class="loction">
                    <p>${list[i].location.country} ${list[i].location.city}, ${list[i].location.state}</p>
                </div>

                <div class="contact">
                  <p><i class="fa fa-phone"></i> ${list[i].phone}</p>
                  <p><i class="fa fa-mobile"></i> ${list[i].cell}</p>
                </div>

                <div class="info">
                    <div class="sub-info">
                        <h4>Latitude</h4>
                        <h5>${list[i].location.coordinates.longitude}</h5>
                    </div>

                    <div class="sub-info">
                        <h4>Longitude</h4>
                        <h5>${list[i].location.coordinates.longitude}</h5>
                    </div>
                </div>

                        <span class="email">${list[i].email}</span>
            </div>
        </div>
    </div>
        `
            }
        })
}


getUserBtn.addEventListener("click", getRandomUser)
