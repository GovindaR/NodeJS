
exports.up = function(knex, Promise) {
  return knex.schema.createTable('drivertb',table => {
      table.increments("id").primary();
      table.text("name").notNullable();
      table.text("address").notNullable();
      table.int("phone").notNullable().unique();
      table
      .timestamp('created_at')
      .notNullable()
      .default(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('drivertd')
};
