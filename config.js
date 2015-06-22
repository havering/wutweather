var Twit = require('twit');
var Weather = require('weather-js');

var T = new Twit({
   
});

var defaultList = [
		'San Jose, CA',	// san jose
		'Seattle, WA',	// seattle
		'Portland, OR',	// portland
		'Memphis, TN',	// memphis
		'Fort Worth, TX',	// fort worth
		'Sacramento, CA',	// sacramento
		'Colorado Springs, CO',	// colorado springs
		'Springfield, MO',	// springfield
		'Lowell, MA',	// lowell
		'Oklahoma City, OK'		// oklahoma city
	];

	var rand = Math.floor((Math.random() * 9) + 1);

	var city = defaultList[rand];

	var weathering;
	var city;
	var temp;
	var desc;

Weather.find({search: city, degreeType: 'F'}, function(err, result) {
	if(err) console.log(err);

	
	weathering = result;

	// convert to string
	city = JSON.stringify(weathering[0].location.name);
	temp = JSON.stringify(weathering[0].current.temperature);
	desc = JSON.stringify(weathering[0].current.skytext);

	// get rid of quotation marks
	city = city.replace(/\"/g, "");
	temp = temp.replace(/\"/g, "");
	desc = desc.replace(/\"/g, "");

	// convert description to lower case since it goes at the end of the tweet
	desc = desc.toLowerCase();

	console.log(city);
	console.log(temp);
	console.log(desc);

	T.post('statuses/update', { status: "The weather in " + city + " is " + temp + "F and " + desc + "." }, function(err, data, response) {
  if(err) {
    console.log("There was a problem tweeting the message.", err);
  }
});

});



 