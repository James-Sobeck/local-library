function findAuthorById(authors, id) {
  let auth = authors.filter(author => author.id === id);
  return auth[0];
}
function findBookById(books, id) {
  let bookCase = books.filter(book=> book.id === id);
  return bookCase[0];
}

function partitionBooksByBorrowedStatus(books) {
  // books = array of books
  // return an array with two array inside, one is all checked out books
  // the other is returned books [ [checked out], [returned] ]
  let checkedOutArray = books.filter(book=> book.borrows[0].returned === false);
  let returnedArray = books.filter(book=> book.borrows[0].returned === true);
  return [checkedOutArray, returnedArray];
}

function getBorrowersForBook(book, accounts) {
  //book is just an obj and accounts is account array
  // return an array of 10 > account obj that should also show if returned. 
  //loop through borrows and put that into array
  let result = [];
  let limitedResult = [];

  for(let i =0;i<book.borrows.length;i++){
    accounts.forEach(acc => {
      if(acc.id === book.borrows[i].id){
        acc.returned = book.borrows[i].returned;
        result.push(acc);
      }
    });
  }
  
  //limit to 10 objects in array
  for(let i = 0; i<10;i++){
    limitedResult.push(result[i]);
  }
  return limitedResult;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
