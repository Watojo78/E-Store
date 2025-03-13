import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'storefront-hero',
  imports: [],
  standalone: true,
  templateUrl: './storefront-hero.component.html',
  styleUrl: './storefront-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorefrontHeroComponent {

}
