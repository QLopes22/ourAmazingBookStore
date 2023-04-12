const bookCard = document.querySelector(".book-container")

let currentUserID =  window.location.href.slice(-1)
let bookList = []


function fetchBooks() {
    fetch(`http://127.0.0.1:3000/API/Users/${currentUserID}`)
    .then(response => response.json())
    .then(data =>
        {bookList.push(data.favorites)
        console.log(bookList)

        bookList.map((bookname => 
            {console.log(bookname)
                for (let i = 0; i < bookname.length; i+=2) {
                    console.log(bookname[i]);
                    let newDiv = document.createElement("div")
                    newDiv.innerHTML =
            `<div class="card" style="width: 18rem;">
            <img src="/book_images/${bookname[i+1]}.jpeg" class="card-img-top" alt="${bookname[i]} covertart">
            <div class="card-body">
            <p class="card-text">${bookname[i]}</p>
            <a href="#"><button>Read More</button></a>
            <a href="#"><button>Favorite</button></a>
            </div>
            </div>`
            bookCard.appendChild(newDiv)
                }
            
            }))
            // .join('')
        }
)}
fetchBooks()
console.log(bookList)
    

//         bookCard.innerHTML = data.map((bookname => {
//             return `<div class="card" style="width: 18rem;">
//             <img src="/book_images/${bookname.id}.jpeg" class="card-img-top" alt="${bookname.title} covertart">
//             <div class="card-body">
//             <p class="card-text">${bookname.title}</p>
//             <a href="#"><button>Read More</button></a>
//             <a href="#"><button>Favorite</button></a>
//             </div>
//             </div>`
//             })).join('')
// )}
// fetchBooks()