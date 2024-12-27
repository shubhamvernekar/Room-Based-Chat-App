"use strict";
const express = require('express'); // Correct CommonJS import
const router = express.Router(); // Create a router instance
// Define routes
router.get('/', (req, res) => {
    res.send('User route');
});
module.exports = router; // Export the router
