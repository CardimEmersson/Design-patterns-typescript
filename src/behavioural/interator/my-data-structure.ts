import { MyDefaultInterator } from './my-default-interator';
import { MyInteratorProtocol } from './my-interator-protocol';

export class MyDataStructure {
  private _items: string[] = [];
  private iterator: MyInteratorProtocol<string> = new MyDefaultInterator(this);

  addItem(...items: string[]): void {
    items.forEach((item) => this._items.push(item));
  }

  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this.items.length;
  }

  changeIterator(iterator: MyInteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): MyInteratorProtocol<string> {
    // this.iterator.reset();
    return this.iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }
}
