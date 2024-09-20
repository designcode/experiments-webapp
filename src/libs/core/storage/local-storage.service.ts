import { Injectable, Signal, forwardRef, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { WINDOW } from '@shared/tokens';
import { Observable, of } from 'rxjs';

@Injectable()
export class LocalStorageService extends StorageService {
  readonly window = inject(WINDOW);

  constructor() {
    super(window.localStorage);
  }

  setItem<T>(key: string, value: T) {
    return of(this.storage.setItem(key, JSON.stringify(value)));
  }

  getItem<T>(key: string) {
    const item = this.storage.getItem(key);

    if (item) {
      try {
        const parsedItem = JSON.parse(item);

        return parsedItem;
      } catch {
        return undefined;
      }
    }

    return undefined;
  }
}
