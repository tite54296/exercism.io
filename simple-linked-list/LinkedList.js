module.exports = class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    // Adds a node to the end of the list
    addNode(node) {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
            lastNode.next = node
        } 
    }

    // Removed the last element of the list
    deleteNode() {
        let node = this.head;
        const listSize = this.size();
        for(let i=1; i<listSize-1; i++) {
            node = node.next
        }
        node.next = null
    }

    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }
}