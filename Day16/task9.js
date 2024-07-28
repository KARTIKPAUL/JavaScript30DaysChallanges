class TreeNode{
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

function inOrderTraverse(root, ans = []){
    if(root == null) return ans;

    //Traverse On the Left Side
    inOrderTraverse(root.left,ans);
    //Push the value
    ans.push(root.value);
    //Traverse On the Right Side
    inOrderTraverse(root.right,ans);

    return ans;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const result = inOrderTraverse(root);
console.log(`InOrder Traver is: ${result}`);
