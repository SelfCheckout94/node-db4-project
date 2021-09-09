exports.seed = function (knex, Promies) {
  return knex("step_ingredients").insert([
    // lasagna
    {
      quantity: 3,
      step_id: 1,
      ingredient_id: 1,
    },
    {
      quantity: 7,
      step_id: 4,
      ingredient_id: 2,
    },
    {
      quantity: 2,
      step_id: 7,
      ingredient_id: 3,
    },
    {
      quantity: 1,
      step_id: 10,
      ingredient_id: 4,
    },
    // cereal
    {
      quantity: 3,
      step_id: 2,
      ingredient_id: 5,
    },
    {
      quantity: 2,
      step_id: 5,
      ingredient_id: 6,
    },
    // coffee
    {
      quantity: 6,
      step_id: 3,
      ingredient_id: 7,
    },
    {
      quantity: 2,
      step_id: 9,
      ingredient_id: 6,
    },
  ]);
};
