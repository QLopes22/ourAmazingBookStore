// const buttonClick = document.getElementById("show_books")
const bookCard = document.querySelector(".book-container")

let thisUser = window.location.href.slice(-1)
console.log(thisUser)

 function fetchBooks() {
    fetch(`http://127.0.0.1:3000/API/Books`)
    .then(response => response.json())
    .then(data => 
        bookCard.innerHTML = data.map((bookname => {
            return `<div class="card" style="width: 18rem;">
            <img src="/book_images/${bookname.id}.jpeg" class="card-img-top" alt="${bookname.title} covertart">
            <div class="card-body">
            <p class="card-text">${bookname.title}</p>
            <a href="#"><button>Read More</button></a>
            <button><a href="http://127.0.0.1:3000/addToFavorites/${bookname.id}/${thisUser}">Favorite</a></button>
            </div>
            </div>`
            })).join('')
)}
let test = () => {
 console.log("hello")
}
fetchBooks()

// let favButton = document.getElementById("addToFavorites")

// favButton.addEventListener("click", () => {
   
// }

// )

