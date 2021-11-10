function findAccountById(accounts, id) {
  //return the account for each id
  //for loop through the array of objects with .reduce? then an if statement with === to match the ids.
  let acc = accounts.filter(account => account.id === id);
  return acc[0];
}

function sortAccountsByLastName(accounts) {
  //same accounts array
  //return sorted array based on last name
  const names = accounts.sort((userA, userB) => userA.name.last > userB.name.last? 1:-1);
  return names;
}

function getTotalNumberOfBorrows(account, books) {
  //account obj, and array of books
  // loop through each books borrowed array and add when id is found.

  return books.reduce((acc, book)=>{
    book.borrows.forEach(checkedOut=>{
      if(checkedOut.id === account.id){
        acc++;
      }})
      return acc;
  },0)
}


function getBooksPossessedByAccount(account, books, authors) {
    //account = obj //books = array //authors = array
    //return array of books that represents all books by account , author is nested in it
    //we need to get author id from the book. 
   return books.reduce((answer, book)=>{
          if(!book.borrows[0].returned && book.borrows[0].id === account.id){
              book.author = authors.find(author => author.id === book.authorId); 
              answer.push(book);
          } 
          return answer    
    },[])
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
