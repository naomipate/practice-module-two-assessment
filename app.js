// API How to Use: https://randomuser.me/documentation#howto 
// API get single user: https://randomuser.me/api/
// API get multiple users: https://randomuser.me/api/?results=5
const apiUrl = "https://randomuser.me/api/";

// Card theme options
const cardThemes = ["blue", "orange", "red", "crimson"];

const numberOfUsers = document.querySelector("#numberOfUsers");

const form = document.querySelector("#fetch-users");

fetch(`${apiUrl}?results=10`)
.then((response) => response.json())
.then(displayProfilesList)
.catch(displayError);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(`${apiUrl}?results=${numberOfUsers.value}`)
    .then((response) => response.json())
    .then(displayProfilesList)
    .catch(displayError);
});

function displayProfilesList (APIresults) {
    console.log(APIresults);
    console.log(APIresults.results[0]);
    const main = document.querySelector("main");

    main.innerHTML = "";

    for (let i = 0; i < APIresults.results.length; i++) {
        //color theme
        const profileColorDiv = document.createElement("div");
        profileColorDiv.className = `card ${cardThemes[Math.floor(Math.random() * cardThemes.length)]}`;
        main.append(profileColorDiv);

        // banner
        const bannerDiv = document.createElement("div");
        bannerDiv.className = `banner`;
        profileColorDiv.append(bannerDiv);

        // profile pic
        const img = document.createElement("img");
        img.setAttribute('src', APIresults.results[i].picture.thumbnail);
        img.className = `profile-picture`;
        profileColorDiv.append(img);

        // full name
        const h2Name = document.createElement("h2");
        h2Name.className = `full-name`;
        h2Name.textContent = `${APIresults.results[i].name.first} ${APIresults.results[i].name.last}`
        profileColorDiv.append(h2Name);

        // user info
        const ulUserInfo = document.createElement("ul");
        ulUserInfo.className = `user-info`;
        profileColorDiv.append(ulUserInfo);

        // list user info

        // list user name
        const liUserName = document.createElement("li");
        liUserName.className = `username`;
        liUserName.innerHTML = `<i class="material-icons-outlined">account_circle</i>${APIresults.results[i].login.username}`;
        ulUserInfo.append(liUserName);

        // list user location
        const liUserLocation = document.createElement("li");
        liUserLocation.className = `location`;
        liUserLocation.innerHTML = `<i class="material-icons-outlined">explore</i>${APIresults.results[i].location.city}, ${APIresults.results[i].location.state}, ${APIresults.results[i].location.country}`;
        ulUserInfo.append(liUserLocation);

        // list user email
        const liUserEmail = document.createElement("li");
        liUserEmail.className = `email`;
        liUserEmail.innerHTML = `<i class="material-icons-outlined">mail</i>${APIresults.results[i].email}`;
        ulUserInfo.append(liUserEmail);

        // list user cellphone number
        const liUserCell = document.createElement("li");
        liUserCell.className = `cell`;
        liUserCell.innerHTML = `<i class="material-icons-outlined">smartphone</i>${APIresults.results[i].phone}`;
        ulUserInfo.append(liUserCell);

        // list user DOB
        const liUserDOB = document.createElement("li");
        liUserDOB.className = `dob`;
        const DOB = new Date(`${APIresults.results[i].dob.date}`);
        liUserDOB.innerHTML = `<i class="material-icons-outlined">cake</i>${DOB.toLocaleDateString()}`;
        ulUserInfo.append(liUserDOB);
    }
    numberOfUsers.value = "";
}

function displayError (error) {
    const mainError = document.querySelector("main");
    const pTag = document.createElement("p");
    pTag.textContent = "Something went wrong!";

    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = error;

    mainError.append(pTag, errorMessage);
}