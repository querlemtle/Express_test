const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const port = 3000

// Set up the template engine
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))

// Set static files
app.use(express.static('public'))

// Set routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:nav_item', (req, res) => {
  // Get title from req.params.nav_item
  // Capitalize and concatenate the rest string
  const title = req.params.nav_item.charAt(0).toUpperCase() + req.params.nav_item.slice(1)
  res.render('others', { title })
})

// Start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
