class ListNode{
    constructor(val = 0 , next = null){
        this.val = val;
        this.next = next
    }
}

function mergeTwoLists(list1,list2){
    let temp1 = list1;
    let temp2 = list2;

    let head = new ListNode();
    let temp = head;

    while(temp1 !== null && temp2 !== null){
        if(temp1.val < temp2.val){
            temp.next = temp1;
            temp = temp1;
            temp1 = temp1.next;
        }else{
            temp.next = temp2;
            temp = temp2;
            temp2 = temp2.next;
        }
    }
    if(temp1 === null) temp.next = temp2;
    else temp.next = temp1;

    return head.next;
}



let list1 = new ListNode(1,new ListNode(2, new ListNode(7)));
let list2 = new ListNode(2,new ListNode(3, new ListNode(5)));

let mergeList = mergeTwoLists(list1,list2);

let temp = mergeList;
while(temp !== null){
    console.log(temp.val + " ");
    temp = temp.next;
}
