/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.string('id').primary();
    table.string('namaUser').notNullable();
    table.string('numberPhone').notNullable().unique();
    table.string('alamat').notNullable();
    table.integer('accountID').notNullable();
    table.timestamps();

    table.foreign('accountID').references('id').inTable('account');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
