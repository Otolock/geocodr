# gocoder
A node module that uses Google's Geocoding API to return latitude and longitude

# Getting Started
1. Install geocodr and save it to your project.
`npm install --save 'gocoder'`
2. Obtain a Google Geocoding API key: [Getting an API key](https://developers.google.com/maps/documentation/geocoding/get-api-key)

# Sample Usage
```javascript
var Geocoder = require('gocoder').Geocoder;

let geo = new Geocoder(YOUR_API_KEY_HERE);

geo.geocode(process.argv[2] || 'San Juan, PR', function(err, coordinates) {
	if (err) { console.error('ERROR: ' + err); }

	console.log(coordinates);
});

geo.reverseGeocode(process.argv[3] || '18.465540', process.argv[4] || '-66.105736', function(err, address) {
	if (err) { console.error('ERROR: ' + err); }

	console.log(address);
});
```
