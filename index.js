var request = require('request');

function Geocoder(API_KEY) {
	this.BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';	
	this.API_KEY = API_KEY;

	/* Given an address, returns object containing lat and lng coordinates */
	this.geocode = function (address, callback) {
		const options = {
			url: this.BASE_URL + 'address=' +  address.replace(' ', '+') + '&key=' + this.API_KEY,
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Accept-Charset': 'utf-8',
			}
		}

		request(options, function(err, res, body) {
			if (err) {
				callback(err);
			}

			let data = JSON.parse(body);
			let coordinates = {
				lat: data.results[0].geometry.location.lat,
				lng: data.results[0].geometry.location.lng
			}

			callback(null, coordinates);
		});
	}
};

module.exports = {
	Geocoder: Geocoder
}
