module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/beaches'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};