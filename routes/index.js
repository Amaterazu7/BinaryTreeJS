'use strict';

const express = require('express');
const router = express.Router();

/* GET Home page. */
router.get(`/`, (req, res, next) => {
    res.json({ title: 'Express JS running Successfully!' });
});

module.exports = router;
