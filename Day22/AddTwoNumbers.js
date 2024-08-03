class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next; 
    }
}

function addTwoNumbers(list1, list2) {
    let dummyNode = new ListNode();
    let l1 = list1; 
    let l2 = list2; 
    let curr = dummyNode;
    let carry = 0;
    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyNode.next;
}

function printList(head) {
    let list = [];
    while (head !== null) {
        list.push(head.val);
        head = head.next;
    }
    console.log(list.join(" -> "));
}

let list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let list2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result1 = addTwoNumbers(list1, list2);
printList(result1);

let list3 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9 , new ListNode(9)))))));
let list4 = new ListNode(9, new ListNode(9, new ListNode(9 , new ListNode(9))));
let result2 = addTwoNumbers(list3,list4);
printList(result2);

  
