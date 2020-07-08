
exports.up = (knex) => {
  return knex.schema.createTable('logs', (t) => {
    t.increments('id').primary();
    t.string('user_id').unsigned();
    t.foreign('user_id').references('id');
    t.string('userName').notNull();
    t.string('userEmail').notNull();
    t.string('action').notNull();
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('logs');
};
