/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('transaction', (table) => {
    table.string('id').primary();
    table.integer('orderID').notNullable();
    table.date('date_Transaction').notNullable();
    table.string('method_Payment');
    table.boolean('status');
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
