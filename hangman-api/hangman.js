require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const { words } = require('./data')
const { generateRandomWords, getAllWords } = require('./utils')

app.use(cors())
app.use(express.static(path.resolve(__dirname, './public')))

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/info.html'))
})

app.get("/all", (req, res) => {
  res.json(getAllWords(words))
})

app.get("/word", (req, res) => {
  const { number } = req.query
  res.json(generateRandomWords(number, words))
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Sever is listening on port ...${PORT}`)
})