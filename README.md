# geocodr
A node module that uses Google's Geocoding API to return latitude and longitude

# Getting Started
1. Install geocodr and save it to your project.
`npm install --save '@otolock/geocodr'
2. Obtain a Google Geocoding API key: [Getting an API key](https://developers.google.com/maps/documentation/geocoding/get-api-key)

# Sample Usage
    var geocodr = require('geocodr');

    geocodr.getGeocode('ENTER YOUR API KEY HERE', 'New York, NY', function(err, data) {
	    if (err) {
	    	console.log(err);
	    }

    	console.log('Lat: ' + data.lat + '\n' + 'Long: ' + data.lng);
    });
