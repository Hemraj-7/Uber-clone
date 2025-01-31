const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: 'Coordinates not found' });
    }
}

module.exports.getDistanceTime = async (req, res, next) => {
    try {
        // Validate request input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { origin, destination } = req.query;
        if (!origin || !destination) {
            return res.status(400).json({ message: 'Origin and Destination are required' });
        }

        // ✅ Convert city names to coordinates
        const originCoords = await mapService.getCoordinates(origin);
        const destinationCoords = await mapService.getCoordinates(destination);

        // ✅ Call Directions API with coordinates
        const distanceTime = await mapService.getDistanceTime(originCoords, destinationCoords);

        res.status(200).json(distanceTime);
    } catch (err) {
        console.error("Full Error:", err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};


// Controller to handle autocomplete suggestions request
module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
    try {
        // Validate input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query;
        if (!input) {
            return res.status(400).json({ message: 'Input is required' });
        }

        // Get the autocomplete suggestions from the service
        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        res.status(200).json(suggestions);
    } catch (err) {
        console.error('Full Error:', err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};