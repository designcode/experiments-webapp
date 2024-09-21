import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StorageService } from '@core/storage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  storageService = inject(StorageService);

  key = Math.random().toString().substring(0, 5);
  title: string | null = 'Loading';

  constructor() {
    this.storageService.setItem(this.key, 'Storage Works');
    this.title = this.storageService.getItem(this.key);
  }
}
