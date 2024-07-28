class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function calculateDepth(root){
    if(root === null) return 0;

    //Check Left Subtree
    let leftDepth = calculateDepth(root.left);
    let rightDepth = calculateDepth(root.right);

    return Math.max(leftDepth,rightDepth) + 1; 
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);

let depth = calculateDepth(root);
console.log(`Depth of the binary tree is: ${depth}`);