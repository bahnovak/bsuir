const values = [11, 7, 9, 15, 5, 13, 20, 3, 6, 10, 8, 14, 12, 18, 25];

class Node {
    constructor(data) {
        this.data = data; // node value
        this.left = null;   // left node child reference
        this.right = null; // right node child reference
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; // корень bst
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode); // helper method below
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    searchNodeCount() {
        this.leafCount = 0;
        this.nodeCount = 0;
        const iterate = (node = this.root) => {
            if (node !== null) {
                if (node.left === null && node.right === null) {
                    this.leafCount += 1
                }
                this.nodeCount += 1;
                iterate(node.left);
                iterate(node.right);
            }
        }
        iterate.bind(this);
        iterate();
        console.log(`Количество узлов: ${this.leafCount}, количество листьев: ${this.nodeCount}`);
    }
}

const BST = new BinarySearchTree();
values.forEach(element => BST.insert(element));
BST.searchNodeCount();
