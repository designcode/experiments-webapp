import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './design-system.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignSystemComponent {}
