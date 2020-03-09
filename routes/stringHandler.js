'use strict';

const express = require('express');
const router = express.Router();

router.get(`/`, (req, res, next) => {
    res.send('Hi StringHandler! \n');
});

module.exports = router;
