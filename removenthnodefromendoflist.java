//Java Solution

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int count = 0;
        
        ListNode curr = head;
        while (curr != null) {
            count++;
            curr = curr.next;
        }
        count -= n;
        
        ListNode newNode = new ListNode(-1);
        newNode.next = head;
        ListNode temp = newNode;
        
        while (count > 0) {
            temp = temp.next;
            count--;
        }
        temp.next = temp.next.next;
        
        return newNode.next;
    }
}