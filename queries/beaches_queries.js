const db = require('../database-connection')

module.exports = {
    readAllBeaches(){
        return db('beaches').orderBy('id','asce')
    },
    readBeachById(id) {
        return db('beaches').where('id',id).first()
    },
    createBeach(newBeach) {
        return db('beaches').insert(newBeach).returning('*')
    },
    updateBeach(id,updatedInfo) {
        return db('beaches').update(updatedInfo).where('id',id).returning('*')
    },
    deleteBeach(id) {
        return db('beaches').where('id',id).del()
    }
}