exports.seed = function (knex, Promies) {
  return knex("recipes").insert([
    { recipe_name: "Lasagna" },
    { recipe_name: "Cereal" },
    { recipe_name: "Cup o' Joe" },
  ]);
};
