import {NumbersCollection} from "./NumbersCollection";

export class Sorter {
    constructor(public collection: NumbersCollection) {
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
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }


            }
        }
    }
}