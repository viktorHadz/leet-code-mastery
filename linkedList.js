class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    size() {
        let count = 0
        let node = this.head
        while (node) {
            count++
            node = node.next
        }
        return count
    }
    clear() {
        this.head = null
    }
    getLast() {
        let lastNode = this.head
        while (lastNode) {
            if (lastNode.next === null) return lastNode.data
            lastNode = lastNode.next
        }
    }
    getFirst() {
        return this.head
    }
    getAllReversed() {
        let node = this.head
        let allNodeData = []
        while (node) {
            allNodeData.push(node.data)
            node = node.next
        }
        allNodeData.reverse()
        return allNodeData
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(4)
let node3 = new ListNode(3)
node1.next = node2
node2.next = node3

let node4 = new ListNode(5)
let node5 = new ListNode(6)
let node6 = new ListNode(4)
node4.next = node5
node5.next = node6

const list1 = new LinkedList(node1)
const list2 = new LinkedList(node4)

console.log(JSON.stringify(list1))
console.log(list1.getAllReversed())
console.log(JSON.stringify(list2))
console.log(list2.getAllReversed())

