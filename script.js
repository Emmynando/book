'use strict';


class Book {
    #title;
    #author;
    #isbn;
    constructor(title, author, isbn){
        const btn = document.querySelector('#btn');
        this.#title = document.querySelector('#title');
        this.#author = document.querySelector('#author');
        this.#isbn  = document.querySelector('#isbn');
        btn.addEventListener('click', this.userInput.bind(this));
    }
    userInput(e){    
        e.preventDefault();
        // getting user's input
        const title = this.#title.value;
        const author = this.#author.value;
        const isbn = this.#isbn.value;
        this.displayBook(title, author, isbn);
        // title = author = isbn = " ";
    }
    displayBook(title, author, isbn){
        const bookList = document.querySelector('.book-list');
        const template = document.querySelector('.book-template');
        
        // clone new row using template
        const row = template.content.cloneNode(true);

        // fill each column in the row with the right content

        row.querySelector('.title').innerText = title;
        row.querySelector('.author').innerText = author;
        row.querySelector('.isbn').innerText = isbn;
        row.querySelector('.dell').textContent = "X";

        bookList.appendChild(row);

        // creating confirmation message
        const removeHide = document.querySelector('.confirmation');
        removeHide.style.display = "block";
        setTimeout(() => removeHide.style.display = "none", 3000);
        this.bookStorage(title, author, isbn);
        
    }

        // local storage
    bookStorage(title, author, isbn){
        // let books = [];
        let localS = JSON.stringify([title, author, isbn]);
        localStorage.setItem('localS', localS);

        if(localStorage.getItem('localS') === null){
            return localS = [];
        }else{
            localS = JSON.parse(localStorage.getItem('books'));
        }
        return localS;
        // write(localS);
        }

             
    
};

const book = new Book();

// create handle using UI
// store Class handle
// add book
// remove book