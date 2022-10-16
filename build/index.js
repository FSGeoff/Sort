"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const NumbersCollection_1 = require("./NumbersCollection");
const CharacterCollections_1 = require("./CharacterCollections");
const LinkedLists_1 = require("./LinkedLists");
const numbersCollection = new NumbersCollection_1.NumbersCollection([2, 5, 98, -16]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharacterCollections_1.CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedLists_1.LinkedList();
linkedList.add(50);
linkedList.add(25);
linkedList.add(-3);
linkedList.add(27);
linkedList.sort();
linkedList.print();
