class BookLibrary {
    getBooks() {
        let books = {
        
            "the alchemist": { book_name: "the alchemist", author: "paulo", price: 200, no_copies: 5,sold:1},
            "alice in wonderland": { book_name: "alice in wonderland", author: "lewis", price: 500, no_copies: 10,sold:3 },
            "harry porter": { book_name: "harry porter", author: "rowling", price: 400, no_copies: 1 ,sold:1}
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

}

let BooksLib1 = new BookLibrary
let searchBookname = BooksLib1.findBooks("harry")
let res = searchBookname == 0 ? "Book not availabe" : "Book is available"
console.log(res);
BooksLib1.findAvailCopies("alice in wonderland")