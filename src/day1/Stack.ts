type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
        return;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (!this.head) {
            return undefined;
        }

        const h = this.head;
        this.head = h.prev;

        h.prev = undefined;

        if (this.length === 0) {
            this.head = undefined;
        }

        return h.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
