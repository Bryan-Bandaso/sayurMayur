/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('admin').del();
  await knex('admin').insert([
    { id: 'A-01', username: 'admin', password: 'admin123' },
  ]);
};
