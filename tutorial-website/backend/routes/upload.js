const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { uploadProfile } = require('../controllers/uploadController');

router.post('/profile', upload.single('file'), uploadProfile);

module.exports = router;
