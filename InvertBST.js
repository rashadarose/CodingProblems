//Invert Binary Search Tree

//Creat Tree Structure
function Node(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

//Invert Function
const invertTree = function(root) {
  if(!root || !root.left && !root.right) { // base case
    return root;
  }
  //swap
  const oldLeft = root.left; //temp variable set left node to temp
  root.left = root.right; //set left node to new right
  root.right = oldLeft; // set right node to temp or in otherwords (to left)
  invertTree(root.left); //recursive call for whole right side
  invertTree(root.right); //recursive call on whole left side
  return root;
};

//Populate Tree
const tree = new Node(4, new Node(2, new Node(1), new Node(3)), new Node(7, new Node(6), new Node(9)));
console.log(invertTree(tree));




