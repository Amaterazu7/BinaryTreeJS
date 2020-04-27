'use strict';

const express = require('express');
const router = express.Router();
const handlerStringController = require('../controller/handlerStringController');

router.get(`/queryString`, (req, res, next) => {
    const obj = handlerStringController.getObject('a1.b2.article1=0&a2.article2=1&c3!article3=0&article16-abc=2');
    res.json(obj);
});

router.get(`/sumString`, (req, res, next) => {
    const total = handlerStringController.getSum('397');
    res.send(`::: Finish Successfully! The Total >>> ${total} ::: \n`);
});


router.post(`/isPalindrome`, (req, res, next) => {
    const itIs = handlerStringController.isPalindrome(req.body.word);
    res.send(`::: Finish Successfully! The Word isPalindrome?? >>> ${itIs} ::: \n`);
});

module.exports = router;
