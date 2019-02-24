exports.seed = function(knex, Promise) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          id: 1,
          name: "Leslie",
          password: "",
          email: "leslie@gmail.com"
        },
        {
          id: 2,
          name: "Nat",
          password: "",
          email: "nat@gmail.com"
        },
        {
          id: 3,
          name: "Alex",
          password: "",
          email: "alex@gmail.com"
        }
      ]);
    });
};
