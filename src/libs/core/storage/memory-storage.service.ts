import { Injectable } from '@angular/core';

@Injectable()
export class MemoryStorageService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private items: Record<string, any> = {};

  clear() {
    this.items = {};
  }

  getItem(key: string) {
    return this.items[key] === undefined ? null : this.items[key];
  }

  key(index: number): string | null {
    const keys = Object.keys(this.items);

    return keys[index] === undefined ? null : keys[index];
  }

  get length(): number {
    return Object.keys(this.items).length;
  }

  removeItem(key: string) {
    delete this.items[key];
  }

  setItem<T>(key: string, data: T) {
    this.items[key] = data;
  }
}
