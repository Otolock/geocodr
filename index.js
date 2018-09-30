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
			if (err) { callback(err); }

			let data = JSON.parse(body);
			let coordinates = {
				lat: data.results[0].geometry.location.lat,
				lng: data.results[0].geometry.location.lng
			}

			callback(null, coordinates);
		});
	}

	/* Given a latitude and longitude, returns object containing city, state and country code. */
	this.reverseGeocode = function(lat, lng, callback) {
		const options = {
			url: this.BASE_URL + 'latlng=' + lat + ',' + lng + '&key=' + this.API_KEY,
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Accept-Charset': 'utf-8',
			}
		}

		request(options, function(err, res, body) {
			if (err) { callback(err); }
			
			let data = JSON.parse(body);

			/* Snippet taken from https://gist.github.com/danasilver/6024009#gistcomment-1620556 */
			let storableLocation = {};

			for (var ac = 0; ac < data.results[0].address_components.length; ac++) {
				    
				   var component = data.results[0].address_components[ac];
				    
				   if(component.types.includes('sublocality') || component.types.includes('locality')) {
						         storableLocation.city = component.long_name;
						    }
				   else if (component.types.includes('administrative_area_level_1')) {
						         storableLocation.state = component.short_name;
						    }
				   else if (component.types.includes('country')) {
						         storableLocation.country = component.long_name;
						         storableLocation.registered_country_iso_code = component.short_name;
						    }

			};

			callback(null, storableLocation);
		});
	}
};

module.exports = {
	Geocoder: Geocoder
}
