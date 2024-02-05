/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('orders', (table) => {
    table.string('id').primary();
    table.integer('productID').notNullable();
    table.integer('customerID').notNullable();
    table.integer('qty');
    table.timestamps();

    table.foreign('productID').references('id').inTable('product');
    table.foreign('customerID').references('id').inTable('user');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
