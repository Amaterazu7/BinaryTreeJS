'use strict';

const express = require('express');
const router = express.Router();
const companyTreeController = require('../controller/companyTreeController');
const employeeList = require('../assets/EmployeeArrayList');

router.get(`/`, (req, res, next) => {
    const companyTree = companyTreeController.buildTree(employeeList);
    console.dir(companyTree, { depth: 999 });
    res.json(companyTree);
});

module.exports = router;
