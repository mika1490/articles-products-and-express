exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table) {
    table.increments('id');
    table.string('name').notNullable();
    table.decimal('price').notNullable();
    table.integer('inventory').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
}
