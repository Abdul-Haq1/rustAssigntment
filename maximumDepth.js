class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function maxDepth(root) {
    // If the root is null, the depth is 0
    if (root === null) {
        return 0;
    }

    // Recursively calculate the maximum depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // Return the maximum depth of the left and right subtrees, plus 1 (for the current node)
    return Math.max(leftDepth, rightDepth) + 1;
}
