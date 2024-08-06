const myLibrary = [];

function Book( title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = false;
    this.read = function(){
        return `${this.title}, ${this.pages}, Read?: ${this.readStatus}`;
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
    displayLibrary();
}

function displayLibrary(){
    const libraryDisplay = document.getElementById('libraryDisplay');
    libraryDisplay.innerHTML = ''; // Clear prev list

    myLibrary.forEach( (book, index) => {
        const removeButton = document.createElement('button');
        const changeReadButton = document.createElement('button');

        changeReadButton.textContent = book.readStatus ? 'Unread' : 'read';;
        removeButton.textContent = 'Remove';

        changeReadButton.addEventListener('click', function(event){
            book.readStatus = !book.readStatus;
            changeReadButton.textContent = book.readStatus ? 'Unread' : 'read';
            displayLibrary();
        })
        
        removeButton.addEventListener('click', function(event){
            myLibrary.splice(index, 1);
            displayLibrary();
        })
        
        
        const bookItem = document.createElement('li');
        bookItem.textContent = book.read();

        bookItem.appendChild(removeButton);
        bookItem.appendChild(changeReadButton);

        libraryDisplay.appendChild(bookItem);
        

    })
}

document.getElementById('bookForm').addEventListener('submit', function(event){
    event.preventDefault(); // this does something

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const newBook = new Book(title, author, pages);
    addBookToLibrary(newBook);

    // Clear form inputs
    document.getElementById('bookForm').reset();
})





