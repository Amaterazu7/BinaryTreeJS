'use strict';

const express = require('express');
const router = express.Router();
const nodeArrayList = require('../assets/NodeArrayList');
const BST = require('../model/BST');

router.get(`/`, (req, res, next) => {
    handler(res);
});

const handler = (res) => {
    let tree = new BST();

    console.log(`Start the Nodes creation!...`);
    tree.executeInsertion(nodeArrayList);

    console.log(`\nPRE_ORDER! :: `);
    tree.preOrder(tree.rootNode);

    console.log(`\nIN_ORDER! ::`);
    tree.inOrder(tree.rootNode);

    console.log(`\nPOST_ORDER! :: `);
    tree.postOrder(tree.rootNode);

    console.log(`\nBFS! :: `);
    tree.bfs(tree.rootNode);

    res.send(' -- ::: The Tree was create and also traveled Successfully! ::: -- \n');
};

module.exports = router;
