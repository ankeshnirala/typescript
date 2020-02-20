export class CharacterCollection {

    constructor( public data: string ) {};

    get length(): number {
        return this.data.length;
    }

    compare( lIndex: number, rIndex: number ): boolean {

        return this.data[lIndex].toLowerCase() > this.data[rIndex].toLowerCase();

    }

    swap( lIndex: number, rIndex: number ): void {

        let characters = this.data.split('');

        let leftHand        = characters[lIndex];
        characters[lIndex]  = characters[rIndex];
        characters[rIndex]  = leftHand;

        this.data = characters.join('');

    }
};