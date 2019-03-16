const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);
const crypto = require("./crypto");

module.exports = {
  create
};

function create(username, password, email, testDb) {
  const connection = testDb || knex;
  return new Promise((resolve, reject) => {
    crypto.generate(password, (err, hash) => {
      if (err) reject(err);
      connection("users")
        .insert({ username, hash, email })
        .then(user_id => resolve(user_id))
        .catch(err => reject(err));
    });
  });
}
