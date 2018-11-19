
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drivertb').del()
    .then(function () {
      // Inserts seed entries
      return knex('drivertb').insert([
        {name: 'ram',
        address: 'ktm'},{
          name: 'hari',
        address: 'ptn'
        }
      ]);
    });
};
