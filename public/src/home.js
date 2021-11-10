function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let counter =0;
  for(let i =0; i<books.length;i++){
    if(books[i].borrows[0].returned === false){
      counter++;
    }
  }
  return counter;
}

function sortnSplice(arr){
  arr.sort((a,b)=>b.count -a.count);
  return arr.splice(0,5);
}

function getMostCommonGenres(books) {
  //return an array of objects that has genre : count, 5>
  // MAP array into just genres then count the times it occurs
  const result = books.map((book) => book.genre);
  const counts = {};
  result.forEach(num => {
    counts[num] = (counts[num] || 0) +1;
  });
  // format to name: genre, count: count
  //return top 5
  let answer = [];
  let names = Object.keys(counts);
  let counter = Object.values(counts);
  for(let i = 0;i<5;i++){
    let genreObject = {};
    const {name: name, count: count} = genreObject;
    genreObject.name = names[i];
    genreObject.count = counter[i];
    answer.push(genreObject);
  }
  return sortnSplice(answer)
}


function getMostPopularBooks(books) {
  //const result = books.map((book)=> book.borrows) //an array of each borrowed element
  let answer = [];
  books.forEach(book => {
    //need to get borrows.length and set to var for count in obj
    let booked={};
    const{'name':name, 'count':count} = booked;
    booked.name = book.title;
    booked.count = book.borrows.length;
    answer.push(booked);
  });
  return sortnSplice(answer)
}

function getMostPopularAuthors(books, authors) {
  //input is array of book and author objects
  //array[top5], books checkedout the most, adding all the books of the author then sort.
  /*
  First, get each book and get author ID, and count of borrows
  then get each author id and match with count
  then sort by top 5
  */
  let answer = [];
  let result = [];
  books.forEach(book => {
    let booked = {}
    const {authId, borrowsCount} = booked;
    booked.borrowsCount = book.borrows.length;
    booked.authId = book.authorId;
    answer.push(booked);
  });
  for(let i = 0; i<authors.length;i++){
    let authorFind = answer.find((book)=> book.authId === authors[i].id)
    let template = {};
    const {name,count} = template;
    template.name = `${authors[i].name.first} ${authors[i].name.last}`;
    template.count = authorFind.borrowsCount;
    result.push(template);
  }
  return sortnSplice(result);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
