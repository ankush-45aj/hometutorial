const express = require('express');
const router = express.Router();

// placeholder attendance endpoints
router.get('/', (req, res) => res.json({ attendance: [] }));
router.post('/', (req, res) => res.json({ message: 'record attendance' }));

module.exports = router;
