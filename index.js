'use strict';

const BST = require('./model/BST');

const express = require('express');
const server = express();
const port = 3000;
server.get('/', (req, res) => handler(res));
server.listen(port, () => console.log(`Base app listening on port ==> :${port}`));

const handler = (res) => {
    let tree = new BST();
    let nodeArray = [
        {key: 5, value: 'Root Node'},
        {key: 3, value: 'Node 3'},
        {key: 2, value: 'Node 2'},
        {key: 1, value: 'Node 1'},
        {key: 9, value: 'Node 9'},
        {key: 7, value: 'Node 7'},
        {key: 11, value: 'Node 11'}
    ];

    console.log(`Creation Nodes!`);
    tree.executeInsertion(nodeArray);

    console.log(`\nPRE_ORDER! :: `);
    tree.preOrder(tree.rootNode);

    console.log(`\nIN_ORDER! ::`);
    tree.inOrder(tree.rootNode);

    console.log(`\nPOST_ORDER! :: `);
    tree.postOrder(tree.rootNode);

    console.log(`\nBFS! :: `);
    tree.bfs(tree.rootNode);

    res.send('NODES CREATED! \n');
};
