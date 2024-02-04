type Node<T> = {
    value: T,
    next?: Node<T>;
};
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item, next: undefined} as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) return undefined;
        const head = this.head // save head
        this.head = this.head.next; // update pointer
        head.next = undefined; // free pointer, optional in TS
        this.length--; // we are deleting head
        return head?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
};
