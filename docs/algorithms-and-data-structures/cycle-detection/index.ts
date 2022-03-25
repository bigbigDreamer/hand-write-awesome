// https://leetcode.com/problems/linked-list-cycle/

function search(head) {
    let fast = head
    let slow = head

    while (fast != null && fast.next != null && slow != null) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            return true
        }
    }
    return false

}
