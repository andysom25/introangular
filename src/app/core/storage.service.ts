import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  storage = localStorage;

  constructor() { }

  get(key: string, storage?: Storage): string {
    const s = storage || this.storage;

    return s.getItem(key);
  }
  put(key: string, value: string, storage?: Storage) {
    const s = storage || this.storage;

    s.setItem(key, value);
  }

  getKeys(storage?: Storage) {
    const s = storage || this.storage;
    const keys = [];

    for (let x = 0; x < s.length; x ++) {
      keys.push(s.key(x));
    }

    return keys;
  }



}
