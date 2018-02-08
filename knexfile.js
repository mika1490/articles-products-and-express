module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'articles_user',
      password : 'password',
      database : 'articles_products_database',
      charset: 'utf8'
    }, 
    debug: true,
    migrations: {
      directory: __dirname + '/knex/migrations',
    }
  }
};