//crud helper functions
//revealing module pattern
//insert, bind, put, post
//request comes in i get data i massage that data and send that data to the user

//leave variables at the top

// let articlesArray = [];


// module.exports = {
//   getAll: getAll,
//   create: create,
//   find: find,
//   edit: edit
// }


// //returns full article list
// function getAll() {
//   return articlesArray;
// }

// //will save data from req.body
// function create(req) {


//   let newarticle = {
//     title: req.title,
//     body: req.body,
//     author: req.author,
//     urlTitle: encodedURI(req.title)
//   }
//   articlesArray.push(newarticle);
//   return true;

// }

// //will find an Id
// function find(title) {
//   for (let i = 0; i < articlesArray.length; i++) {
//     if (articlesArray[i].title === title) {
//       return i
//     } else
//       return false;
//   }
// }

// // will edit a article based on id
// function edit(data, item) {
//   if (!item) {
//     return false;

//   } else {
//     if (data.title) {
//       item.title = data.title;
//       item.urlTitle = encodedURI(data.title);
//     }

//     if (data.body) {
//       item.body = data.body;
//       return true
//     }
//     if (data.author) {
//       item.author = data.author;
//       return true;
//     }
//   }
// }

// function remove(title) {
//   let index = articlesArray.findIndex(title);
//   if (index >= 0) {
//     articlesArray.splice(index, 1)
//   } else {
//     return false;
//   }
// };


