// Import modules
const express = require('express');
const path = require('path');

// Create express app
const app = express();

// Set path for public assets
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'views') });



// comment
});

app.get('/graph', (req, res) => {
  res.sendFile('graph.html', { root: path.join(__dirname, 'views') });
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Set the port 
const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;