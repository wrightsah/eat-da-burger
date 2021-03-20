// * Import (require) `connection.js` into `orm.js`

const { data } = require("autoprefixer");
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

//   insertOne(tableName, burgerName, callback) {
//       connection.query("INSERT INTO ?? VALUES ?", [tableName, burgerName], (err, data) => {
//           if (err) throw err;
//           console.log(data + " burger added.");

//           callback(data);

//       })
//   }
  //      * `updateOne()`
};

//    * Export the ORM object in `module.exports`.

module.exports = orm;
