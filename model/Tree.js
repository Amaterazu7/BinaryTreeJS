'use strict';

class Tree {
    constructor(key, value) {
        this.root = null;
        this.left = null;
        this.right = null;
        this.key = key;
        this.value = value;
    }
}

module.exports = Tree;
