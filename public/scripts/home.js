const inputEl = document.querySelector("#username")
const login = document.querySelector("#login_button")

function fetchUsers() {
    fetch(`http://127.0.0.1:3000/API/Users`)
    .then(response => response.json())
    .then(data => inputEl.innerHTML = data.map((usersNames => {
            return `<option value="${usersNames.id}">${usersNames.firstName} - ${usersNames.userName}</option>`
            })).join('')
)};
fetchUsers()

const loginClick = () => {
    console.log(inputEl.value)
    location.href = `landing/${inputEl.value}`
}

login.addEventListener("click", loginClick)