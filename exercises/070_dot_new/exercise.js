var exercise      = require('workshopper-exercise')();
var setup         = require('../../lib/exercise_setup');

exercise = setup(exercise, {
	dir: __dirname,
	code: '070'
});

module.exports = exercise;
