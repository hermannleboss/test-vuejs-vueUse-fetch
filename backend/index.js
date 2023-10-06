import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.get('/', (req, res) => {
  res.json('Hello World!')
})
// simple return 201 response
app.get('/201', (req, res) => {
  res.status(201).json({ message: 'We have a 201 response' })
})

// Return a 400 response
app.get('/400', (req, res) => {
  res.status(400).json({ error: 'We have a 400 Error' })
})
// Return a 401 response
app.get('/401', (req, res) => {
  res.status(401).json({ error: 'We have a 401 Error' })
})

// Return a 404 response
app.get('/404', (req, res) => {
  res.status(404).json({ error: 'We have a 404 Error' })
})

// Return a 500 error
app.get('/500', (req, res) => {
  res.status(500).json({ error: 'We have a 500 Error' })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})