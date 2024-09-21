import { Injectable } from '@angular/core';
import { MemoryStorageService } from './memory-storage.service';

@Injectable()
export abstract class StorageService
  extends MemoryStorageService
  implements Storage
{
  public abstract override setItem<T>(key: string, value: T): void;
  public abstract override getItem<T>(key: string): T | null;

  get storage(): Storage {
    if (this.storageAvailable && this._storage !== undefined) {
      return this._storage;
    }

    return new MemoryStorageService();
  }

  protected readonly _storage: Storage | undefined;
  protected storageAvailable = false;
  protected isStorageAvailable(storage: Storage): boolean {
    // Check if storage is available.
    if (!storage) {
      return false;
    }

    // Check if the storage can actually be accessed.
    try {
      const testItemKey = `storage-test-entry-${Date.now()}`;
      const testItemValue = `storage-test-value-${Date.now()}`;
      storage.setItem(testItemKey, testItemValue);
      const retrievedItemValue = storage.getItem(testItemKey);
      storage.removeItem(testItemKey);

      return retrievedItemValue === testItemValue;
    } catch (error) {
      console.error({ error });
      return false;
    }
  }

  constructor(storage: Storage) {
    super();

    try {
      if (this.isStorageAvailable(storage)) {
        this._storage = storage;
        this.storageAvailable = true;
      }
    } catch (error) {
      console.warn(`Could not access localStorage`, { error });
    }
  }
}
