const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicGFyYWtpc2UxMyIsImEiOiJjbDRrdjZqeHQxZnV6M2RyeWFqY3Vka3M5In0.qem25y4i47XLX9pCO7C6Hw&limit=1`
    

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features && body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            if (body.features) {
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                })
            }
        }
    })
}

module.exports = geocode