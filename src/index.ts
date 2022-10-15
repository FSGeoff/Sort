class Sorter {
    constructor(public collection: number[] | string) {
    }
    /* THE ABOVE CODE FUNCTION THE SAME
    AS THE CODE BENEATH
    collection : number[];
     constructor(collection : number[]) {
         this.collection = collection;
     */
    sort(): void {
        const {length} = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {

                //Only works if collection is an array of numbers
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);

