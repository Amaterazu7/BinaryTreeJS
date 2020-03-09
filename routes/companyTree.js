'use strict';

const express = require('express');
const router = express.Router();

router.get(`/`, (req, res, next) => {
    res.send('Hi CompanyTree! \n');
});

module.exports = router;
