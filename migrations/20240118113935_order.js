/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('order', (table) => {
    table.string('id').primary();
    table.string('productID').notNullable();
    table.string('customerID').notNullable();
    table.integer('qty');
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
