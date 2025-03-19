// March 19, 2025
// Learning Backend Development with Node.js, Express.js, PostgreSQL, Prism & Docker
// By: Ivan Christopher D. Vargas

// Server Configuration
// URL -> http://localhost:8080
// IP -> 127.0.0.1:8080
const express = require('express');
const app = express()
const PORT = 1213;

let data = ['Ivan']

// Middleware to parse JSON bodies (useful for POST/PUT requests)
app.use(express.json())

// Type 1 - Website endpoints
// (returns HTML content that browsers can display) 
app.get('/', (req, res) => {
  res.send(`
    <body style="background:pink; color: blue">
      <h1>DATA</h1>
      <p>${JSON.stringify(data)}</p>
      <a href="/dashboard">Dashboard</a>
    </body>
    `)
})

app.get('/dashboard',(req,res) => {
    console.log('Use requested the home page website')
    res.send(`
      <body style="background:pink; color:blue">
          <h1>Dashboard</h1>
          <p>${JSON.stringify(data)}</p>
          <a href="/">Home</a>
      </body>
      <script>
        console.log("Navigated to the Homepage")
      </script>
      `)
})


// Type 2 - API endpoints 
// (returns structured data (e.g, JSON) for programs or frontend frameworks to process)

// CRUD-method - create-post, read-get, update-put, and delete-delete

app.get('/api/data', (req, res) => {
  console.log('Now hitting the /api/data endpoint which returns Data')
  res.status(599).send(data)
})

app.post('/api/data', (req, res) => {
  // someone wants to create a use (for example when they click a signup button)
  // the user clicks the sign up button after entering their credentials, and their browser is wired up to send out a network request to the server to handle the action.
  const newEntry = req.body
  console.log(newEntry)
  data.push(newEntry.name)
  res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('The last entry has been deleted');
    res.sendStatus(203)
})


app.listen(PORT, ()=> console.log(`Server has started on: ${PORT}`))