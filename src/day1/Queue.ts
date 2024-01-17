type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const node = {
            value: item,
        } as Node<T>;

        this.length++;

        if (!this.tail) {
            // if tail does not exist then the queue is essentially empty
            // so we make both head and tail the node
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node; // updates stale tail's next
        this.tail = node; // update the tail

        return;
    }

    deque(): T | undefined {
        if (!this.head) {
            // means empty queue
            return undefined;
        }

        this.length--;

        const h = this.head; // since we would lose the head we store it
        this.head = this.head.next; // update the stale head
        h.next = undefined; // sanitization

        if (this.length === 0) {
            // if this is not done then when we emptied our queue then
            // we might bug out the enqueue operation as the tail will be
            // pointing towards the removed head
            // Since a queue with single element will have same head and tail
            this.tail = undefined;
        }

        return h.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
