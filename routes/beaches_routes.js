const express = require('express')
const router = express.Router()
const queries = require('../queries/beaches_queries')

router.get('/', (req,res) => {
    queries.readAllBeaches().then(beaches => res.status(200).send({beaches}))
})



module.exports = router