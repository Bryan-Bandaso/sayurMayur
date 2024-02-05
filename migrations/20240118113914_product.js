/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('product', (table) => {
    table.increments('id').primary();
    table.string('name_product');
    table.enum('category', [
      'Lauk Pauk',
      'Sayuran',
      'Buah-buahan',
      'Bumbu Dapur',
    ]);
    table.integer('price');
    table.integer('amount');
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
