const express = require('express')
const router = express.Router()
const queries = require('../queries/beaches_queries')

router.get('/', (req,res) => {
    queries.readAllBeaches().then(beaches => res.status(200).send({beaches}))
})

router.get('/:id', (req,res) => {
    if(!parseInt(req.params.id))res.send('not valid integer')
    queries.readBeachById(req.params.id).then(beach => res.status(200).send({ beach }))
})

router.post('/',(req,res) => {
    queries.createBeach(req.body).then(newBeach => res.status(201).send(newBeach))
})

router.put('/:id',(req,res) => {
    queries.updateBeach(req.params.id,req.body).then(updatedBeach => res.status(200).send(updatedBeach))
})

router.delete('/:id',(req,res) => {
    queries.deleteBeach(req.params.id).then(() => res.sendStatus(204))
})

module.exports = router