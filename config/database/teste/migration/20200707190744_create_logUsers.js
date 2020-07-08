const { into } = require("../../../connection");

exports.up = (knex) => {
    return knex.schema.createTable('logs', (t) => {
      t.increments('id').primary();
      t.integer('user_id').unsigned();
      t.foreign('user_id').references('id').inTable('users');
      t.string('userName').notNull();
      t.string('userEmail').notNull();
      t.string('action').notNull();
    })
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable('logs');
  };
  