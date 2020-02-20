
export class NumberCollection {
    
    constructor( public data: number[] ) {};

    get length(): number {
        return this.data.length;
    }

    compare( lIndex: number, rIndex: number ): boolean {
        return this.data[lIndex] > this.data[rIndex];
    }

    swap( lIndex: number, rIndex: number ): void {

        let leftHand        = this.data[lIndex];
        this.data[lIndex]   = this.data[rIndex];
        this.data[rIndex]   = leftHand;

    }
};