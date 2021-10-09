// refrences

const title = document.getElementById("title");
const author = document.getElementById("author");
const read = document.getElementById("read");
const form = document.querySelector('form');


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

// form

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const tit = form.title.value.trim();
    console.log(title);
    title.innerHTML +=  `<div> ${tit} </div>
    <div><span class="btn btn-danger">delete</span></div>`

    const aut = form.author.value.trim();
    console.log(author);
    author.innerHTML +=  `<div> ${aut} </div>`


    const stat = form.status.value.trim();
    console.log(stat);
    read.innerHTML +=  `<div> ${stat} </div>`





})


