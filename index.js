const express = require('express');
const app = express();

// Set the template engine ejs
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));

// App routes
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Lister on port 3000
server = app.listen(3000)