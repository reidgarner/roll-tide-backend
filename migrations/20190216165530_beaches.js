
exports.up = function(knex, Promise) {
    return knex.schema.createTable('beaches', (beach) => {
        beach.increments('id')
        beach.string('name')
        beach.string('latitude')
        beach.string('longitude')
        beach.string('picture_url')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('beaches')
};