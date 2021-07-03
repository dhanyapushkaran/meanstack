class BookLibrary {
    getBooks() {
        let books = {
        
            "the alchemist": { book_name: "the alchemist", author: "paulo", price: 200, no_copies: 5,sold:1},
            "alice in wonderland": { book_name: "alice in wonderland", author: "lewis", price: 500, no_copies: 10,sold:2 },
            "harry porter": { book_name: "harry porter", author: "rowling", price: 400, no_copies: 3 ,sold:1}
    }
        return books
    }
    findBooks(book_name) {
        let bookDetails = this.getBooks()
        if (book_name in bookDetails) {
            return 1
            
        }
        else {
            return 0
        }
    }
    findAvailCopies(book_name){
        let bookDetails=this.getBooks()
        if (book_name in bookDetails){
           let availableCopies= bookDetails[book_name]["no_copies"]-bookDetails[book_name]["sold"]
           console.log(`Available copies of ${book_name} is ${availableCopies}`);
        }
        else{
            console.log("No copies available");
        }
    }
    highestSold(){
        let bookDetails=this.getBooks()
        let bookAuthor=Object.entries(bookDetails).reduce((item1,item2)=>item1[1].sold>item2[1].sold?item1[1].author:item2[1].author)
        
        console.log(`author of highest sold book is ${bookAuthor} `);
    }

}

let BooksLib1 = new BookLibrary
let searchBookname = BooksLib1.findBooks("harry")
let res = searchBookname == 0 ? "Book not availabe" : "Book is available"
console.log(res);
BooksLib1.findAvailCopies("alice in wonderland")
BooksLib1.highestSold()