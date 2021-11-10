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
  //hard code 5 bc the project is always top 5, if needed pass in an int and replace 5 
  arr.sort((a,b)=>b.count -a.count);
  return arr.splice(0,5);
}

function getMostCommonGenres(books) {
  //return an array of objects that has genre : count, 5>
  // MAP array into just genres then count the times it occurs
  const result = books.map((book) => book.genre);
  const counts = {};
  for(const num of result){
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  // format to name: genre, count: count
  //return top 5
  let answer = [];
  let names = Object.keys(counts);
  let counter = Object.values(counts);
  for(let i = 0;i<5;i++){ //i<5 to get top five
    //for loop to control the index of names and counter
    answer.push({name: names[i], count: counter[i]});
  }
  return sortnSplice(answer)
}


function getMostPopularBooks(books) {
  //const result = books.map((book)=> book.borrows) //an array of each borrowed element
  return sortnSplice(books.map(({title, borrows} = book)=>{ 
    return {name: title, count: borrows.length};
  }));
}

function getMostPopularAuthors(books, authors) {
  //input is array of book and author objects
  //array[top5], books checkedout the most, adding all the books of the author then sort.
  return sortnSplice(authors.reduce((result, {id ,name:{first}, name:{last}} )=>{
          let authorFind = books.map(({authorId, borrows} = booked)=>{
            return {authId: authorId, borrowsCount: borrows.length};
          }).find((book) => book.authId === id);
          result.push({name: `${first} ${last}`, count: authorFind.borrowsCount})
          return result;
      },[]))
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
