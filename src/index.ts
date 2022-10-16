import {Sorter} from './Sorter';
// @ts-ignore
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from "./CharacterCollections";

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
const sorter1 = new Sorter(numbersCollection);
sorter1.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
