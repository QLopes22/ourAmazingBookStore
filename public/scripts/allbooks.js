// const buttonClick = document.getElementById("show_books")
const bookCard = document.querySelector(".card-container")

 function fetchBooks() {
    fetch(`http://127.0.0.1:3000/API/Books`)
    .then(response => response.json())
    .then(data => 
        bookCard.innerHTML = data.map((bookname => {
            return `<div class="card" style="width: 18rem;">
            <img src="/book_images/${bookname.id}.jpeg" class="card-img-top" alt="${bookname.title}">
            <div class="card-body">
            <h5 class="card-title">${bookname.title}</h5>
            </div>
            <div class="card-body">
            <a href="/bookinfo/${bookname.id}" class="card-link">Learn more</a>
            </div>
            </div>`
            })).join('')
)}
fetchBooks()