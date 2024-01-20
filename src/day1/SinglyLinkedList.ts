type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        this.length++;

        const node = { value: item } as Node<T>;

        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        this.length++;

        if (!this.head) {
            this.prepend(item);
            return;
        }

        const node = { value: item } as Node<T>;

        let curr = this.head;
        for (let i = 0; i < idx; ++i) {
            if (!curr.next) {
                return;
            }

            curr = curr.next;
        }
        const next = curr.next;
        curr.next = node;
        node.next = next;
    }

    append(item: T): void {
        this.length++;

        if (!this.head) {
            this.prepend(item);
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        const node = { value: item } as Node<T>;
        curr.next = node;
    }

    remove(item: T): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (!this.head) {
            return undefined;
        }

        let curr = this.head;
        while (curr.next?.value !== item && curr.next) {
            curr = curr.next;
        }

        if (!curr.next && curr.next!.value !== item) {
            return undefined;
        }

        const node = curr.next;
        const next = node?.next;
        curr.next = next;

        return node?.value;
    }

    get(idx: number): T | undefined {
        if (!this.head) {
            return undefined;
        }

        let curr = this.head;
        for (let i = 0; i < idx; ++i) {
            if (!curr.next) {
                return undefined;
            }
            curr = curr.next;
        }

        return curr.value;
    }

    removeAt(idx: number): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (!this.head) {
            return undefined;
        }

        let curr = this.head;
        for (let i = 0; i < idx - 1 && curr.next; ++i) {
            curr = curr.next;
        }

        if (!curr.next) {
            return undefined;
        }

        const node = curr.next;
        curr.next = curr.next.next;

        return node.value;
    }
}
