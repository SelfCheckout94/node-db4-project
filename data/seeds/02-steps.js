exports.seed = function (knex, Promies) {
  return knex("steps").insert([
    {
      step_number: 1,
      step_instructions:
        "You do something with the cheese, noodles, meat, or cheese",
      recipe_id: 1,
    },
    {
      step_number: 1,
      step_instructions: "Pour cereal into a bowl",
      recipe_id: 2,
    },
    {
      step_number: 1,
      step_instructions:
        "Put filter in coffee maker and measure out some coffee grinds accoring to how big the pot that you're making is",
      recipe_id: 3,
    },
    {
      step_number: 2,
      step_instructions:
        "You do something else with the cheese, noodles, meat, or cheese",
      recipe_id: 1,
    },
    {
      step_number: 2,
      step_instructions: "Next, pour milk into the bowl",
      recipe_id: 2,
    },
    {
      step_number: 2,
      step_instructions: "When coffee is done brewing pour it into a mug",
      recipe_id: 3,
    },
    {
      step_number: 3,
      step_instructions:
        "You do something ELSE with the cheese, noodles, meat, or cheese",
      recipe_id: 1,
    },
    {
      step_number: 3,
      step_instructions: "enjoy!",
      recipe_id: 2,
    },
    {
      step_number: 3,
      step_instructions:
        "Pour in milk to balance out the bitterness of the coffee or enjoy black",
      recipe_id: 3,
    },
    {
      step_number: 4,
      step_instructions:
        "You do SOMETHING ELSE with the cheese, noodles, meat, or cheese",
      recipe_id: 1,
    },
  ]);
};
