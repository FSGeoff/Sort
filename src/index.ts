import {Sorter} from './Sorter';
// @ts-ignore
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from "./CharacterCollections";
import {LinkedList} from "./LinkedLists";

const numbersCollection = new NumbersCollection([2, 5, 98, -16]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);


const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(25);
linkedList.add(-3);
linkedList.add(27);

linkedList.sort()
linkedList.print();