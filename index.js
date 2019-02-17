const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3003
const beaches = require('./routes/beaches_routes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/beaches', beaches)

app.listen (port, () => {
    console.log(`running on port: ${port}`)
})

app.use((req,res,next) => {
    res.status(404).send("We can't find that beach. Let us know so we can add it and clean it up!")
})

app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send("Something went wrong. Hopefully someone's cleaning the beach :(")
})