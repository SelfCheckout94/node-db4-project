exports.seed = function (knex, Promies) {
  return knex("ingredients").insert([
    { ingredient_name: "Meat" },
    { ingredient_name: "Cheese" },
    { ingredient_name: "Noodles" },
    { ingredient_name: "Sauce" },
    { ingredient_name: "Cereal" },
    { ingredient_name: "Milk" },
    { ingredient_name: "Coffee" },
  ]);
};
