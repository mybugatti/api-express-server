var express = require('express');
var router = express.Router();

// Our users which will be queried by their index
const users = [
	{
		firstName: "Jesse",
		lastName: "Pinkman",
		position: "Manufacturer",
		cars: [
			{
				brand: "BMW",
				model: "M3",
				kW: 338
			}
		]
	},
	{
		firstName: "Walter",
		lastName: "White",
		position: "CEO",
		cars: [
			{
				brand: "BMW",
				model: "335i",
				kW: 225
			},
			{
				brand: "Lamborghini",
				model: "Aventador",
				kW: 566
			}
		]
	}
];

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// Allow cross-origin requests
router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get("/users", function(req, res) {
	return res.json(users);
});

router.get("/user/:id", function(req, res) {
	// To prevent the ID "0" we'll simply subtract by one. This way we can query for id = 2 which will serve us 1, etc.
	const idx = req.params.id - 1;

	if (!users[idx]) {
		return res.status(404).json({ error: "User not found" });
	}

	return res.json(users[idx]);
});

module.exports = router;
