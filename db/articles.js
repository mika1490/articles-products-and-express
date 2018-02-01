//crud helper functions
//revealing module pattern
//insert, bind, put, post
//request comes in i get data i massage that data and send that data to the user

//leave variables at the top
let articlesArray = [];
let articleId = 0;


module.exports = {
  getAll: getAll,
  insert: insert
}

function getAll() {
  return articlesArray;
}
function insert(article) {
  // add id & maintain id's used
  article.id = articleId++
  articlesArray.push(article);
}


