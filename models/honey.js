var orm = require("../config/orm.js");

var honey = {
  all: function(cb) {
    orm.all("honeys", function(res) {
      cb(res);
    });
  },
};

module.exports = honey;
