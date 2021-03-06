const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')
const configEnv = config[environment]
const knex = require('knex')
const connection = knex(configENV)

module.exports = connection