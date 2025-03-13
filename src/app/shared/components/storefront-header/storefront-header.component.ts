import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'storefront-header',
  imports: [],
  standalone: true,
  templateUrl: './storefront-header.component.html',
  styleUrl: './storefront-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorefrontHeaderComponent {

}
