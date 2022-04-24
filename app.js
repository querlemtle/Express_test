const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const port = 3000;

// Set up the template engine
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));

// Set static files
app.use(express.static('public'));

// Set routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/:nav_item', (req, res) => {
  // req.params.nav_item 取得名稱，將首字轉為大寫再接回剩下字串
  const title = req.params.nav_item.charAt(0).toUpperCase() + req.params.nav_item.slice(1);
  res.render('others', { title });
});

// Start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
});