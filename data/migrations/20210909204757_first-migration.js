exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id").notNullable().unique();
      tbl.string("recipe_name");
      tbl.timestamps(true, true);
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
    })
    .createTable("step_ingredients", (tbl) => {
      tbl.increments("step_ingredient_id");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
