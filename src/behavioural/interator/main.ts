import { MyDataStructure } from './my-data-structure';
import { MyReverseInterator } from './my-reverse-interator copy';

const dataStructure = new MyDataStructure();

dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

console.log(dataStructure);

const [a, b] = dataStructure;

console.log(a, b);
const [c] = dataStructure;
console.log(c);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}

dataStructure.changeIterator(new MyReverseInterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
