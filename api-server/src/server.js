const express = require('express');
const app = express();

// Import routes
const riverRoutes = require('./routes/riverRoutes');
const observationRoutes = require('./routes/observationRoutes');

// Middlewares
app.use(express.json());

// Route middlewares
app.use('/api/rivers', riverRoutes);
app.use('/api/observations', observationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));