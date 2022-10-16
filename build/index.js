"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
// @ts-ignore
const NumbersCollection_1 = require("./NumbersCollection");
const CharacterCollections_1 = require("./CharacterCollections");
const numbersCollection = new NumbersCollection_1.NumbersCollection([50, 3, -5, 0]);
const sorter1 = new Sorter_1.Sorter(numbersCollection);
sorter1.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharacterCollections_1.CharactersCollection('Xaayb');
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
