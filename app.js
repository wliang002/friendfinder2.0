// =================================================
// Dependencies
// =================================================
const express = require('express')

// Express configuration
const app = express()

const PORT = process.env.PORT || 8000

// Sets up the Express app to handle data parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// =================================================
// Router
// =================================================
require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

// =================================================
// Listener
// =================================================
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now listening on PORT ${PORT}`)
})
