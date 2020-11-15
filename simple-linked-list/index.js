const  ListNode = require("./ListNode");
const LinkedList = require("./LinkedList");

let node1 = new ListNode(2);
let node2 = new ListNode(6);
let node3 = new ListNode(5);
let list = new LinkedList(node1)
list.addNode(node2)
list.addNode(node3)

console.log(list.head.next.data)
list.deleteNode()
console.log(list.head.next.data)