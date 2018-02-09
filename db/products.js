//crud helper functions
//create

// let productsArray = [];
// let productId = 0;


// module.exports = {
//   getAll: getAll,
//   create: create,
//   find: find,
//   edit: edit,
//   remove: remove
// }

//returns full product list
// function getAll() {
//   return productsArray;
// }

// //will save data from req.body
// function create(req) {
//   req.id = productId++

//   let newProduct = {
//     id: parseFloat(req.id),
//     name: req.name,
//     price: parseFloat(req.price),
//     inventory: parseFloat(req.inventory)
//   }
//   productsArray.push(newProduct);
//   return true;

// }

// //will find an Id
// function find(id) {
//   id = parseInt(id);
//   let index = productsArray.findIndex(element => element.id === id); 
//   if (index >= 0) {
//     return productsArray[index];
//   } else {
//     return false;
//   }
// }

// // will edit a product based on id
// function edit(id, item) {
//   // id = parseInt(id);
//   let itemToEdit = find(id);
//   let successful;
//   if (item.name) {
//     console.log('hi');
//     itemToEdit.name = item.name;
//     successful = true;
//   }
//   if (item.price) {
//     itemToEdit.price = item.price;
//     successful = true;
//   }
//   if (item.inventory > -1) {
//     itemToEdit.inventory = item.inventory;
//     successful = true;
//   } else {
//     console.log('hitting else')
//     successful = false;
//   }
//   console.log(successful);
//   return successful;
// }

// function remove(id) {
//   id = parseInt(id);
//   let index = productsArray.findIndex(element => element.id === id); 
//   if (index >= 0) {
//     productsArray.splice(index, 1)
//     return true;
//   } else {
//     return false;
//   }
// };
