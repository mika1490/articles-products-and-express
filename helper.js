function validateProduct(data) {
  let isValid;

  const errors = {nameError: '', priceError: '', inventoryError: ''}

  if (typeof data.name !== 'string') {
    isValid = false;
    errors.name = "Name should be a string; "
  }
  if (isNaN(data.price)) {
    isValid = false;
    errors.price = "Price should be a number; "
  }
  if (data.price <= 0) {
    isValid = false;
    errors.price = "Price should be more than 0"
  }
  if (isNaN(data.inventory)) {
    isValid = false;
    errors.inventoryError += 'Inventory should be a number'
  } else { 
    (isValid === true)
    return true
  }
}

// function validateArticle(data) {
//   let isValid;

//   const errors = {titleeError: '', bodyError: '', authorError: ''}

//   if (typeof data.title !== 'string') {
//     isValid = false;
//     errors.title = "Title should be a string; "
//   }
//   if (typeof data.body !== 'string') {
//     isValid = false;
//     errors.price = "Body should be a string; "
//   }
//   if (typeof data.author !== 'string') {
//     isValid = false;
//     errors.author = 'Author should be a string'
//   } else { 
//     (isValid === true)
//     return true
//   }
// }

module.exports = {validateProduct}