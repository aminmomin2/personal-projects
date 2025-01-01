require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const { quotes } = require('./data')

app.use(cors())
app.use(express.static(path.resolve(__dirname, "./public")))

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/info.html'))
})

app.get("/all", (req, res) => {
  res.json(quotes)
})

app.get("/quote", (req, res) => {
  res.json(quotes[Math.floor(Math.random() * quotes.length)])
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is listening on port ...${PORT}`)
})