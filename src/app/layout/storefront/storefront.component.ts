import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';
import { StorefrontHeaderComponent } from "../../shared/components/storefront-header/storefront-header.component";
import { StorefrontFooterComponent } from "../../shared/components/storefront-footer/storefront-footer.component";

@Component({
  selector: 'storefront',
  imports: [RouterOutlet, SimplebarAngularModule, StorefrontHeaderComponent, StorefrontFooterComponent],
  standalone: true,
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorefrontComponent implements OnInit {
  options = { autoHide: true, scrollbarMinSize: 100 };
  ngOnInit(): void {}
}
