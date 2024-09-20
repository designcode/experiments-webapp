import { Provider } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { StorageService } from './storage.service';
import { MemoryStorageService } from './memory-storage.service';

interface StorageFeature<KindT extends StorageFeatureKind> {
  kind: KindT;
  providers: Array<Provider>;
}

enum StorageFeatureKind {
  WithLocalStorage = 0,
}

export function withLocalStorage(): StorageFeature<StorageFeatureKind.WithLocalStorage> {
  return {
    kind: StorageFeatureKind.WithLocalStorage,
    providers: [
      {
        provide: StorageService,
        useClass: LocalStorageService,
      },
    ],
  };
}

export function provideStorage(
  ...storageOptions: Array<StorageFeature<StorageFeatureKind>>
): Provider {
  return [
    {
      provide: StorageService,
      useClass: MemoryStorageService,
    },
    ...storageOptions.map(({ providers }) => providers),
  ];
}
