import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'empty',
  imports: [],
  standalone: true,
  templateUrl: './empty.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyComponent {}
