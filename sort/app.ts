import { NumberCollection } from './collections/NumbersCollection';
import { CharacterCollection } from './collections/CharactersCollection';
import { Sorter } from './Sorter';

const numberCollection  = new NumberCollection([12, -5, 45, 10, 55, 17]);
const sorter            = new Sorter(numberCollection);
      sorter.sort();
      console.log('SORTED NUMBER: ', numberCollection.data);
      
const characterCollection = new CharacterCollection('ankesh');
const _sorter              = new Sorter(characterCollection);
      _sorter.sort();
      console.log('SORTED STRING: ', characterCollection.data);