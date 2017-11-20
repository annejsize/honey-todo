var express = require("express");

var router = express.Router();

// Import the model (honey.js) to use its database functions.
var honey = require("../models/honey.js");


router.get("/", function(req, res) {
  honey.all(function(data) {
    var hbsObject = {
      honeys: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
// });

// router.post("/api/honeys", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });
//
// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//
//   console.log("condition", condition);
//
//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });
//
// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//
//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
});

// Export routes for server.js to use.
module.exports = router;
