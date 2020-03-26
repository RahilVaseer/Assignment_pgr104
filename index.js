

var books = [
    { title: "Programming Languages", year: 2018, ebook: "yes" },
    { title: "Database Systems", year: 2000, ebook: "yes" },
    { title: "Algorithms and Data Structure", year: 1995, ebook: "no" },
    { title: "programming in C++", year: 1999, ebook: "no" },
    { title: "Compiler Design", year: 2018, ebook: "yes" }
];

function listOut() {
    console.table(books);
    
}

//Dom-selector with eventlistner 
document.getElementById("listOutBooks").addEventListener("click", listOut);


//function for adding book 
function addBook() {
    //Using prompt here to get user input for the books name, published year and if it has E-book.
    var title = prompt("What is the name of the book you want to add?");
    var year = parseFloat(prompt("What year was it published?"));
    var ebook = prompt("Does this book have electronic version?").toLowerCase();

       /*Filtering trough the user input by using an If-else statement. 
       User need to answer every question. the published year need to be between 1990 and 2020
       and it is only allowed to write 'yes' or 'no' if the book has E-book*/
        if(title != "" && (year >= 1990 && year <= 2020) && (ebook === "yes" || ebook === "no")){
            books.push( {title, year, ebook} )
            
    } else {
        //If an invalid input-the user will get an message that something went wrong! 
        alert("Ops! An error occured. Please check: \n\ \n\ 1.Have you filled out every row? \n\ \n\ 2.Have you entered a valid number? \n\   (Should be between 1990 and 2020) \n\ \n\ 3.Have you entered either 'yes' or 'no' under E-books?")
    }
        console.table(books);
}

document.getElementById("addBook").addEventListener("click", addBook);


//function that remove a book by theyr title 
function removeBookTitle(){
    //the user writes what book it want removed by its title
    let title = prompt("What is the title of the book you want to remove?")

    /*I'm using a for-loop here because I want to run through every element of the list 
     and compare it too what the user-imput*/
    for(let i = 0; i < books.length; i++){
        //if the user input match with a title in the list it will remove the object(book) from the list
        if(books[i].title === title){
            books.splice(i, 1);
            return console.table(books);            
    } 
}
    //if the user hase entered an invalid input it display an error message
    alert("You've entered an invalid title. Make sure that they're no typo's :)");
}


document.getElementById("removeBookByTitle").addEventListener("click", removeBookTitle);


//function for removing a book from the list by published year
function removeBookYear(){
    let year = parseFloat(prompt("What is the published year of the book you want to remove?"));
    // for-loop to check trough the array
    for(let i = 0; i < books.length; i++){
        //If the user input is not valid(not a number or a number that is not between 1990 and 2020) it will print out an error messasge
     if(isNaN(year) || year < 1990 || year > 2020 ){
        return alert("Ops! You've entered something invalid. Please check what you've entered is a number, and its between '1990' and '2020':)")
        
        // if what the user has entered equals to one of the object's property 'year' it will remove the object(that contains the property) from the array 'books'
    } else if(books[i].year === year){
            books.splice(i, 1);
            return console.table(books);
    } 
    
}    

}

 
document.getElementById("removeBookByYear").addEventListener("click", removeBookYear);



//function that counts how many number of books we have based on wheter it has E-book or not 
function countE(){

    
    //The user writes in either 'yes' or 'no' based on if he wants a list over books with E-book or not.
    var input = prompt("Write either 'yes' or 'no' to request the number of books that have E-book or not")
         
        
        let counter = 0;
            //Want to loop through the list so we can count
            for(let i = 0; i < books.length; i++){
                //Every time the user input equals with a property-value in the list it adds "+1" to the variable counter
                if(books[i].ebook === input){
                    counter++;
                }
            }
                //when the loop is done running thorugh the list it will log the value for counter to the console
                //If user answer something else then 'yes' or 'no' it will log '0' to consoll. 
              return console.log(counter);
              
        }
        
        document.getElementById("count").addEventListener("click", countE);
        




