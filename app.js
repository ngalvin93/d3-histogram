const express = require('express')
const path = require('path')
const data = require('./public/MOCK_DATA.json')
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.render('home'))

app.get('/data', (req, res) => res.json(data))

app.listen(port, () => console.log(`Listening on port ${port}!`))