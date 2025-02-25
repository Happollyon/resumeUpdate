// filepath: /workspaces/resumeUpdate/my-react-app/backend/src/routes/apiRoutes.js
const express = require('express');
const { queryAPI } = require('../controllers/apiController');

const router = express.Router();

router.get('/query', queryAPI);

module.exports = router;