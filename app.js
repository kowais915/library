// refrences

const title = document.getElementById("title");


// book array

const library = ['Owais', 'sikandar'];

// Constructor to make books objects

class Books{
    constructor(title, author, noOfPages, readOrNot){
        this.title = title;
        this.author = author;
        this.NoOfPages = noOfPages;
        this.readOrNot = readOrNot;

    }

    infor(){
        return `${this.title} by ${this.author}`;
    }


}


// function to add books

const addBook = ()=>{
  const title =  prompt("Enter the name of the book: ");
  library.push(title);
}

// addBook();

// Looping through books

const loopBook = ()=>{
    library.forEach(val=>{

        
        title.innerHTML += `<div>${val}</div>`;
        
    })
}

// loopBook();

