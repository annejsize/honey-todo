// Import MySQL connection.
var connection = require("../config/connection.js");

// creating our models ....
 // SELECT * FROM honeys
var orm ={
  all: function(table, cb){
    var queryString = 'SELECT * FROM ' + table;
    connection.query(queryString, function(err, data){
      if(err) throw err;
      cb(data);
    });
  },

  // UPDATE honeys SET complete = true WHERE id = <id value of selected honey>/;
  update: function(table, condition, cb){
      connection.query('UPDATE '+table+' SET complete = true WHERE id='+condition+';', function (err, result) {
      if(err) throw err;
      cb(result);
    });
  },

  // INSERT INTO honeys (request, priority, duedate) VALUES (<user input with request, prioirty duedate>)

  add: function(table, useRequest, usePriority, useDue, cb) {
    connection.query('INSERT INTO '+ table +' (request, priority, duedate) VALUES ("' +useRequest+ "', " +usePriority+ "', " +useDue+ '");', function(err, data){
      if(err) throw err;
      cb(data);
    });
  },

// DELETE FROM honeys WHERE id = <input>;
  delete: function(table, condition, conditionVal, cb){
    connection.query('DELETE FROM ' + table + ' WHERE ' + condition + '=?', function(err, data){
      if(err) throw err;
      cb(data);
    });
  }
};

module.exports = orm;
