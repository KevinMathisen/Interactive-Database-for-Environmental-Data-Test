const River = require('../models/river');

// Sample data
const rivers = [
    new River('Nile', '30.8352° N, 31.0789° E', 6650),
    // Add more rivers as needed
];

exports.getRivers = (req, res) => {
    res.json(rivers);
};