// March 19, 2025
// Learning Backend Development with Node.js, Express.js, PostgreSQL, Prism & Docker
// By: Ivan Christopher D. Vargas

// Server Configuration
// URL -> http://localhost:8080
// IP -> 127.0.0.1:8080
const express = require('express');
const app = express()
const PORT = 1213;

let data = {
  name: "Ivan",
  // surname: "Vargas"
}

// app.get('/', (req, res) => {
//     console.log('Yay I hit an endpoint', req.method)
//     res.sendStatus(201)
// })

// Type 1 - Website endpoints
// (returns HTML content that browsers can display) 
app.get('/', (req, res) => {
  res.send('<h1>Homepage</h1>')
})

app.get('/dashboard',(req,res) => {
    console.log('Now hitting the /dashboard endpoint')
    res.send("<h1>Dashboard</h1>")
})


// Type 2 - API endpoints 
// (returns structured data (e.g, JSON) for programs or frontend frameworks to process)
app.get('/api/data', (req, res) => {
  console.log('Now hitting the /api/data endpoint which returns Data')
  res.send(data)
})


app.listen(PORT, ()=> console.log(`Server has started on: ${PORT}`))