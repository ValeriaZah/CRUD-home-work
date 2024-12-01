const express = require('express');
const { getNotifications, markAsRead } = require('../controllers/notificationController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getNotifications);
router.patch('/:notificationId', authMiddleware, markAsRead);

module.exports = router;
