const buttonClick = document.getElementById("show_books")
const bookTitle = document.getElementById("booktitle")

buttonClick.addEventListener("click",() => {
    fetch(`http://127.0.0.1:3000/API/Books`)
    .then(response => response.json())
    .then(data => 
        bookTitle.innerHTML = data.map((bookname => {
            return bookname.title
            +`<br><img src="/book_images/${bookname.id}.jpeg" alt="${bookname.title} book cover">`})).join('<br>')
)})