/**
 * @lc app=leetcode.cn id=144 lang=javascript
 * @problem https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 * @tags 栈 | 递归
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * @tip 递归实现
 */
// var preorderTraversal = function(root) {
//   let stack = []

//   const preorderNode = node => {
//     if (node) {
//       stack.push(node.val)
//       preorderNode(node.left)
//       preorderNode(node.right)
//     }
//   }

//   preorderNode(root)

//   return stack
// };

/**
 * @param {TreeNode} root
 * @return {number[]}
 * @tip 栈实现，右 -> 左 -> 根
 */
var preorderTraversal = function(root) {
  let [stack, result] = [[], []]

  if (!root) return result

  // 根节点入栈
  stack.push(root)

  while (stack.length) {
    // 栈顶出栈
    let top = stack.pop()

    result.push(top.val)

    // 右子节点入栈
    if (top.right) stack.push(top.right)

    // 左子节点入栈
    if (top.left) stack.push(top.left)
  }

  return result
};

// @lc code=end
