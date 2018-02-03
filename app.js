const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const articles = require('./routes/articles');
const products = require('./routes/products');
const PORT = process.env.PORT || 8080;
const methodOverride = require('method-override');

const app = express();
app.engine('.hbs', handlebars({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + 'public'));
app.use('/articles', articles); 
app.use('/products', products);

app.listen(PORT, (err) => {
  if (err) { throw err; }
  console.log(`Server Listening On Port ${PORT}`)
});
