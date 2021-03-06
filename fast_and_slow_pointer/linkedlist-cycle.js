class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const has_cycle = function (head) {
    let l = head;
    let r = head.next;

    while (l.next && r.next) {
        if (l === r) return true
        r = r.next?.next;
        l = l.next;
    }
    return false;
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
