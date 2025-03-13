import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StorefrontHeroComponent } from "../../components/storefront-hero/storefront-hero.component";

@Component({
  selector: 'storefront-home',
  imports: [StorefrontHeroComponent],
  standalone: true,
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
