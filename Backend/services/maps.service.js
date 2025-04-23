const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {

    // const apiKey = process.env.GOOGLE_MAPS_API;
    const apiKey = process.env.MAP_BOX_API;
    const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(address)}&access_token=${apiKey}`


    try {
        const response = await axios.get(url)

        if (response.data.features && response.data.features.length > 0) {
            const coordinates = response.data.features[0].geometry.coordinates;
            return {
                latitude: coordinates[1],
                longitude: coordinates[0]
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getCoordinates = async (place) => {
    const apiKey = process.env.MAP_BOX_API;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?access_token=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (!response.data.features || response.data.features.length === 0) {
            throw new Error(`Could not find coordinates for ${place}`);
        }

        return response.data.features[0].center; // ✅ Returns [longitude, latitude]
        
    } catch (err) {
        console.error(`Error fetching coordinates for ${place}:`, err.response?.data || err.message);
        throw err;
    }
};

module.exports.getDistanceTime = async (originCoords, destinationCoords) => {
    if (!originCoords || !destinationCoords) {
        throw new Error('Invalid coordinates received.');
    }

    const apiKey = process.env.MAP_BOX_API;
    const [originLng, originLat] = originCoords;  // ✅ Correct Destructuring
    const [destinationLng, destinationLat] = destinationCoords;

    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${originLng},${originLat};${destinationLng},${destinationLat}?geometries=geojson&access_token=${apiKey}`;

    // const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.routes.length > 0) {
            const route = response.data.routes[0];
            return {
                distance: (route.distance / 1000).toFixed(2), // Convert meters to km
                duration: (route.duration / 60).toFixed(2), // Convert seconds to minutes
                geometry: route.geometry
            };
        } else {
            throw new Error('No routes found');
        }
    } catch (err) {
        console.error('Error fetching distance and time:', err.response?.data || err.message);
        throw err;
    }
};

// Service to get auto-complete suggestions from Mapbox Geocoding API
module.exports.getAutoCompleteSuggestions = async (input) => {
    const apiKey = process.env.MAP_BOX_API;

    // Make sure the input is not empty
    if (!input || input.trim() === '') {
        throw new Error('Input is required');
    }

    // URL for Mapbox Geocoding API
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(input)}.json?access_token=${apiKey}&autocomplete=true&limit=5`;

    try {
        const response = await axios.get(url);

        // If we get a valid response, return the suggestions
        if (response.data.features && response.data.features.length > 0) {
            return response.data.features.map(feature => ({
                id: feature.id,
                name: feature.place_name,
                coordinates: feature.center // [longitude, latitude]
            }));
        } else {
            return [];  // Return an empty array if no suggestions
        }
    } catch (err) {
        console.error('Error fetching autocomplete suggestions:', err.message);
        throw new Error('Failed to fetch autocomplete suggestions');
    }
};


module.exports.getCaptainsInTheRedius = async (ltd, lng, radius) => {

    // redius in km

    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[ltd, lng], radius / 6371]
            }
        }
    });

    return captains;
}