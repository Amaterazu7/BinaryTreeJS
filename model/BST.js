const BinaryTree = require('./BinaryTree');
const nodeClass = require('./Tree');
const _ = require('lodash');

class BST extends BinaryTree {

    constructor() {
        super();
        this.rootNode = null;
    }

    executeInsertion(nodeArray) {
        _.forEach(nodeArray, (n) => {
            this.createBST(n.key, n.value);
        });
    }

    createBST(key, value) {
        let node = new nodeClass(key, value);
        if (this.rootNode === null) {
            this.rootNode = node;
        } else {
            this.insertNode(node);
        }
    }

    insertNode(node) {
        let temporalRoot = this.rootNode;
        while (temporalRoot !== null) {
            node.root = temporalRoot;
            if (node.key >= temporalRoot.key) {
                temporalRoot = temporalRoot.right;
            } else {
                temporalRoot = temporalRoot.left;
            }
        }
        if (node.key < node.root.key) {
            node.root.left = node;
        } else {
            node.root.right = node;
        }
    }

    preOrder(tree) {
        if (tree !== null) {
            console.log(tree.key, tree.value);
            this.preOrder(tree.left);
            this.preOrder(tree.right);
        }
    }

    inOrder(tree) {
        if (tree !== null) {
            this.inOrder(tree.left);
            console.log(tree.key, tree.value);
            this.inOrder(tree.right);
        }
    }

    postOrder(tree) {
        if (tree !== null) {
            this.postOrder(tree.left);
            this.postOrder(tree.right);
            console.log(tree.key, tree.value);
        }
    }

    bfs(tree) {
        let result = [];
        let queue = [];

        queue.push(tree);

        while (queue.length) {
            let currentNode = queue.shift();
            result.push(currentNode.key);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        console.log(result);
    }

}

module.exports = BST;
