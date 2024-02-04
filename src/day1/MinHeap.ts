export default class MinHeap {
    public length: number;
    private data: any[];
    

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length == 0) return -1;

        const out = this.data[0];
        if (this.length === 0) {
            this.data = []
            return out;
        }

        this.length--;
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(idx: number): void {
        if (idx >= this.length) {
            return;
        }
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        if (leftIdx >= this.length || idx >= this.length) return;

        const leftValue = this.data[leftIdx]
        const rightValue = this.data[rightIdx]
        const v = this.data[idx];

        if (leftValue > rightValue && v > rightValue) {
            this.data[idx] = rightValue;
            this.data[rightIdx] = v;
            this.heapifyDown(rightIdx);
        } else if (rightValue > leftValue && v > leftValue) {
            this.data[idx] = leftValue;
            this.data[leftIdx] = v;
            this.heapifyDown(leftIdx) ;
        }
    }
    private heapifyUp(idx: number): void {
        if (idx == 0) return;

        const p = this.parent(idx);
        const parentV = this.data[p];
        const v = this.data[idx];

        if (parentV > v) {
            this.data[idx] = parentV;
            this.data[p] = v;
            this.heapifyUp(p);
        }
    }
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }

    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
}

