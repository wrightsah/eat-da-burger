// * Import (require) `connection.js` into `orm.js`

const connection = require("./connection");

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

const orm = {
  //      * `selectAll()`

  selectAll(tableName, callback) {
    connection.query("SELECT * FROM ??", [tableName], (err, data) => {
      if (err) throw err;
      console.log(data);

      callback(data);
    });
  },
  //      * `insertOne()`
  //      * `updateOne()`
};

//    * Export the ORM object in `module.exports`.

module.exports = orm;
