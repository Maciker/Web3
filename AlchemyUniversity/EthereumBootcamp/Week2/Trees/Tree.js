class Tree {
  constructor() {
    this.root = null;
  }

  addNode(node) {
    if (this.root) {
      this.addChild(this.root, node);
    } else {
      this.root = node;
    }
  }

  addChild(parent, child) {
    if (child.data < parent.data) {
      if (parent.left) {
        this.addChild(parent.left, child);
      } else {
        parent.left = child;
      }
    } else {
      if (parent.right) {
        this.addChild(parent.right, child);
      } else {
        parent.right = child;
      }
    }
  }

  hasNode(searchValue) {
    if (this.root) {
      let currentNode = this.root;
      let found = false;
      while (currentNode && !found) {
        if (searchValue < currentNode.data) {
          currentNode = currentNode.left;
        } else if (searchValue > currentNode.data) {
          currentNode = currentNode.right;
        } else {
          found = currentNode;
        }
      }

      if (found) {
        return true;
      }
    }
    return false;
  }
}

module.exports = Tree;
