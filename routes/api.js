/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var data = {
  "persons": [
    {
      "name": "Alex",
      "age": 26,
      "interests": ['basketball', 'biking', 'hiking']
    },
    {
      "name": "Boris",
      "age": 27,
      "interests": ['soccer', 'sailing', 'ping pong']
    },
    {
      "name": "Brian",
      "age": 35,
      "interests": ['tennis', 'racing', 'robotics']
    }
  ]
};

// GET
exports.listPersons = function (req, res) {
  res.json({
    persons: data.persons
  });
};

// POST
exports.addPerson = function (req, res) {
  var person = req.body;

  // TODO: add person to persons list
  res.json(true); // placeholder
};

// PUT
exports.editPerson = function (req, res) {
  var id = req.params.id;

  // TODO: edit person where index === id
  res.json(true); // placeholder
};

// DELETE
exports.deletePerson = function (req, res) {
  var id = req.params.id;

  // TODO: edit person where index === id
  res.json(true); // placeholder
};
