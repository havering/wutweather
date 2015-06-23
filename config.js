var Twit = require('twit');
var Weather = require('weather-js');

var T = new Twit({
  
});


function findWeather() {
	var defaultList = [
		'San Jose, CA',	
		'Seattle, WA',	
		'Portland, OR',	
		'Memphis, TN',	
		'Fort Worth, TX',	
		'Sacramento, CA',	
		'Colorado Springs, CO',	
		'Springfield, MO',	
		'Lowell, MA',	
		'Oklahoma City, OK', 		
		'Baltimore, MD',
		'Jacksonville, FL',
		'Tuscon, AZ',
		'Little Rock, AR',
		'El Paso, TX',
		'San Antonio, TX',
		'Reno, NV',
		'Salt Lake City, UT',
		'San Diego. CA',
		'Albuquerque, NM',
		'Kansas City, MO',
		'Saint Louis, MO',
		'San Francisco, CA',
		'Oakland, CA',
		'Los Angeles, CA',
		'Long Beach, CA',
		'Anaheim, CA',
		'Phoenix, AZ',
		'Spokane, WA',
		'Las Vegas, NV',
		'Boisie, ID',
		'Billings, MT',
		'Denver, CO',
		'Santa Fe, NM',
		'Houston, TX',
		'Austin, TX',
		'Dallas, TX',
		'Tulsa, OK',
		'Wichita, KS',
		'Omaha, NE',
		'Des Moines, IA',
		'Sioux Falls, SD',
		'Fargo, ND',
		'Saint Paul, MN',
		'Minneapolis, MN',
		'Milwaukee, WI',
		'Chicago, IL',
		'New Orleans, LA',
		'Jackson, MS',
		'Birmingham, AL',
		'Tampa, FL',
		'Miami, FL',
		'Orlando, FL',
		'Atlanta, GA',
		'Nashville, TN',
		'Charlotte, NC',
		'Charleston, SC',
		'Louisville, KY',
		'Lexington, KY',
		'Indianapolis, IN',
		'Cleveland, OH',
		'Cincinatti, OH',
		'Detroit, MI',
		'Virginia Beach, VA',
		'Washington, DC',
		'Philadelphia, PA',
		'Pittsburgh, PA',
		'Newark, NJ',
		'Dover, DE',
		'New York, NY',
		'Buffalo, NY',
		'Hartford, CT',
		'Providence, RI',
		'Boston, MA',
		'Portland, ME',
		'Toronto, ON',
		'Ottawa, ON',
		'Montreal, QC', 
		'Quebec City, QC',
		'Edmonton, AB',
		'Calgary, AB',
		'Vancouver, BC',
		'Victoria, BC',
		'Whitehorse, YT',
		'Yellowknife, NT',
		'Winnipeg, MB',
		'Regina, SK',
		'Halifax, NS'

	];

	var rand = Math.floor((Math.random() * 88) + 1);

	var city = defaultList[rand];

	console.log('City is: ' + city);

	var weathering;
	var thecity;
	var temp;
	var desc;

	Weather.find({search: city, degreeType: 'F'}, function(err, result) {
		if(err) console.log(err);

		
		weathering = result;

		// convert to string
		thecity = JSON.stringify(weathering[0].location.name);
		temp = JSON.stringify(weathering[0].current.temperature);
		desc = JSON.stringify(weathering[0].current.skytext);

		// get rid of quotation marks
		thecity = thecity.replace(/\"/g, "");
		temp = temp.replace(/\"/g, "");
		desc = desc.replace(/\"/g, "");

		// convert description to lower case since it goes at the end of the tweet
		desc = desc.toLowerCase();

		// post the tweet
		T.post('statuses/update', { status: "The weather in " + thecity + " is " + temp + "F and " + desc + "." }, function(err, data, response) {
	 		if(err) {
	    		console.log("There was a problem tweeting the message.", err);
	 		 }
		});
	});
}

findWeather();
//setInterval(findWeather, 300000);	// every 5 minutes


 