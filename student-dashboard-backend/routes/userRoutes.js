const express = require('express');
const { getUsers, getUserById, addUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', addUser);

module.exports = router;
