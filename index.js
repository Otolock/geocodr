var request = require('request');

/* Returns latitude and longitude for a given address */
module.exports.getGeocode = function (API_KEY, address, callback) {
	const options = {
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address.replace(' ', '+')}&key=${API_KEY}`,
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
		callback(null, data.results[0].geometry.location);
	});
}

module.exports.getReverseGeocode = function (API_KEY, lat, lng, callback) {
	const options = {
		url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat + ',' + lng}&key=$(API_KEY)`,
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
		callback(null, data.results[0].formatted_address);
	});
}
