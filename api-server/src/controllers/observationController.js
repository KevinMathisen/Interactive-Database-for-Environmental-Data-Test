const Observation = require('../models/Observation');

// Sample data
const observations = [
    new Observation('Nile', new Date(), 'Tilapia', 20),
    // Add more observations as needed
];

exports.getObservations = (req, res) => {
    res.json(observations);
};